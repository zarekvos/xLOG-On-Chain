import { 
  type User, 
  type InsertUser, 
  type BlogPost, 
  type InsertBlogPost,
  type Category,
  type InsertCategory,
  type Tag,
  type InsertTag,
  type Comment,
  type InsertComment,
  type Like,
  type InsertLike,
  type Follow,
  type InsertFollow,
  type UserAnalytics
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByWallet(walletAddress: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, user: Partial<User>): Promise<User | undefined>;
  getUserAnalytics(userId: string): Promise<UserAnalytics | undefined>;
  
  // Blog post operations
  getBlogPosts(options?: {
    category?: string;
    tags?: string[];
    author?: string;
    featured?: boolean;
    trending?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostsByAuthor(author: string): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: string): Promise<boolean>;
  incrementBlogPostViews(id: string): Promise<void>;
  getTrendingPosts(limit?: number): Promise<BlogPost[]>;
  getFeaturedPosts(limit?: number): Promise<BlogPost[]>;
  getPostsByCategory(category: string, limit?: number): Promise<BlogPost[]>;
  getPostsByTag(tag: string, limit?: number): Promise<BlogPost[]>;
  searchPosts(query: string, limit?: number): Promise<BlogPost[]>;
  
  // Category operations
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategory(id: string, category: Partial<Category>): Promise<Category | undefined>;
  
  // Tag operations
  getTags(): Promise<Tag[]>;
  getTag(id: string): Promise<Tag | undefined>;
  createTag(tag: InsertTag): Promise<Tag>;
  updateTag(id: string, tag: Partial<Tag>): Promise<Tag | undefined>;
  getTrendingTags(limit?: number): Promise<Tag[]>;
  
  // Comment operations
  getCommentsByPost(postId: string): Promise<Comment[]>;
  getComment(id: string): Promise<Comment | undefined>;
  createComment(comment: InsertComment): Promise<Comment>;
  updateComment(id: string, comment: Partial<Comment>): Promise<Comment | undefined>;
  deleteComment(id: string): Promise<boolean>;
  
  // Like operations
  getLike(postId?: string, commentId?: string, userId?: string, walletAddress?: string): Promise<Like | undefined>;
  createLike(like: InsertLike): Promise<Like>;
  deleteLike(id: string): Promise<boolean>;
  getPostLikes(postId: string): Promise<Like[]>;
  
  // Follow operations
  getFollow(followerId: string, followingId: string): Promise<Follow | undefined>;
  createFollow(follow: InsertFollow): Promise<Follow>;
  deleteFollow(id: string): Promise<boolean>;
  getUserFollowers(userId: string): Promise<Follow[]>;
  getUserFollowing(userId: string): Promise<Follow[]>;
  
  // AI and recommendation operations
  getAIRecommendations(userId?: string, limit?: number): Promise<BlogPost[]>;
  updateTrendingScores(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private categories: Map<string, Category>;
  private tags: Map<string, Tag>;
  private comments: Map<string, Comment>;
  private likes: Map<string, Like>;
  private follows: Map<string, Follow>;
  private userAnalytics: Map<string, UserAnalytics>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.categories = new Map();
    this.tags = new Map();
    this.comments = new Map();
    this.likes = new Map();
    this.follows = new Map();
    this.userAnalytics = new Map();
    
    // Initialize with some sample blog posts
    this.initializeSampleData();
  }

  private async initializeSampleData() {
    // Initialize categories
    const sampleCategories: Category[] = [
      {
        id: randomUUID(),
        name: "DeFi",
        slug: "defi",
        description: "Decentralized Finance protocols and innovations",
        color: "#3B82F6",
        icon: "💎",
        postCount: 0,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "NFTs",
        slug: "nft",
        description: "Non-Fungible Tokens and digital art",
        color: "#8B5CF6",
        icon: "🎨",
        postCount: 0,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Web3",
        slug: "web3",
        description: "Decentralized web technologies",
        color: "#10B981",
        icon: "🌐",
        postCount: 0,
        createdAt: new Date()
      }
    ];

    sampleCategories.forEach(category => {
      this.categories.set(category.id, category);
    });

    // Initialize tags
    const sampleTags: Tag[] = [
      { id: randomUUID(), name: "ethereum", slug: "ethereum", description: "Ethereum blockchain", color: "#627EEA", postCount: 0, createdAt: new Date() },
      { id: randomUUID(), name: "defi", slug: "defi", description: "Decentralized Finance", color: "#FF6B6B", postCount: 0, createdAt: new Date() },
      { id: randomUUID(), name: "nft", slug: "nft", description: "Non-Fungible Tokens", color: "#4ECDC4", postCount: 0, createdAt: new Date() },
      { id: randomUUID(), name: "web3", slug: "web3", description: "Web3 Technologies", color: "#45B7D1", postCount: 0, createdAt: new Date() }
    ];

    sampleTags.forEach(tag => {
      this.tags.set(tag.id, tag);
    });

    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "The Future of Decentralized Content Publishing",
        content: "Exploring how blockchain technology is revolutionizing content creation and ownership in the digital age. This comprehensive analysis covers the technical foundations, economic implications, and social impact of decentralized publishing platforms. We dive deep into smart contracts, tokenomics, and the creator economy.",
        excerpt: "Exploring how blockchain technology is revolutionizing content creation and ownership in the digital age...",
        author: "0xAbcd1234567890abcdef1234567890abcdefEF12",
        authorId: undefined,
        chainId: "1",
        transactionHash: "0x1234567890abcdef1234567890abcdef12345678",
        coverImage: null,
        tags: ["ethereum", "defi", "web3"],
        category: "DeFi",
        readingTime: 8,
        likes: 234,
        views: 1524,
        comments: 45,
        shares: 23,
        isPinned: false,
        isFeatured: true,
        isPublished: true,
        monetizationEnabled: true,
        trendingScore: 95,
        aiGeneratedSummary: "This article explores the revolutionary impact of blockchain technology on content creation, covering technical foundations, economic models, and social implications of decentralized publishing.",
        seoTitle: null,
        seoDescription: null,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      },
      {
        id: randomUUID(),
        title: "Getting Started with Web3 Blogging",
        content: "A comprehensive guide to publishing your first blog post on the blockchain using ChainBlog. Learn about wallet setup, network selection, gas optimization, and content strategies for decentralized publishing. This tutorial covers everything from technical setup to content strategy.",
        excerpt: "A comprehensive guide to publishing your first blog post on the blockchain using ChainBlog...",
        author: "0x1234567890abcdef1234567890abcdef12345678",
        authorId: undefined,
        chainId: "8453",
        transactionHash: "0xabcdef1234567890abcdef1234567890abcdef12",
        coverImage: null,
        tags: ["web3", "tutorial"],
        category: "Web3",
        readingTime: 6,
        likes: 156,
        views: 892,
        comments: 28,
        shares: 15,
        isPinned: false,
        isFeatured: false,
        isPublished: true,
        monetizationEnabled: false,
        trendingScore: 78,
        aiGeneratedSummary: "A complete beginner's guide to Web3 blogging, covering wallet setup, network selection, and publishing strategies on decentralized platforms.",
        seoTitle: null,
        seoDescription: null,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
      },
      {
        id: randomUUID(),
        title: "Why Creators Love Blockchain Technology",
        content: "Discover how content creators are leveraging blockchain technology to monetize their work and maintain creative control. This post explores various monetization strategies, community building techniques, and the economics of creator-owned content. From NFTs to token gating, we cover it all.",
        excerpt: "Discover how content creators are leveraging blockchain technology to monetize their work...",
        author: "0x9ABCdef0123456789ABCdef0123456789ABCdef0",
        authorId: undefined,
        chainId: "56",
        transactionHash: "0xdef1234567890abcdef1234567890abcdef123456",
        coverImage: null,
        tags: ["nft", "creator-economy"],
        category: "NFTs",
        readingTime: 10,
        likes: 89,
        views: 456,
        comments: 12,
        shares: 8,
        isPinned: true,
        isFeatured: false,
        isPublished: true,
        monetizationEnabled: true,
        trendingScore: 65,
        aiGeneratedSummary: "An exploration of how blockchain empowers content creators with new monetization models and creative control mechanisms.",
        seoTitle: null,
        seoDescription: null,
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      }
    ];

    samplePosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      createdAt: new Date(),
      transactionHash: insertPost.transactionHash || null,
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPostsByAuthor(author: string): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.author === author)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  // Extended User operations
  async getUserByWallet(walletAddress: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.walletAddress === walletAddress,
    );
  }

  async updateUser(id: string, userUpdate: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...userUpdate, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async getUserAnalytics(userId: string): Promise<UserAnalytics | undefined> {
    return this.userAnalytics.get(userId);
  }

  // Extended Blog Post operations
  async getBlogPosts(options?: {
    category?: string;
    tags?: string[];
    author?: string;
    featured?: boolean;
    trending?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<BlogPost[]> {
    let posts = Array.from(this.blogPosts.values());

    if (options?.category) {
      posts = posts.filter(post => post.category === options.category);
    }

    if (options?.tags && options.tags.length > 0) {
      posts = posts.filter(post => 
        post.tags && options.tags!.some(tag => post.tags!.includes(tag))
      );
    }

    if (options?.author) {
      posts = posts.filter(post => post.author === options.author);
    }

    if (options?.featured) {
      posts = posts.filter(post => post.isFeatured);
    }

    if (options?.trending) {
      posts = posts.filter(post => post.trendingScore && post.trendingScore > 50);
      posts.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
    } else {
      posts.sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
    }

    const offset = options?.offset || 0;
    const limit = options?.limit || posts.length;
    
    return posts.slice(offset, offset + limit);
  }

  async updateBlogPost(id: string, postUpdate: Partial<BlogPost>): Promise<BlogPost | undefined> {
    const post = this.blogPosts.get(id);
    if (!post) return undefined;
    
    const updatedPost = { ...post, ...postUpdate, updatedAt: new Date() };
    this.blogPosts.set(id, updatedPost);
    return updatedPost;
  }

  async deleteBlogPost(id: string): Promise<boolean> {
    return this.blogPosts.delete(id);
  }

  async incrementBlogPostViews(id: string): Promise<void> {
    const post = this.blogPosts.get(id);
    if (post) {
      post.views = (post.views || 0) + 1;
      this.blogPosts.set(id, post);
    }
  }

  async getTrendingPosts(limit: number = 10): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.trendingScore && post.trendingScore > 0)
      .sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0))
      .slice(0, limit);
  }

  async getFeaturedPosts(limit: number = 10): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.isFeatured)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async getPostsByCategory(category: string, limit: number = 10): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.category === category)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async getPostsByTag(tag: string, limit: number = 10): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.tags && post.tags.includes(tag))
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  async searchPosts(query: string, limit: number = 20): Promise<BlogPost[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.blogPosts.values())
      .filter(post => 
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
      )
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0))
      .slice(0, limit);
  }

  // Category operations
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values())
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = {
      ...insertCategory,
      id,
      postCount: 0,
      createdAt: new Date()
    };
    this.categories.set(id, category);
    return category;
  }

  async updateCategory(id: string, categoryUpdate: Partial<Category>): Promise<Category | undefined> {
    const category = this.categories.get(id);
    if (!category) return undefined;
    
    const updatedCategory = { ...category, ...categoryUpdate };
    this.categories.set(id, updatedCategory);
    return updatedCategory;
  }

  // Tag operations
  async getTags(): Promise<Tag[]> {
    return Array.from(this.tags.values())
      .sort((a, b) => (b.postCount || 0) - (a.postCount || 0));
  }

  async getTag(id: string): Promise<Tag | undefined> {
    return this.tags.get(id);
  }

  async createTag(insertTag: InsertTag): Promise<Tag> {
    const id = randomUUID();
    const tag: Tag = {
      ...insertTag,
      id,
      postCount: 0,
      createdAt: new Date()
    };
    this.tags.set(id, tag);
    return tag;
  }

  async updateTag(id: string, tagUpdate: Partial<Tag>): Promise<Tag | undefined> {
    const tag = this.tags.get(id);
    if (!tag) return undefined;
    
    const updatedTag = { ...tag, ...tagUpdate };
    this.tags.set(id, updatedTag);
    return updatedTag;
  }

  async getTrendingTags(limit: number = 10): Promise<Tag[]> {
    return Array.from(this.tags.values())
      .sort((a, b) => (b.postCount || 0) - (a.postCount || 0))
      .slice(0, limit);
  }

  // Comment operations
  async getCommentsByPost(postId: string): Promise<Comment[]> {
    return Array.from(this.comments.values())
      .filter(comment => comment.postId === postId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async getComment(id: string): Promise<Comment | undefined> {
    return this.comments.get(id);
  }

  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = randomUUID();
    const comment: Comment = {
      ...insertComment,
      id,
      likes: 0,
      isHighlighted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.comments.set(id, comment);
    return comment;
  }

  async updateComment(id: string, commentUpdate: Partial<Comment>): Promise<Comment | undefined> {
    const comment = this.comments.get(id);
    if (!comment) return undefined;
    
    const updatedComment = { ...comment, ...commentUpdate, updatedAt: new Date() };
    this.comments.set(id, updatedComment);
    return updatedComment;
  }

  async deleteComment(id: string): Promise<boolean> {
    return this.comments.delete(id);
  }

  // Like operations
  async getLike(postId?: string, commentId?: string, userId?: string, walletAddress?: string): Promise<Like | undefined> {
    return Array.from(this.likes.values()).find(like => {
      if (postId && like.postId !== postId) return false;
      if (commentId && like.commentId !== commentId) return false;
      if (userId && like.userId !== userId) return false;
      if (walletAddress && like.walletAddress !== walletAddress) return false;
      return true;
    });
  }

  async createLike(insertLike: InsertLike): Promise<Like> {
    const id = randomUUID();
    const like: Like = {
      ...insertLike,
      id,
      createdAt: new Date()
    };
    this.likes.set(id, like);
    return like;
  }

  async deleteLike(id: string): Promise<boolean> {
    return this.likes.delete(id);
  }

  async getPostLikes(postId: string): Promise<Like[]> {
    return Array.from(this.likes.values())
      .filter(like => like.postId === postId);
  }

  // Follow operations
  async getFollow(followerId: string, followingId: string): Promise<Follow | undefined> {
    return Array.from(this.follows.values())
      .find(follow => follow.followerId === followerId && follow.followingId === followingId);
  }

  async createFollow(insertFollow: InsertFollow): Promise<Follow> {
    const id = randomUUID();
    const follow: Follow = {
      ...insertFollow,
      id,
      createdAt: new Date()
    };
    this.follows.set(id, follow);
    return follow;
  }

  async deleteFollow(id: string): Promise<boolean> {
    return this.follows.delete(id);
  }

  async getUserFollowers(userId: string): Promise<Follow[]> {
    return Array.from(this.follows.values())
      .filter(follow => follow.followingId === userId);
  }

  async getUserFollowing(userId: string): Promise<Follow[]> {
    return Array.from(this.follows.values())
      .filter(follow => follow.followerId === userId);
  }

  // AI and recommendation operations
  async getAIRecommendations(userId?: string, limit: number = 5): Promise<BlogPost[]> {
    // Simple recommendation algorithm based on trending and recent posts
    const posts = Array.from(this.blogPosts.values());
    return posts
      .filter(post => post.isPublished)
      .sort((a, b) => {
        const aScore = (a.trendingScore || 0) + (a.likes || 0) + (a.views || 0) / 100;
        const bScore = (b.trendingScore || 0) + (b.likes || 0) + (b.views || 0) / 100;
        return bScore - aScore;
      })
      .slice(0, limit);
  }

  async updateTrendingScores(): Promise<void> {
    const posts = Array.from(this.blogPosts.values());
    const now = Date.now();
    
    posts.forEach(post => {
      const ageInDays = (now - (post.createdAt?.getTime() || now)) / (1000 * 60 * 60 * 24);
      const engagementScore = (post.likes || 0) + (post.comments || 0) * 2 + (post.shares || 0) * 3;
      const viewScore = (post.views || 0) / 100;
      
      // Trending score decreases with age but increases with engagement
      const ageFactor = Math.max(0, 1 - ageInDays / 30); // Decreases over 30 days
      const trendingScore = Math.min(100, (engagementScore + viewScore) * ageFactor);
      
      post.trendingScore = Math.round(trendingScore);
      this.blogPosts.set(post.id, post);
    });
  }
}

export const storage = new MemStorage();

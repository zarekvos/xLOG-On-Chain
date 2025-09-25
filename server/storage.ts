import { type User, type InsertUser, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPostsByAuthor(author: string): Promise<BlogPost[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    
    // Initialize with some sample blog posts
    this.initializeSampleData();
  }

  private async initializeSampleData() {
    const samplePosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "The Future of Decentralized Content",
        content: "Exploring how blockchain technology is revolutionizing content creation and ownership in the digital age. This comprehensive analysis covers the technical foundations, economic implications, and social impact of decentralized publishing platforms.",
        excerpt: "Exploring how blockchain technology is revolutionizing content creation and ownership in the digital age...",
        author: "0xAbcd...EF12",
        chainId: "1", // Ethereum
        transactionHash: "0x1234567890abcdef1234567890abcdef12345678",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
      {
        id: randomUUID(),
        title: "Getting Started with Web3 Blogging",
        content: "A comprehensive guide to publishing your first blog post on the blockchain using ChainBlog. Learn about wallet setup, network selection, gas optimization, and content strategies for decentralized publishing.",
        excerpt: "A comprehensive guide to publishing your first blog post on the blockchain using ChainBlog...",
        author: "0x1234...5678",
        chainId: "8453", // Base
        transactionHash: "0xabcdef1234567890abcdef1234567890abcdef12",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      },
      {
        id: randomUUID(),
        title: "Why Creators Love Blockchain",
        content: "Discover how content creators are leveraging blockchain technology to monetize their work and maintain creative control. This post explores various monetization strategies, community building techniques, and the economics of creator-owned content.",
        excerpt: "Discover how content creators are leveraging blockchain technology to monetize their work...",
        author: "0x9ABC...def0",
        chainId: "56", // BNB Chain
        transactionHash: "0xdef1234567890abcdef1234567890abcdef123456",
        createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
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
}

export const storage = new MemStorage();

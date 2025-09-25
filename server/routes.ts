import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertBlogPostSchema, 
  insertCategorySchema, 
  insertTagSchema,
  insertCommentSchema,
  insertLikeSchema,
  insertFollowSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog Posts API - Enhanced with filtering and advanced features
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const { 
        category, 
        tags, 
        author, 
        featured, 
        trending, 
        limit, 
        offset 
      } = req.query;

      const options: any = {};
      if (category) options.category = category as string;
      if (tags) options.tags = (tags as string).split(',');
      if (author) options.author = author as string;
      if (featured) options.featured = featured === 'true';
      if (trending) options.trending = trending === 'true';
      if (limit) options.limit = parseInt(limit as string);
      if (offset) options.offset = parseInt(offset as string);

      const posts = await storage.getBlogPosts(options);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/trending", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const posts = await storage.getTrendingPosts(limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending posts" });
    }
  });

  app.get("/api/blog-posts/featured", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const posts = await storage.getFeaturedPosts(limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured posts" });
    }
  });

  app.get("/api/blog-posts/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;
      
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }

      const posts = await storage.searchPosts(query, limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to search posts" });
    }
  });

  app.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      // Increment view count
      await storage.incrementBlogPostViews(req.params.id);
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ message: "Invalid blog post data" });
    }
  });

  app.get("/api/blog-posts/author/:author", async (req, res) => {
    try {
      const posts = await storage.getBlogPostsByAuthor(req.params.author);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch author posts" });
    }
  });

  app.get("/api/blog-posts/category/:category", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const posts = await storage.getPostsByCategory(req.params.category, limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts by category" });
    }
  });

  app.get("/api/blog-posts/tag/:tag", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const posts = await storage.getPostsByTag(req.params.tag, limit);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts by tag" });
    }
  });

  // Categories API
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      const validatedData = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validatedData);
      res.status(201).json(category);
    } catch (error) {
      res.status(400).json({ message: "Invalid category data" });
    }
  });

  // Tags API
  app.get("/api/tags", async (req, res) => {
    try {
      const tags = await storage.getTags();
      res.json(tags);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tags" });
    }
  });

  app.get("/api/tags/trending", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const tags = await storage.getTrendingTags(limit);
      res.json(tags);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trending tags" });
    }
  });

  // Comments API
  app.get("/api/comments/post/:postId", async (req, res) => {
    try {
      const comments = await storage.getCommentsByPost(req.params.postId);
      res.json(comments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch comments" });
    }
  });

  app.post("/api/comments", async (req, res) => {
    try {
      const validatedData = insertCommentSchema.parse(req.body);
      const comment = await storage.createComment(validatedData);
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ message: "Invalid comment data" });
    }
  });

  // Likes API
  app.get("/api/likes/post/:postId", async (req, res) => {
    try {
      const likes = await storage.getPostLikes(req.params.postId);
      res.json(likes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch likes" });
    }
  });

  app.post("/api/likes", async (req, res) => {
    try {
      const validatedData = insertLikeSchema.parse(req.body);
      
      // Check if like already exists
      const existingLike = await storage.getLike(
        validatedData.postId,
        validatedData.commentId,
        validatedData.userId,
        validatedData.walletAddress
      );

      if (existingLike) {
        return res.status(409).json({ message: "Already liked" });
      }

      const like = await storage.createLike(validatedData);
      res.status(201).json(like);
    } catch (error) {
      res.status(400).json({ message: "Invalid like data" });
    }
  });

  // AI Recommendations API
  app.get("/api/recommendations", async (req, res) => {
    try {
      const userId = req.query.userId as string;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : 5;
      
      const recommendations = await storage.getAIRecommendations(userId, limit);
      res.json(recommendations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recommendations" });
    }
  });

  // Analytics API
  app.get("/api/analytics/creator/:period?", async (req, res) => {
    try {
      const period = req.params.period || '30d';
      const userId = req.query.userId as string; // In real app, this would come from auth
      
      // For now, return sample analytics data
      // In real implementation, this would calculate analytics from posts/engagement data
      const sampleAnalytics = [
        { date: '2024-01-01', views: 1200, likes: 89, comments: 34, earnings: 45 },
        { date: '2024-01-02', views: 1567, likes: 134, comments: 67, earnings: 78 },
        { date: '2024-01-03', views: 2100, likes: 156, comments: 89, earnings: 102 },
        { date: '2024-01-04', views: 1890, likes: 142, comments: 76, earnings: 89 },
        { date: '2024-01-05', views: 2450, likes: 198, comments: 123, earnings: 134 },
        { date: '2024-01-06', views: 3200, likes: 287, comments: 156, earnings: 203 },
        { date: '2024-01-07', views: 2800, likes: 234, comments: 134, earnings: 167 },
      ];
      
      res.json(sampleAnalytics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch creator analytics" });
    }
  });

  app.post("/api/analytics/update-trending", async (req, res) => {
    try {
      await storage.updateTrendingScores();
      res.json({ message: "Trending scores updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to update trending scores" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

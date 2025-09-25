import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  walletAddress: text("wallet_address"),
  displayName: text("display_name"),
  bio: text("bio"),
  avatar: text("avatar"),
  website: text("website"),
  twitter: text("twitter"),
  isVerified: boolean("is_verified").default(false),
  totalPosts: integer("total_posts").default(0),
  totalLikes: integer("total_likes").default(0),
  followers: integer("followers").default(0),
  following: integer("following").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  author: text("author").notNull(), // wallet address
  authorId: varchar("author_id"), // references users.id
  chainId: text("chain_id").notNull(),
  transactionHash: text("transaction_hash"),
  coverImage: text("cover_image"),
  tags: jsonb("tags").$type<string[]>().default([]),
  category: text("category"),
  readingTime: integer("reading_time").default(1),
  likes: integer("likes").default(0),
  views: integer("views").default(0),
  comments: integer("comments").default(0),
  shares: integer("shares").default(0),
  isPinned: boolean("is_pinned").default(false),
  isFeatured: boolean("is_featured").default(false),
  isPublished: boolean("is_published").default(true),
  monetizationEnabled: boolean("monetization_enabled").default(false),
  trendingScore: integer("trending_score").default(0),
  aiGeneratedSummary: text("ai_generated_summary"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  publishedAt: timestamp("published_at").defaultNow(),
});

export const categories = pgTable("categories", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  color: text("color").default("#8B5CF6"),
  icon: text("icon"),
  postCount: integer("post_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tags = pgTable("tags", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  color: text("color").default("#6B7280"),
  postCount: integer("post_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const comments = pgTable("comments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  postId: varchar("post_id").notNull(),
  authorId: varchar("author_id"),
  authorWallet: text("author_wallet").notNull(),
  content: text("content").notNull(),
  parentId: varchar("parent_id"), // for reply threads
  likes: integer("likes").default(0),
  isHighlighted: boolean("is_highlighted").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const likes = pgTable("likes", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  postId: varchar("post_id"),
  commentId: varchar("comment_id"),
  userId: varchar("user_id"),
  walletAddress: text("wallet_address").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const follows = pgTable("follows", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  followerId: varchar("follower_id").notNull(),
  followingId: varchar("following_id").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userAnalytics = pgTable("user_analytics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  totalViews: integer("total_views").default(0),
  totalLikes: integer("total_likes").default(0),
  totalComments: integer("total_comments").default(0),
  totalShares: integer("total_shares").default(0),
  totalEarnings: integer("total_earnings").default(0), // in wei
  monthlyViews: jsonb("monthly_views").$type<Record<string, number>>().default({}),
  monthlyEarnings: jsonb("monthly_earnings").$type<Record<string, number>>().default({}),
  topPosts: jsonb("top_posts").$type<string[]>().default([]),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  walletAddress: true,
  displayName: true,
  bio: true,
  avatar: true,
  website: true,
  twitter: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  publishedAt: true,
  likes: true,
  views: true,
  comments: true,
  shares: true,
  trendingScore: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
  postCount: true,
  createdAt: true,
});

export const insertTagSchema = createInsertSchema(tags).omit({
  id: true,
  postCount: true,
  createdAt: true,
});

export const insertCommentSchema = createInsertSchema(comments).omit({
  id: true,
  likes: true,
  createdAt: true,
  updatedAt: true,
});

export const insertLikeSchema = createInsertSchema(likes).omit({
  id: true,
  createdAt: true,
});

export const insertFollowSchema = createInsertSchema(follows).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Tag = typeof tags.$inferSelect;
export type InsertTag = z.infer<typeof insertTagSchema>;
export type Comment = typeof comments.$inferSelect;
export type InsertComment = z.infer<typeof insertCommentSchema>;
export type Like = typeof likes.$inferSelect;
export type InsertLike = z.infer<typeof insertLikeSchema>;
export type Follow = typeof follows.$inferSelect;
export type InsertFollow = z.infer<typeof insertFollowSchema>;
export type UserAnalytics = typeof userAnalytics.$inferSelect;

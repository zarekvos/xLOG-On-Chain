import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useQuery } from '@tanstack/react-query';
import { BlogPost, Category, Tag } from '@shared/schema';
import { 
  Search, 
  TrendingUp, 
  Clock, 
  Star, 
  Flame, 
  Filter,
  ArrowRight,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Sparkles,
  Crown,
  Zap
} from 'lucide-react';

export function AdvancedDiscovery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Fetch real data from API
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ['/api/categories'],
  });

  const { data: trendingTags = [], isLoading: tagsLoading } = useQuery<Tag[]>({
    queryKey: ['/api/tags/trending'],
  });

  const { data: trendingPosts = [], isLoading: trendingLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/trending'],
  });

  const { data: featuredPosts = [], isLoading: featuredLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/featured'],
  });

  const { data: aiRecommendations = [], isLoading: aiLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/recommendations'],
  });

  const { data: searchResults = [], isLoading: searchLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts/search', searchTerm],
    enabled: searchTerm.length > 2,
    queryFn: async () => {
      const response = await fetch(`/api/blog-posts/search?q=${encodeURIComponent(searchTerm)}`);
      if (!response.ok) {
        throw new Error('Search failed');
      }
      return response.json();
    },
  });

  // Legacy categories for display if API data isn't available
  const fallbackCategories = [
    { 
      id: 'defi', 
      name: 'DeFi', 
      count: 234,
      color: 'from-blue-500 to-cyan-500',
      icon: '💎',
      description: 'Decentralized Finance protocols and innovations'
    },
    { 
      id: 'nft', 
      name: 'NFTs', 
      count: 189,
      color: 'from-purple-500 to-pink-500',
      icon: '🎨',
      description: 'Non-Fungible Tokens and digital art'
    },
    { 
      id: 'web3', 
      name: 'Web3', 
      count: 156,
      color: 'from-green-500 to-emerald-500',
      icon: '🌐',
      description: 'Decentralized web technologies'
    },
    { 
      id: 'gaming', 
      name: 'Gaming', 
      count: 142,
      color: 'from-orange-500 to-red-500',
      icon: '🎮',
      description: 'Blockchain gaming and GameFi'
    },
    { 
      id: 'dao', 
      name: 'DAOs', 
      count: 98,
      color: 'from-indigo-500 to-purple-500',
      icon: '🏛️',
      description: 'Decentralized Autonomous Organizations'
    },
    { 
      id: 'metaverse', 
      name: 'Metaverse', 
      count: 87,
      color: 'from-pink-500 to-rose-500',
      icon: '🌌',
      description: 'Virtual worlds and digital experiences'
    }
  ];

  // Use real categories or fallback
  const displayCategories = categories.length > 0 ? categories : fallbackCategories;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Enhanced Search Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Amazing</span>
            <br />
            Content
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by AI recommendations and advanced content discovery algorithms
          </p>
        </div>

        {/* Advanced Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search posts, authors, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-16 py-4 text-lg rounded-2xl border-2 bg-background/50 backdrop-blur-sm"
            data-testid="search-advanced"
          />
          <Button
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl"
            data-testid="button-advanced-search"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="trending" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-muted/30 p-1 rounded-2xl">
          <TabsTrigger value="trending" className="rounded-xl" data-testid="tab-trending">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="categories" className="rounded-xl" data-testid="tab-categories">
            <Filter className="w-4 h-4 mr-2" />
            Categories
          </TabsTrigger>
          <TabsTrigger value="featured" className="rounded-xl" data-testid="tab-featured">
            <Star className="w-4 h-4 mr-2" />
            Featured
          </TabsTrigger>
          <TabsTrigger value="ai-picks" className="rounded-xl" data-testid="tab-ai-picks">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Picks
          </TabsTrigger>
        </TabsList>

        {/* Trending Content */}
        <TabsContent value="trending" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Flame className="w-6 h-6 mr-2 text-orange-500" />
                Trending Now
              </h2>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Last 24 hours</span>
              </div>
            </div>

            {/* Trending Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Hot Topics</h3>
              <div className="flex flex-wrap gap-3">
                {trendingTags.map((tag, index) => (
                  <motion.div
                    key={tag.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Badge
                      variant={selectedTag === tag.name ? "default" : "outline"}
                      className={`px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:scale-105 ${
                        tag.trending ? 'border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300' : ''
                      }`}
                      onClick={() => setSelectedTag(tag.name === selectedTag ? null : tag.name)}
                      data-testid={`tag-${tag.name}`}
                    >
                      {tag.trending && <TrendingUp className="w-3 h-3 mr-1" />}
                      #{tag.name}
                      <span className="ml-2 text-xs opacity-70">{tag.count}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trending Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingLoading ? (
                // Loading skeleton
                [...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 animate-pulse" />
                      <CardContent className="p-6">
                        <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
                        <div className="h-3 bg-muted rounded mb-4 animate-pulse" />
                        <div className="flex justify-between">
                          <div className="h-3 bg-muted rounded w-16 animate-pulse" />
                          <div className="h-3 bg-muted rounded w-20 animate-pulse" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                trendingPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-600/20">
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-orange-500 text-white">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            #{i + 1}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-2 text-white">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm font-medium">{((post.views || 0) / 1000).toFixed(1)}K</span>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes || 0}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments || 0}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {post.readingTime || 5} min read
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </TabsContent>

        {/* Categories */}
        <TabsContent value="categories" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Explore by Category</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  data-testid={`category-${category.id}`}
                >
                  <Card className="overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {category.count} posts
                        </Badge>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* Featured */}
        <TabsContent value="featured" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Crown className="w-6 h-6 mr-2 text-yellow-500" />
                Featured Content
              </h2>
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                Editor's Choice
              </Badge>
            </div>

            <div className="space-y-6">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden border-0 bg-gradient-to-r from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-primary/20 to-purple-600/20 relative">
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="md:w-2/3 p-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <Badge className={`bg-gradient-to-r ${categories.find(c => c.name === post.category)?.color} text-white`}>
                            {post.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {post.readingTime} min read
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {post.trendingScore}% trending
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
                              <Users className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-sm font-medium flex items-center">
                                {post.authorName}
                                {post.authorVerified && <Crown className="w-3 h-3 ml-1 text-yellow-500" />}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{(post.views / 1000).toFixed(1)}K</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        {/* AI Picks */}
        <TabsContent value="ai-picks" className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Zap className="w-6 h-6 mr-2 text-purple-500" />
                AI Recommendations
              </h2>
              <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Powered by AI
              </Badge>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {aiRecommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  className="group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs bg-white/50">
                            {rec.relevanceScore}% match
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {rec.readingTime} min read
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-purple-600 transition-colors">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        by {rec.author}
                      </p>
                      <p className="text-xs text-purple-600 bg-purple-50 dark:bg-purple-950/30 px-3 py-2 rounded-lg">
                        💡 {rec.reason}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
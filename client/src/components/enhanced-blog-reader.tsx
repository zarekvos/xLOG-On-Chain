import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { SocialFeatures } from './social-features';
import { 
  Clock, 
  Eye, 
  User, 
  Crown,
  Share2,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Hash,
  Type,
  Palette,
  Moon,
  Sun,
  Headphones,
  Download,
  Zap,
  Target
} from 'lucide-react';
import { BlogPost } from '@shared/schema';

interface EnhancedBlogReaderProps {
  post: BlogPost;
}

export function EnhancedBlogReader({ post }: EnhancedBlogReaderProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    const startTime = Date.now();
    const interval = setInterval(() => {
      setReadingTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const formatReadingTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const relatedPosts = [
    {
      id: '1',
      title: 'Advanced DeFi Strategies for 2024',
      readingTime: 8,
      author: 'DeFi Expert',
      similarity: 92
    },
    {
      id: '2',
      title: 'Understanding Liquid Staking Derivatives',
      readingTime: 6,
      author: 'Staking Pro',
      similarity: 87
    },
    {
      id: '3',
      title: 'Cross-Chain Bridge Security Analysis',
      readingTime: 12,
      author: 'Security Researcher',
      similarity: 84
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Reading Controls */}
      <motion.div
        className="fixed left-6 top-1/2 transform -translate-y-1/2 space-y-3 z-40 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Card className="p-3 bg-card/80 backdrop-blur-sm border-border/50">
          <div className="space-y-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFontSize(Math.max(fontSize - 2, 12))}
              data-testid="button-decrease-font"
            >
              <Type className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFontSize(Math.min(fontSize + 2, 24))}
              data-testid="button-increase-font"
            >
              <Type className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              data-testid="button-toggle-theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              data-testid="button-text-to-speech"
            >
              <Headphones className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              data-testid="button-download-pdf"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Reading Stats */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50">
          <div className="space-y-4 text-center">
            <div>
              <div className="text-sm font-medium text-foreground">{Math.round(readingProgress)}%</div>
              <div className="text-xs text-muted-foreground">Read</div>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{formatReadingTime(readingTime)}</div>
              <div className="text-xs text-muted-foreground">Time</div>
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">{post.views || 0}</div>
              <div className="text-xs text-muted-foreground">Views</div>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <ArrowLeft className="w-4 h-4" />
            <button className="hover:text-foreground transition-colors">Back to Blogs</button>
            <span>/</span>
            <span>{post.category || 'Article'}</span>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-gradient-to-r from-primary to-purple-600 text-white">
              Featured
            </Badge>
            <Badge variant="outline">{post.category || 'Technology'}</Badge>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime || 8} min read</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span>{(post.views || 0).toLocaleString()} views</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
            style={{ fontSize: `${fontSize + 16}px` }}
          >
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-foreground">Anonymous Creator</h3>
                  <Crown className="w-4 h-4 text-yellow-500" />
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {post.author.slice(0, 6)}...{post.author.slice(-4)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Published {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                Follow
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600">
                <Zap className="w-4 h-4 mr-2" />
                Tip
              </Button>
            </div>
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl mb-8 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
            </div>
          )}

          {/* AI Summary */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">AI Summary</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.aiGeneratedSummary || post.excerpt}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="prose prose-lg max-w-none mb-12"
          style={{ fontSize: `${fontSize}px` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-muted-foreground leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Hash className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground">Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  data-testid={`tag-${tag}`}
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        )}

        {/* Social Features */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SocialFeatures 
            postId={post.id}
            initialLikes={post.likes}
            initialComments={post.comments}
            initialShares={post.shares}
          />
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2" />
            Related Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl mb-4" />
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{relatedPost.author}</span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{relatedPost.readingTime} min</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.similarity}% similar
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="flex justify-between items-center mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button variant="outline" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Article</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <span>Next Article</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
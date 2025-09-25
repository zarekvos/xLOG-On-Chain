import { motion } from 'framer-motion';
import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Comment } from '@shared/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark,
  User,
  UserPlus,
  Users,
  Crown,
  Zap,
  ArrowUp,
  ArrowDown,
  Reply,
  Flag,
  Gift,
  Star
} from 'lucide-react';

interface SocialFeaturesProps {
  postId: string;
  initialLikes?: number;
  initialComments?: number;
  initialShares?: number;
}

export function SocialFeatures({ postId, initialLikes = 0, initialComments = 0, initialShares = 0 }: SocialFeaturesProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState(initialComments);
  const [shares, setShares] = useState(initialShares);

  // Fetch real comments data using correct endpoint
  const { data: realComments = [], isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: ['/api/comments/post', postId],
    queryFn: async () => {
      const response = await fetch(`/api/comments/post/${postId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      return response.json();
    },
    enabled: showComments,
  });

  // Mutations for interactions using correct endpoints
  const likeMutation = useMutation({
    mutationFn: async () => {
      return apiRequest('POST', '/api/likes', {
        postId,
        userId: 'current-user-id', // This would come from auth context
        walletAddress: '0x742d35Cc6634C0532925a3b8D2F3e4c7B38d8a9E', // Mock wallet for demo
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['/api/likes/post', postId] });
      setLiked(!liked);
      setLikes(liked ? likes - 1 : likes + 1);
    },
  });

  const commentMutation = useMutation({
    mutationFn: async (content: string) => {
      return apiRequest('POST', '/api/comments', {
        postId,
        content,
        authorId: 'current-user-id', // This would come from auth context
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/comments/post', postId] });
      setNewComment('');
      setComments(comments + 1);
    },
  });

  const handleLike = () => {
    likeMutation.mutate();
  };

  const handleComment = () => {
    if (newComment.trim()) {
      commentMutation.mutate(newComment);
    }
  };

  const handleShare = () => {
    // Implement sharing functionality - could track in analytics
    setShares(shares + 1);
    
    if (navigator.share) {
      navigator.share({
        title: 'Check out this amazing Web3 article!',
        url: window.location.href,
      }).catch(() => {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Use real comments or fallback data for display
  const displayComments = realComments.length > 0 ? realComments : [];

  const topContributors = [
    {
      id: '1',
      name: 'Vitalik Buterin',
      wallet: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
      avatar: '/api/placeholder/32/32',
      posts: 234,
      followers: 156000,
      isVerified: true,
      specialBadge: 'Ethereum Founder'
    },
    {
      id: '2',
      name: 'Stani Kulechov',
      wallet: '0x8ba1f109551bD432803012645Hac136c22C256e9',
      avatar: '/api/placeholder/32/32',
      posts: 189,
      followers: 89000,
      isVerified: true,
      specialBadge: 'Aave Founder'
    },
    {
      id: '3',
      name: 'Andre Cronje',
      wallet: '0x431e81E5dfB5A24541b5Ff8762bDEF3f32F96354',
      avatar: '/api/placeholder/32/32',
      posts: 156,
      followers: 67000,
      isVerified: true,
      specialBadge: 'DeFi Pioneer'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Social Actions */}
      <motion.div
        className="flex items-center justify-between p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-6">
          <motion.button
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
              liked 
                ? 'bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400' 
                : 'bg-muted hover:bg-muted/80'
            }`}
            onClick={handleLike}
            whileTap={{ scale: 0.95 }}
            data-testid="button-like"
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            <span className="font-medium">{likes}</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
            onClick={() => setShowComments(!showComments)}
            whileTap={{ scale: 0.95 }}
            data-testid="button-comments"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{comments}</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-200 hover:scale-105"
            onClick={handleShare}
            whileTap={{ scale: 0.95 }}
            data-testid="button-share"
          >
            <Share2 className="w-5 h-5" />
            <span className="font-medium">{shares}</span>
          </motion.button>
        </div>

        <div className="flex items-center space-x-3">
          <motion.button
            className={`p-2 rounded-xl transition-all duration-200 hover:scale-105 ${
              bookmarked 
                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-950/30 dark:text-yellow-400' 
                : 'bg-muted hover:bg-muted/80'
            }`}
            onClick={() => setBookmarked(!bookmarked)}
            whileTap={{ scale: 0.95 }}
            data-testid="button-bookmark"
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
          </motion.button>

          <Button size="sm" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
            <Gift className="w-4 h-4 mr-2" />
            Tip Author
          </Button>
        </div>
      </motion.div>

      {/* Comments Section */}
      {showComments && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Add Comment */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[100px] resize-none border-0 bg-muted/50 focus:bg-muted/80"
                  data-testid="textarea-new-comment"
                />
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>💡 Tip: Quality comments earn more engagement</span>
                  </div>
                  <Button onClick={handleComment} disabled={!newComment.trim()} data-testid="button-post-comment">
                    Post Comment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {commentsLoading ? (
              // Loading skeleton for comments
              [...Array(3)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <Card className="border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-muted rounded-full" />
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-muted rounded w-1/3" />
                          <div className="h-16 bg-muted rounded" />
                          <div className="flex space-x-4">
                            <div className="h-3 bg-muted rounded w-12" />
                            <div className="h-3 bg-muted rounded w-12" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : displayComments.length > 0 ? (
              displayComments.map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border-0 bg-card/50 backdrop-blur-sm ${comment.isHighlighted ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-foreground flex items-center">
                            {comment.authorId}
                          </h4>
                          <span className="text-xs text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{comment.content}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                              <ArrowUp className="w-4 h-4" />
                              <span>{comment.likes || 0}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                              <Reply className="w-4 h-4" />
                              <span>Reply</span>
                            </button>
                          </div>
                          <button className="text-muted-foreground hover:text-foreground transition-colors">
                            <Flag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
            ) : (
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No comments yet</h3>
                  <p className="text-muted-foreground">Be the first to share your thoughts!</p>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      )}

      {/* Top Contributors Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Top Contributors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.id}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                data-testid={`contributor-${contributor.id}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                    </Avatar>
                    {contributor.isVerified && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <Crown className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{contributor.name}</p>
                    <p className="text-xs text-muted-foreground">{contributor.specialBadge}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="h-7 px-3">
                  <UserPlus className="w-3 h-3 mr-1" />
                  Follow
                </Button>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
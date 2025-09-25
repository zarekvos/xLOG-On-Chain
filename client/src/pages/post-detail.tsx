import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';
import { EnhancedBlogReader } from '@/components/enhanced-blog-reader';
import { SocialFeatures } from '@/components/social-features';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon, EyeIcon, UserIcon } from 'lucide-react';

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog-posts', id],
    queryFn: async () => {
      const response = await fetch(`/api/blog-posts/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      return response.json();
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto p-6 pt-20">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto p-6 pt-20">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
              <p className="text-muted-foreground">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto p-6 pt-20">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="post-title">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'No date'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readingTime || 5} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <EyeIcon className="w-4 h-4" />
              <span>{post.views || 0} views</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="mb-8">
          <EnhancedBlogReader post={post} />
        </div>

        {/* Social Features */}
        <div className="mb-8">
          <SocialFeatures 
            postId={post.id}
            initialLikes={post.likes || 0}
            initialComments={post.comments || 0}
            initialShares={post.shares || 0}
          />
        </div>
      </div>
    </div>
  );
}
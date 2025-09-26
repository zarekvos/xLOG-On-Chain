import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@shared/schema';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'wouter';

export function BlogSection() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  const truncateWalletAddress = (address: string) => {
    if (address.length <= 10) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getChainName = (chainId: string) => {
    const chainMap: { [key: string]: string } = {
      '1': 'Ethereum',
      '8453': 'Base',
      '56': 'BNB Chain',
      '43114': 'Avalanche',
    };
    return chainMap[chainId] || 'Unknown';
  };

  if (isLoading) {
    return (
      <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Posts</h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing content from our community of Web3 writers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="w-full h-48 bg-muted animate-pulse" />
                <CardContent className="p-6">
                  <div className="h-6 bg-muted rounded animate-pulse mb-2" />
                  <div className="h-4 bg-muted rounded animate-pulse mb-3 w-3/4" />
                  <div className="h-16 bg-muted rounded animate-pulse" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Posts</h2>
          <p className="text-xl text-muted-foreground">
            Discover amazing content from our community of Web3 writers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`blog-post-${post.id}`}
            >
              {/* Placeholder image based on content */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <span className="font-mono" data-testid={`author-${post.id}`}>
                    {truncateWalletAddress(post.author)}
                  </span>
                  <span>•</span>
                  <span data-testid={`chain-${post.id}`}>
                    {getChainName(post.chainId)}
                  </span>
                  <span>•</span>
                  <span data-testid={`date-${post.id}`}>
                    {post.createdAt ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) : 'Unknown'}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 font-medium p-0 h-auto"
                    data-testid={`button-read-more-${post.id}`}
                  >
                    Read More →
                  </Button>
                </Link>
              </CardContent>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/blogs">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-medium transition-all"
              data-testid="button-view-all-posts"
            >
              View All Posts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { AdvancedDiscovery } from '@/components/advanced-discovery';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@shared/schema';
import { formatDistanceToNow } from 'date-fns';
import { Search, Filter, TrendingUp, Clock, User, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'wouter';

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [, setLocation] = useLocation();

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

  const getChainColor = (chainId: string) => {
    const colorMap: { [key: string]: string } = {
      '1': 'bg-blue-500',
      '8453': 'bg-blue-600',
      '56': 'bg-yellow-500',
      '43114': 'bg-red-500',
    };
    return colorMap[chainId] || 'bg-gray-500';
  };

  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChain = !selectedChain || post.chainId === selectedChain;
    return matchesSearch && matchesChain;
  });

  const chains = [
    { id: '1', name: 'Ethereum', color: 'bg-blue-500' },
    { id: '8453', name: 'Base', color: 'bg-blue-600' },
    { id: '56', name: 'BNB Chain', color: 'bg-yellow-500' },
    { id: '43114', name: 'Avalanche', color: 'bg-red-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Discovery Section */}
      <section className="pt-20">
        <AdvancedDiscovery />
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
                data-testid="search-input"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-5 h-5 text-muted-foreground mr-2" />
              <Button
                variant={selectedChain === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedChain(null)}
                className="transition-all duration-200"
              >
                All Chains
              </Button>
              {chains.map(chain => (
                <Button
                  key={chain.id}
                  variant={selectedChain === chain.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedChain(chain.id)}
                  className="flex items-center gap-2 transition-all duration-200"
                >
                  <div className={`w-3 h-3 ${chain.color} rounded-full`} />
                  {chain.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/20">
              <CardContent className="p-0 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{blogPosts?.length || 0}</h3>
                <p className="text-muted-foreground">Published Posts</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-600/10 to-primary/10 border-purple-600/20">
              <CardContent className="p-0 text-center">
                <User className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">3</h3>
                <p className="text-muted-foreground">Active Authors</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
              <CardContent className="p-0 text-center">
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">4</h3>
                <p className="text-muted-foreground">Blockchains</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Latest Posts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into the world of decentralized content and Web3 innovation
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
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
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts?.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  data-testid={`blog-post-${post.id}`}
                >
                  {/* Post Image */}
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/40 to-purple-600/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">📝</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        className={`${getChainColor(post.chainId)} text-white border-0`}
                        data-testid={`chain-${post.id}`}
                      >
                        {getChainName(post.chainId)}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="font-mono" data-testid={`author-${post.id}`}>
                          {truncateWalletAddress(post.author)}
                        </span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span data-testid={`date-${post.id}`}>
                          {post.createdAt ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true }) : 'Unknown'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 font-medium p-0 h-auto group/btn"
                      onClick={() => setLocation(`/post/${post.id}`)}
                      data-testid={`button-read-more-${post.id}`}
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </motion.article>
              ))}
            </div>
          )}

          {filteredPosts?.length === 0 && !isLoading && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">No posts found</h3>
              <p className="text-muted-foreground mb-8">Try adjusting your search criteria or browse all posts</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedChain(null); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredPosts && filteredPosts.length > 0 && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 font-medium transition-all duration-300"
                data-testid="button-load-more"
              >
                Load More Posts
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
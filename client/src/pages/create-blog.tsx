import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { supportedChains } from '@/lib/wagmi';
import { useAlert } from '@/components/ui/alert-service';
import { ArrowLeft, Send, Eye, Save, Link as ChainIcon, ImageIcon, Tag } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { useAccount } from 'wagmi';

export default function CreateBlog() {
  const [, setLocation] = useLocation();
  const { address, isConnected } = useAccount();
  const alert = useAlert();
  
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    excerpt: '',
    tags: '',
    chainId: '',
    coverImage: ''
  });

  const [isPreview, setIsPreview] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setBlogData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveDraft = () => {
    if (!blogData.title.trim()) {
      alert.warning('Please enter a title for your blog post');
      return;
    }
    
    alert.success('Draft saved successfully!', {
      description: 'Your blog post has been saved as a draft'
    });
  };

  const handlePublish = async () => {
    // Validation
    if (!isConnected) {
      alert.error('Wallet not connected', {
        description: 'Please connect your wallet to publish your blog',
        action: {
          label: 'Connect Wallet',
          onClick: () => console.log('Open wallet connection modal')
        }
      });
      return;
    }

    if (!blogData.title.trim()) {
      alert.warning('Title is required', {
        description: 'Please enter a title for your blog post'
      });
      return;
    }

    if (!blogData.content.trim()) {
      alert.warning('Content is required', {
        description: 'Please write some content for your blog post'
      });
      return;
    }

    if (!blogData.chainId) {
      alert.warning('Please select a blockchain network', {
        description: 'Choose which network to publish your blog on'
      });
      return;
    }
    
    setIsPublishing(true);
    
    // Show transaction pending
    alert.blockchain.transactionPending('0x1234567890abcdef...');
    
    // Simulate publishing process
    setTimeout(() => {
      setIsPublishing(false);
      
      // Get selected chain name
      const selectedChain = supportedChains.find(chain => chain.id.toString() === blogData.chainId);
      
      // Show success with blockchain-specific message
      alert.blockchain.blogPublished(selectedChain?.name);
      
      setTimeout(() => {
        setLocation('/blogs');
      }, 2000);
    }, 3000);
  };

  const tags = blogData.tags.split(',').filter(tag => tag.trim()).map(tag => tag.trim());

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/dashboard">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create New 
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Blog Post</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Share your thoughts on the blockchain forever. Your content will be permanently stored and censorship-resistant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Editor */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    {isPreview ? <Eye className="w-5 h-5" /> : <ChainIcon className="w-5 h-5" />}
                    {isPreview ? 'Preview' : 'Write'}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPreview(!isPreview)}
                  >
                    {isPreview ? 'Edit' : 'Preview'}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!isPreview ? (
                    <>
                      {/* Title */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Blog Title</label>
                        <Input
                          placeholder="Enter your blog title..."
                          value={blogData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          className="text-lg"
                        />
                      </div>

                      {/* Excerpt */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Excerpt</label>
                        <Textarea
                          placeholder="Brief description of your blog post..."
                          value={blogData.excerpt}
                          onChange={(e) => handleInputChange('excerpt', e.target.value)}
                          rows={3}
                        />
                      </div>

                      {/* Cover Image */}
                      <div>
                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4" />
                          Cover Image URL
                        </label>
                        <Input
                          placeholder="https://example.com/image.jpg"
                          value={blogData.coverImage}
                          onChange={(e) => handleInputChange('coverImage', e.target.value)}
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Content</label>
                        <Textarea
                          placeholder="Write your blog content here... (Markdown supported)"
                          value={blogData.content}
                          onChange={(e) => handleInputChange('content', e.target.value)}
                          rows={15}
                          className="font-mono"
                        />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-6">
                      {/* Preview */}
                      {blogData.coverImage && (
                        <img 
                          src={blogData.coverImage} 
                          alt="Cover" 
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                      <h1 className="text-3xl font-bold">{blogData.title || 'Blog Title'}</h1>
                      <p className="text-muted-foreground">{blogData.excerpt || 'Blog excerpt...'}</p>
                      <div className="prose prose-lg max-w-none">
                        <pre className="whitespace-pre-wrap">{blogData.content || 'Blog content...'}</pre>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Chain Selection */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Blockchain Network</label>
                    <Select value={blogData.chainId} onValueChange={(value) => handleInputChange('chainId', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select network" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportedChains.map((chain) => (
                          <SelectItem key={chain.id} value={chain.id.toString()}>
                            <div className="flex items-center gap-2">
                              <img 
                                src={chain.icon} 
                                alt={`${chain.name} logo`}
                                className="w-4 h-4 object-contain"
                              />
                              {chain.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Tags
                    </label>
                    <Input
                      placeholder="blockchain, defi, web3 (comma separated)"
                      value={blogData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                    />
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, index) => (
                          <Badge key={index} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4">
                    <Button
                      onClick={handlePublish}
                      disabled={!blogData.title || !blogData.content || !blogData.chainId || isPublishing}
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                    >
                      {isPublishing ? (
                        'Publishing...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Publish to Blockchain
                        </>
                      )}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleSaveDraft}
                      className="w-full"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Wallet Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Wallet Status</CardTitle>
                </CardHeader>
                <CardContent>
                  {isConnected ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Connected</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {address?.slice(0, 6)}...{address?.slice(-4)}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Not Connected</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Connect your wallet to publish
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

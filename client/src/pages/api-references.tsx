import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Code, 
  Globe, 
  Key,
  Database,
  Zap,
  Shield,
  ArrowRight,
  Copy,
  ExternalLink,
  Wallet,
  FileText,
  Users,
  DollarSign
} from 'lucide-react';

export default function ApiReferences() {
  const apiEndpoints = [
    {
      category: 'Authentication',
      icon: Key,
      color: 'from-blue-500 to-cyan-600',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/connect',
          description: 'Connect wallet and authenticate user',
          params: ['walletAddress', 'signature', 'chainId']
        },
        {
          method: 'POST',
          path: '/api/auth/disconnect',
          description: 'Disconnect wallet and clear session',
          params: ['walletAddress']
        },
        {
          method: 'GET',
          path: '/api/auth/profile',
          description: 'Get current user profile',
          params: []
        }
      ]
    },
    {
      category: 'Blog Posts',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      endpoints: [
        {
          method: 'GET',
          path: '/api/blog-posts',
          description: 'Get all published blog posts',
          params: ['page', 'limit', 'category', 'author']
        },
        {
          method: 'POST',
          path: '/api/blog-posts',
          description: 'Create a new blog post',
          params: ['title', 'content', 'excerpt', 'chainId', 'tags']
        },
        {
          method: 'GET',
          path: '/api/blog-posts/:id',
          description: 'Get specific blog post by ID',
          params: ['id']
        },
        {
          method: 'PUT',
          path: '/api/blog-posts/:id',
          description: 'Update existing blog post',
          params: ['id', 'title', 'content', 'tags']
        },
        {
          method: 'DELETE',
          path: '/api/blog-posts/:id',
          description: 'Delete blog post',
          params: ['id']
        }
      ]
    },
    {
      category: 'Blockchain',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      endpoints: [
        {
          method: 'GET',
          path: '/api/chains',
          description: 'Get supported blockchain networks',
          params: []
        },
        {
          method: 'POST',
          path: '/api/chains/verify',
          description: 'Verify transaction on blockchain',
          params: ['transactionHash', 'chainId']
        },
        {
          method: 'GET',
          path: '/api/chains/:chainId/gas',
          description: 'Get current gas prices for chain',
          params: ['chainId']
        }
      ]
    },
    {
      category: 'Analytics',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      endpoints: [
        {
          method: 'GET',
          path: '/api/analytics/posts/:id',
          description: 'Get analytics for specific post',
          params: ['id', 'period']
        },
        {
          method: 'GET',
          path: '/api/analytics/creator',
          description: 'Get creator dashboard analytics',
          params: ['period', 'walletAddress']
        },
        {
          method: 'POST',
          path: '/api/analytics/track',
          description: 'Track user interaction',
          params: ['event', 'postId', 'userId']
        }
      ]
    },
    {
      category: 'Monetization',
      icon: DollarSign,
      color: 'from-yellow-500 to-orange-600',
      endpoints: [
        {
          method: 'GET',
          path: '/api/earnings/:walletAddress',
          description: 'Get user earnings summary',
          params: ['walletAddress', 'period']
        },
        {
          method: 'POST',
          path: '/api/earnings/withdraw',
          description: 'Request earnings withdrawal',
          params: ['walletAddress', 'amount', 'chainId']
        },
        {
          method: 'GET',
          path: '/api/earnings/history',
          description: 'Get earnings transaction history',
          params: ['walletAddress', 'page', 'limit']
        }
      ]
    }
  ];

  const codeExamples = {
    createPost: `// Create a new blog post
const response = await fetch('/api/blog-posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + walletSignature
  },
  body: JSON.stringify({
    title: 'My First Web3 Blog Post',
    content: 'This is the content of my blog post...',
    excerpt: 'A brief summary of the post',
    chainId: '1', // Ethereum
    tags: ['web3', 'blockchain', 'defi']
  })
});

const post = await response.json();`,

    getAnalytics: `// Get creator analytics
const response = await fetch('/api/analytics/creator?period=30d', {
  headers: {
    'Authorization': 'Bearer ' + walletSignature
  }
});

const analytics = await response.json();
console.log('Total views:', analytics.totalViews);`,

    connectWallet: `// Connect wallet
const response = await fetch('/api/auth/connect', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    walletAddress: '0x742d35Cc6634C0532925a3b8D8d7B2623CE4D806',
    signature: signedMessage,
    chainId: '1'
  })
});

const session = await response.json();`
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'POST': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'PUT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
              API
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                Reference
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete API documentation for integrating with xLog's decentralized blogging platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://github.com/xlog-app/api-examples', '_blank')}
              >
                <Code className="w-5 h-5 mr-2" />
                View Examples
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium"
                onClick={() => window.open('https://postman.com/xlog-api', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Postman Collection
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">API Endpoints</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore all available endpoints to interact with the xLog platform
            </p>
          </motion.div>

          <div className="space-y-8">
            {apiEndpoints.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                    <CardTitle className="flex items-center text-2xl">
                      <category.icon className="w-6 h-6 mr-3" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className={`p-6 ${endpointIndex !== category.endpoints.length - 1 ? 'border-b' : ''}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 mb-2 md:mb-0">
                            <Badge className={getMethodColor(endpoint.method)} variant="outline">
                              {endpoint.method}
                            </Badge>
                            <code className="text-lg font-mono bg-muted px-3 py-1 rounded">
                              {endpoint.path}
                            </code>
                          </div>
                          <Button variant="outline" size="sm">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <p className="text-muted-foreground mb-3">{endpoint.description}</p>
                        {endpoint.params.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-2">Parameters:</h4>
                            <div className="flex flex-wrap gap-2">
                              {endpoint.params.map((param, paramIndex) => (
                                <Badge key={paramIndex} variant="secondary">
                                  {param}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Code Examples</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started quickly with these practical examples
            </p>
          </motion.div>

          <Tabs defaultValue="createPost" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-muted/30 p-1 rounded-2xl">
              <TabsTrigger value="createPost" className="rounded-xl">
                <FileText className="w-4 h-4 mr-2" />
                Create Post
              </TabsTrigger>
              <TabsTrigger value="getAnalytics" className="rounded-xl">
                <Database className="w-4 h-4 mr-2" />
                Get Analytics
              </TabsTrigger>
              <TabsTrigger value="connectWallet" className="rounded-xl">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </TabsTrigger>
            </TabsList>

            <TabsContent value="createPost">
              <Card>
                <CardHeader>
                  <CardTitle>Create a New Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <code>{codeExamples.createPost}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="getAnalytics">
              <Card>
                <CardHeader>
                  <CardTitle>Get Creator Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <code>{codeExamples.getAnalytics}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="connectWallet">
              <Card>
                <CardHeader>
                  <CardTitle>Connect Wallet Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
                    <code>{codeExamples.connectWallet}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Getting Started</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="text-center">
                <CardHeader>
                  <Key className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <CardTitle>1. Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect your wallet and get authenticated to access protected endpoints
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Code className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <CardTitle>2. Make Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use our RESTful API endpoints to create, read, update, and delete content
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                  <CardTitle>3. Go Live</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deploy your application and start building on the decentralized web
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

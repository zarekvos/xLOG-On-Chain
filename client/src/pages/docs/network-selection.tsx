import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Zap, DollarSign, Leaf, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supportedChains } from '@/lib/wagmi';

export default function NetworkSelection() {
  // Get network data from wagmi and enhance with additional info
  const getNetworkInfo = (chainName: string) => {
    const networkData = {
      'Ethereum': {
        symbol: 'ETH',
        color: 'from-blue-500 to-indigo-600',
        gasPrice: 'High ($5-50)',
        speed: 'Slow (1-5 min)',
        security: 'Highest',
        description: 'The original smart contract platform with the largest ecosystem',
        pros: [
          'Most secure and decentralized network',
          'Largest developer ecosystem',
          'Most trusted by institutions',
          'Best for high-value content'
        ],
        cons: [
          'High transaction fees',
          'Slower confirmation times',
          'Network congestion during peak times'
        ],
        bestFor: 'Premium content, important announcements, maximum security',
        recommended: false
      },
      'Base': {
        symbol: 'ETH',
        color: 'from-blue-600 to-cyan-500',
        gasPrice: 'Very Low ($0.01-0.10)',
        speed: 'Fast (2-10 sec)',
        security: 'High',
        description: 'Coinbase\'s Layer 2 solution built on Ethereum',
        pros: [
          'Ultra-low transaction fees',
          'Lightning-fast transactions',
          'Built by Coinbase for reliability',
          'Perfect for beginners'
        ],
        cons: [
          'Newer network with smaller ecosystem',
          'Less decentralized than Ethereum mainnet'
        ],
        bestFor: 'Daily blogging, beginners, frequent publishing',
        recommended: true
      },
      'BNB Chain': {
        symbol: 'BNB',
        color: 'from-yellow-500 to-orange-500',
        gasPrice: 'Low ($0.10-1.00)',
        speed: 'Fast (3-5 sec)',
        security: 'High',
        description: 'High-performance blockchain with low fees',
        pros: [
          'Low transaction costs',
          'Fast block times',
          'Large user base',
          'Good for DeFi integration'
        ],
        cons: [
          'More centralized than Ethereum',
          'Requires BNB for gas fees'
        ],
        bestFor: 'Cost-effective publishing, DeFi integration',
        recommended: false
      },
      'Avalanche': {
        symbol: 'AVAX',
        color: 'from-red-500 to-pink-600',
        gasPrice: 'Low ($0.05-0.50)',
        speed: 'Very Fast (1-3 sec)',
        security: 'High',
        description: 'Eco-friendly blockchain with sub-second finality',
        pros: [
          'Fastest transaction finality',
          'Environmentally friendly',
          'Low fees and high throughput',
          'Ethereum Virtual Machine compatible'
        ],
        cons: [
          'Smaller ecosystem compared to Ethereum',
          'Less mainstream adoption'
        ],
        bestFor: 'Eco-conscious creators, speed-critical applications',
        recommended: false
      },
      'Plasma': {
        symbol: 'XPL',
        color: 'from-purple-500 to-violet-600',
        gasPrice: 'Ultra Low ($0.001-0.01)',
        speed: 'Very Fast (1-3 sec)',
        security: 'High',
        description: 'High-performance Layer 1 blockchain optimized for scalability and efficiency',
        pros: [
          'Native Layer 1 blockchain architecture',
          'Extremely low transaction fees',
          'Fast block confirmation times',
          'High throughput and scalability',
          'Full smart contract support',
          'Energy-efficient consensus mechanism'
        ],
        cons: [
          'Newer blockchain with growing ecosystem',
          'Limited DeFi protocols compared to Ethereum',
          'Smaller developer community initially'
        ],
        bestFor: 'Cost-effective publishing, high-frequency content creation, sustainable blockchain usage',
        recommended: false
      }
    };
    return networkData[chainName as keyof typeof networkData];
  };

  // Combine wagmi chain data with additional network info
  const networks = supportedChains.map(chain => ({
    ...chain,
    ...getNetworkInfo(chain.name),
    icon: chain.icon // Use the icon from wagmi configuration
  }));

  const comparisonMetrics = [
    { metric: 'Transaction Cost', ethereum: 'High', base: 'Very Low', bnb: 'Low', avalanche: 'Low', plasma: 'Ultra Low' },
    { metric: 'Speed', ethereum: 'Slow', base: 'Fast', bnb: 'Fast', avalanche: 'Very Fast', plasma: 'Instant' },
    { metric: 'Security', ethereum: 'Highest', base: 'High', bnb: 'High', avalanche: 'High', plasma: 'High' },
    { metric: 'Ecosystem Size', ethereum: 'Largest', base: 'Growing', bnb: 'Large', avalanche: 'Medium', plasma: 'Growing' },
    { metric: 'Decentralization', ethereum: 'Highest', base: 'Medium', bnb: 'Medium', avalanche: 'High', plasma: 'High' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/docs">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Docs
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Network Selection</h1>
                <p className="text-muted-foreground">Choosing the right blockchain network</p>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Beginner
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12"
        >
          <p className="text-xl text-muted-foreground">
            xLog supports multiple blockchain networks, each with unique characteristics. Choose the network that best 
            fits your needs based on cost, speed, and security requirements.
          </p>
        </motion.div>

        {/* Network Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          {networks.map((network, index) => (
            <motion.div
              key={network.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className={`relative h-full ${network.recommended ? 'border-primary shadow-lg' : ''}`}>
                {network.recommended && (
                  <Badge className="absolute -top-2 -right-2 bg-primary">
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center p-2 border">
                      <img src={network.icon} alt={network.name} className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {network.name}
                        <span className="text-sm font-normal text-muted-foreground">({network.symbol})</span>
                      </CardTitle>
                      <CardDescription>{network.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-sm font-medium">{network.gasPrice}</div>
                      <div className="text-xs text-muted-foreground">Gas Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                      </div>
                      <div className="text-sm font-medium">{network.speed}</div>
                      <div className="text-xs text-muted-foreground">Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Shield className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="text-sm font-medium">{network.security}</div>
                      <div className="text-xs text-muted-foreground">Security</div>
                    </div>
                  </div>

                  {/* Pros */}
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Advantages</h4>
                    <ul className="space-y-1">
                      {network.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <TrendingUp className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {network.cons.map((con, conIndex) => (
                        <li key={conIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Best for:</h4>
                    <p className="text-sm text-muted-foreground">{network.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Network Comparison</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Metric</th>
                      <th className="text-center p-4 font-semibold">Ethereum</th>
                      <th className="text-center p-4 font-semibold bg-primary/5">Base</th>
                      <th className="text-center p-4 font-semibold">BNB Chain</th>
                      <th className="text-center p-4 font-semibold">Avalanche</th>
                      <th className="text-center p-4 font-semibold">Plasma</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonMetrics.map((row, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="p-4 font-medium">{row.metric}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.ethereum}</td>
                        <td className="text-center p-4 bg-primary/5 font-medium">{row.base}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.bnb}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.avalanche}</td>
                        <td className="text-center p-4 text-muted-foreground">{row.plasma}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Our Recommendation</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
                    <p className="text-muted-foreground">
                      For most users, we recommend starting with <strong>Base</strong>. It offers the best balance of 
                      low fees, fast transactions, and security. As you become more experienced, you can explore other 
                      networks based on your specific needs.
                    </p>
                    <ul className="text-muted-foreground">
                      <li><strong>New to blockchain:</strong> Start with Base</li>
                      <li><strong>Publishing frequently:</strong> Base or BNB Chain</li>
                      <li><strong>High-value content:</strong> Ethereum for maximum security</li>
                      <li><strong>Environmental concerns:</strong> Avalanche or Base</li>
                    </ul>
                  </div>
                  <div className="flex gap-4">
                    <Link href="/docs/publishing-first-post">
                      <Button variant="outline">
                        Next: Publishing Your First Post
                      </Button>
                    </Link>
                    <Link href="/create-blog">
                      <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                        Start Publishing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowLeft, Network, Zap, ArrowRightLeft, Globe2, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function MultiChainPublishing() {
  const benefits = [
    {
      title: 'Wider Audience Reach',
      description: 'Access users across different blockchain ecosystems',
      icon: Globe2
    },
    {
      title: 'Cost Optimization',
      description: 'Choose the most cost-effective network for each post',
      icon: Zap
    },
    {
      title: 'Risk Distribution',
      description: 'Spread your content across multiple networks for redundancy',
      icon: Network
    },
    {
      title: 'Cross-Chain Synergies',
      description: 'Leverage unique features of different blockchain networks',
      icon: ArrowRightLeft
    }
  ];

  const strategies = [
    {
      title: 'Content-Based Strategy',
      description: 'Choose networks based on content type and value',
      recommendations: [
        'High-value, evergreen content → Ethereum (maximum security)',
        'Daily blog posts → Base or BNB Chain (low fees)',
        'Interactive content → Avalanche (fast finality)',
        'Community-focused content → BNB Chain (large user base)'
      ]
    },
    {
      title: 'Audience-Based Strategy',
      description: 'Target specific communities on their preferred networks',
      recommendations: [
        'DeFi enthusiasts → Ethereum and Avalanche',
        'Gaming communities → BNB Chain',
        'Mainstream users → Base (Coinbase ecosystem)',
        'Environmental advocates → Avalanche (eco-friendly)'
      ]
    },
    {
      title: 'Cost-Based Strategy',
      description: 'Optimize for transaction costs and publishing frequency',
      recommendations: [
        'High-frequency publishing → Base (lowest fees)',
        'Medium-frequency → BNB Chain or Avalanche',
        'Important announcements → Ethereum (highest security)',
        'Experimental content → Base (cheap to test)'
      ]
    }
  ];

  const workflow = [
    {
      step: 1,
      title: 'Content Planning',
      description: 'Plan your multi-chain content strategy',
      actions: [
        'Identify your target audiences on each network',
        'Map content types to appropriate networks',
        'Set up publishing schedules for each chain',
        'Plan cross-chain content promotion'
      ]
    },
    {
      step: 2,
      title: 'Network Setup',
      description: 'Configure your wallet for multiple networks',
      actions: [
        'Add all supported networks to your wallet',
        'Ensure you have native tokens for gas fees',
        'Test transactions on each network',
        'Set up network switching workflows'
      ]
    },
    {
      step: 3,
      title: 'Content Distribution',
      description: 'Publish and distribute across networks',
      actions: [
        'Create content optimized for each network',
        'Publish simultaneously or sequentially',
        'Cross-promote content across networks',
        'Track performance on each chain'
      ]
    },
    {
      step: 4,
      title: 'Analytics & Optimization',
      description: 'Monitor and optimize your multi-chain strategy',
      actions: [
        'Track engagement metrics per network',
        'Analyze cost-effectiveness of each chain',
        'Identify your most successful content types',
        'Refine your multi-chain strategy based on data'
      ]
    }
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
                <Network className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Multi-Chain Publishing</h1>
                <p className="text-muted-foreground">Publish across different networks</p>
              </div>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Intermediate
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
            Multi-chain publishing allows you to reach different blockchain communities, optimize costs, 
            and leverage the unique features of various networks. Learn how to develop an effective 
            cross-chain content strategy.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Benefits of Multi-Chain Publishing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategies */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Publishing Strategies</h2>
          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{strategy.title}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {strategy.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Multi-Chain Workflow</h2>
          <div className="space-y-6">
            {workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.actions.map((action, actionIndex) => (
                            <li key={actionIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <AlertTriangle className="w-4 h-4 text-orange-600" />
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Gas Fee Consideration:</strong> Multi-chain publishing requires native tokens 
              for each network (ETH, BNB, AVAX). Plan your token allocation and consider gas price 
              fluctuations when developing your publishing strategy.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready for Multi-Chain Publishing?</h3>
              <p className="text-muted-foreground mb-6">
                Start implementing your multi-chain strategy and reach audiences across the entire 
                blockchain ecosystem.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/docs/content-monetization">
                  <Button variant="outline">
                    Next: Content Monetization
                  </Button>
                </Link>
                <Link href="/create-blog">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Network className="w-4 h-4 mr-2" />
                    Start Multi-Chain Publishing
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

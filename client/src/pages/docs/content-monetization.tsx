import { motion } from 'framer-motion';
import { ArrowLeft, DollarSign, TrendingUp, Users, Gift, Zap, PiggyBank } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ContentMonetization() {
  const monetizationMethods = [
    {
      icon: DollarSign,
      title: 'Direct Payments',
      description: 'Receive direct cryptocurrency payments from readers',
      difficulty: 'Easy',
      features: [
        'Set up wallet addresses for donations',
        'Accept payments in multiple cryptocurrencies',
        'Display payment QR codes',
        'Track donation analytics'
      ],
      earning: 'Variable'
    },
    {
      icon: Gift,
      title: 'NFT Content',
      description: 'Mint and sell your content as NFTs',
      difficulty: 'Medium',
      features: [
        'Convert articles to unique NFTs',
        'Set royalties for secondary sales',
        'Create limited edition content',
        'Build collector communities'
      ],
      earning: 'High potential'
    },
    {
      icon: Users,
      title: 'Token Gating',
      description: 'Create premium content for token holders',
      difficulty: 'Advanced',
      features: [
        'Lock content behind token ownership',
        'Create membership tiers',
        'Offer exclusive benefits',
        'Build loyal subscriber base'
      ],
      earning: 'Recurring'
    },
    {
      icon: TrendingUp,
      title: 'Engagement Rewards',
      description: 'Earn based on reader engagement and shares',
      difficulty: 'Easy',
      features: [
        'Automatic rewards based on views',
        'Bonus for social media shares',
        'Comment and interaction bonuses',
        'Referral program rewards'
      ],
      earning: 'Performance-based'
    }
  ];

  const strategies = [
    {
      title: 'Freemium Model',
      description: 'Offer basic content for free with premium paid tiers',
      steps: [
        'Publish regular free content to build audience',
        'Create high-value premium content',
        'Implement token-gated access',
        'Offer subscriber-only benefits'
      ],
      bestFor: 'Educational content, tutorials, analysis'
    },
    {
      title: 'Tip-Based Model',
      description: 'Rely on voluntary donations and tips from readers',
      steps: [
        'Create exceptional free content',
        'Make donation process simple and visible',
        'Show appreciation for supporters',
        'Offer small perks for regular tippers'
      ],
      bestFor: 'Personal blogs, creative content, journalism'
    },
    {
      title: 'NFT Collection Model',
      description: 'Build a collection of content NFTs with different rarities',
      steps: [
        'Plan your content collection strategy',
        'Create different tiers of NFT content',
        'Build community around your collection',
        'Offer holder-exclusive benefits'
      ],
      bestFor: 'Art, photography, exclusive stories'
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: 'Choose Your Monetization Mix',
      description: 'Select the monetization methods that align with your content and audience'
    },
    {
      step: 2, 
      title: 'Set Up Payment Infrastructure',
      description: 'Configure wallets, smart contracts, and payment systems'
    },
    {
      step: 3,
      title: 'Create Tiered Content Strategy',
      description: 'Plan free and premium content to maximize earning potential'
    },
    {
      step: 4,
      title: 'Launch and Iterate',
      description: 'Start monetizing and adjust based on audience response and performance'
    }
  ];

  const tips = [
    {
      title: 'Build Trust First',
      description: 'Establish credibility with free, high-quality content before monetizing',
      icon: '🤝'
    },
    {
      title: 'Transparent Pricing',
      description: 'Be clear about costs and what supporters get in return',
      icon: '💎'
    },
    {
      title: 'Community Focus',
      description: 'Build a community around your content, not just customers',
      icon: '👥'
    },
    {
      title: 'Multiple Revenue Streams',
      description: 'Diversify your income sources for more stability',
      icon: '🌊'
    },
    {
      title: 'Consistent Value',
      description: 'Maintain quality and consistency to retain paying supporters',
      icon: '⭐'
    },
    {
      title: 'Engage Supporters',
      description: 'Actively engage with your paying community members',
      icon: '💬'
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Content Monetization</h1>
                <p className="text-muted-foreground">Monetize your decentralized content</p>
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
            Transform your blockchain content into sustainable income streams. Learn various monetization 
            strategies that work in the decentralized web while building meaningful relationships with your audience.
          </p>
        </motion.div>

        {/* Monetization Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Monetization Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {monetizationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                          <method.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{method.title}</CardTitle>
                          <CardDescription>{method.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {method.difficulty}
                        </Badge>
                        <div className="text-xs text-muted-foreground">
                          {method.earning}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
          <h2 className="text-2xl font-bold mb-6">Monetization Strategies</h2>
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
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Implementation Steps:</h4>
                        <ol className="space-y-2">
                          {strategy.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Best For:</h4>
                        <p className="text-sm text-muted-foreground">{strategy.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Setup Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Success Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <span className="text-3xl">{tip.icon}</span>
                    </div>
                    <h3 className="font-semibold text-center mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{tip.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              <h3 className="text-2xl font-bold mb-4">Start Monetizing Your Content</h3>
              <p className="text-muted-foreground mb-6">
                Ready to turn your blockchain content into a sustainable income stream? 
                Connect your wallet and explore monetization options.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/docs/community-features">
                  <Button variant="outline">
                    Next: Community Features
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <PiggyBank className="w-4 h-4 mr-2" />
                    Set Up Monetization
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

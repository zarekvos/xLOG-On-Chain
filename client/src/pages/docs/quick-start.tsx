import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Terminal, Wallet, Globe, Edit } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function QuickStartGuide() {
  const steps = [
    {
      icon: Wallet,
      title: 'Connect Your Wallet',
      description: 'Connect a Web3 wallet like MetaMask, WalletConnect, or Coinbase Wallet',
      time: '1 min',
      details: [
        'Install a Web3 wallet extension in your browser',
        'Create or import your wallet',
        'Click "Connect Wallet" in the top right corner',
        'Select your preferred wallet and approve the connection'
      ]
    },
    {
      icon: Globe,
      title: 'Select Network',
      description: 'Choose your preferred blockchain network (Ethereum, Base, BNB Chain, or Avalanche)',
      time: '1 min',
      details: [
        'Each network has different gas fees and confirmation times',
        'Ethereum: Most secure, higher fees',
        'Base: Fast and low fees, great for beginners',
        'BNB Chain: Low fees, fast transactions',
        'Avalanche: Fast finality, eco-friendly'
      ]
    },
    {
      icon: Edit,
      title: 'Create Your First Post',
      description: 'Write and publish your first blog post on the blockchain',
      time: '2-3 min',
      details: [
        'Navigate to "Create Blog" page',
        'Write your title and content using the rich text editor',
        'Add tags to categorize your post',
        'Preview your content before publishing',
        'Click "Publish to Blockchain" and confirm the transaction'
      ]
    },
    {
      icon: CheckCircle,
      title: 'You\'re Ready!',
      description: 'Your content is now permanently stored on the blockchain',
      time: 'Complete',
      details: [
        'Your post is immutable and censorship-resistant',
        'Share your post URL with others',
        'Explore monetization options',
        'Connect with the xLog community'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Quick Start Guide</h1>
                <p className="text-muted-foreground">Get up and running in 5 minutes</p>
              </div>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Beginner
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12"
        >
          <p className="text-xl text-muted-foreground">
            Welcome to xLog! This guide will help you publish your first blog post on the blockchain in just a few simple steps.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">
                          Step {index + 1}: {step.title}
                        </CardTitle>
                        <Badge variant="outline">{step.time}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Create your first blockchain blog post and join the decentralized content revolution.
              </p>
              <Link href="/create-blog">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  <Edit className="w-5 h-5 mr-2" />
                  Create Your First Post
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

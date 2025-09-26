import { motion } from 'framer-motion';
import { ArrowLeft, Edit3, Eye, Share2, CheckCircle, AlertCircle, Zap, DollarSign, Clock } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function PublishingFirstPost() {
  const publishingSteps = [
    {
      icon: Edit3,
      title: 'Create Your Content',
      description: 'Write your blog post using our rich text editor',
      details: [
        'Navigate to the "Create Blog" page',
        'Add an engaging title that represents your content',
        'Use the rich text editor to format your content',
        'Add images, links, and formatting as needed',
        'Write a compelling excerpt for social sharing'
      ],
      tips: [
        'Keep your title under 60 characters for better SEO',
        'Use headers to structure your content',
        'Add alt text to images for accessibility'
      ]
    },
    {
      icon: Eye,
      title: 'Preview Your Post',
      description: 'Review how your post will look to readers',
      details: [
        'Click the "Preview" tab to see your formatted content',
        'Check that all links work correctly',
        'Verify images display properly',
        'Review the overall layout and formatting',
        'Make any necessary adjustments'
      ],
      tips: [
        'Preview on both desktop and mobile views',
        'Check for spelling and grammar errors',
        'Ensure your content flows logically'
      ]
    },
    {
      icon: Zap,
      title: 'Choose Network & Settings',
      description: 'Select blockchain network and configure settings',
      details: [
        'Select your preferred blockchain network',
        'Review the estimated gas fee',
        'Add relevant tags to categorize your post',
        'Set visibility preferences if available',
        'Configure monetization settings if desired'
      ],
      tips: [
        'Base network is recommended for beginners',
        'Gas fees are typically higher during peak hours',
        'Use relevant tags to help readers find your content'
      ]
    },
    {
      icon: Share2,
      title: 'Publish to Blockchain',
      description: 'Confirm the transaction and publish your post',
      details: [
        'Click "Publish to Blockchain" button',
        'Review the transaction details in your wallet',
        'Confirm the gas fee and network',
        'Approve the transaction in your wallet',
        'Wait for blockchain confirmation'
      ],
      tips: [
        'Transaction confirmation can take 1-5 minutes',
        'Don\'t close the browser until confirmation',
        'Save your post URL once published'
      ]
    }
  ];

  const bestPractices = [
    {
      title: 'Content Quality',
      practices: [
        'Write original, valuable content',
        'Use proper grammar and spelling',
        'Include relevant images and media',
        'Structure content with headers and paragraphs'
      ]
    },
    {
      title: 'Blockchain Considerations',
      practices: [
        'Remember that published content is permanent',
        'Consider gas fees when choosing networks',
        'Publish during low-traffic times for lower fees',
        'Keep transaction confirmations for records'
      ]
    },
    {
      title: 'Audience Engagement',
      practices: [
        'Share your post on social media',
        'Engage with comments and feedback',
        'Use relevant tags and categories',
        'Build relationships with other creators'
      ]
    }
  ];

  const troubleshooting = [
    {
      issue: 'Transaction Failed',
      solution: 'Check your wallet balance and gas fees. Try again with higher gas limit.'
    },
    {
      issue: 'Wallet Not Connected',
      solution: 'Refresh the page and reconnect your wallet. Check if the correct network is selected.'
    },
    {
      issue: 'High Gas Fees',
      solution: 'Try publishing on a different network or wait for lower network congestion.'
    },
    {
      issue: 'Content Not Appearing',
      solution: 'Wait for blockchain confirmation. It may take a few minutes for content to appear.'
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
                <Edit3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Publishing Your First Post</h1>
                <p className="text-muted-foreground">Step-by-step publishing guide</p>
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
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12"
        >
          <p className="text-xl text-muted-foreground">
            Publishing your first blog post on the blockchain is an exciting milestone. This guide will walk you through 
            every step of the process, from writing your content to confirming the blockchain transaction.
          </p>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Alert className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
            <AlertCircle className="w-4 h-4 text-blue-600" />
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              <strong>Important:</strong> Content published on the blockchain is permanent and immutable. 
              Make sure to review your content carefully before publishing.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Publishing Steps */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold">Publishing Process</h2>
          {publishingSteps.map((step, index) => (
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
                      <CardTitle className="text-xl mb-2">
                        Step {index + 1}: {step.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Details */}
                  <div>
                    <h4 className="font-semibold mb-3">What to do:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary">💡 Pro Tips:</h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-muted-foreground">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Best Practices</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Troubleshooting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Common Issues & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {troubleshooting.map((item, index) => (
                  <div key={index} className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                      {item.issue}
                    </h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Publish?</h3>
              <p className="text-muted-foreground mb-6">
                Now that you understand the process, it's time to create and publish your first blockchain blog post!
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/docs/content-management">
                  <Button variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Next: Content Management
                  </Button>
                </Link>
                <Link href="/create-blog">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Start Writing Your Post
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

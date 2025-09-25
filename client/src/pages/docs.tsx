import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Code, 
  Rocket, 
  Shield, 
  Users, 
  Zap,
  ArrowRight,
  ExternalLink,
  Download,
  Github,
  FileText,
  Terminal,
  Layers,
  Globe
} from 'lucide-react';

export default function Docs() {
  const quickStartSteps = [
    {
      step: '01',
      title: 'Connect Your Wallet',
      description: 'Link your Ethereum-compatible wallet to start publishing on-chain',
      icon: Shield
    },
    {
      step: '02',
      title: 'Choose Your Network',
      description: 'Select from Ethereum, Base, BNB Chain, or Avalanche based on your needs',
      icon: Globe
    },
    {
      step: '03',
      title: 'Create Your First Post',
      description: 'Write and publish your content directly to the blockchain',
      icon: FileText
    },
    {
      step: '04',
      title: 'Share & Engage',
      description: 'Share your decentralized content with the world',
      icon: Users
    }
  ];

  const docSections = [
    {
      category: 'Getting Started',
      icon: Rocket,
      color: 'from-green-500 to-emerald-600',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', difficulty: 'Beginner' },
        { title: 'Wallet Setup', description: 'Connect and configure your Web3 wallet', difficulty: 'Beginner' },
        { title: 'Network Selection', description: 'Choosing the right blockchain network', difficulty: 'Beginner' },
        { title: 'Publishing Your First Post', description: 'Step-by-step publishing guide', difficulty: 'Beginner' }
      ]
    },
    {
      category: 'Developer Resources',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
      docs: [
        { title: 'API Reference', description: 'Complete API documentation and endpoints', difficulty: 'Advanced' },
        { title: 'Smart Contract Integration', description: 'Integrate with ChainBlog contracts', difficulty: 'Advanced' },
        { title: 'SDK Documentation', description: 'JavaScript/TypeScript SDK guide', difficulty: 'Intermediate' },
        { title: 'Custom Themes', description: 'Build and deploy custom blog themes', difficulty: 'Intermediate' }
      ]
    },
    {
      category: 'Platform Features',
      icon: Layers,
      color: 'from-purple-500 to-pink-600',
      docs: [
        { title: 'Content Management', description: 'Organize and manage your posts', difficulty: 'Beginner' },
        { title: 'Multi-Chain Publishing', description: 'Publish across different networks', difficulty: 'Intermediate' },
        { title: 'Content Monetization', description: 'Monetize your decentralized content', difficulty: 'Intermediate' },
        { title: 'Community Features', description: 'Engage with other creators', difficulty: 'Beginner' }
      ]
    },
    {
      category: 'Advanced Topics',
      icon: Terminal,
      color: 'from-orange-500 to-red-600',
      docs: [
        { title: 'Gas Optimization', description: 'Reduce transaction costs', difficulty: 'Advanced' },
        { title: 'IPFS Integration', description: 'Decentralized storage solutions', difficulty: 'Advanced' },
        { title: 'Custom Smart Contracts', description: 'Deploy your own publishing contracts', difficulty: 'Expert' },
        { title: 'Cross-Chain Bridging', description: 'Move content between networks', difficulty: 'Expert' }
      ]
    }
  ];

  const resources = [
    {
      title: 'GitHub Repository',
      description: 'Explore the open-source codebase',
      icon: Github,
      link: '#',
      external: true
    },
    {
      title: 'API Playground',
      description: 'Test API endpoints interactively',
      icon: Terminal,
      link: '#',
      external: true
    },
    {
      title: 'Community Discord',
      description: 'Join our developer community',
      icon: Users,
      link: '#',
      external: true
    },
    {
      title: 'Download SDK',
      description: 'Get the latest SDK package',
      icon: Download,
      link: '#',
      external: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-primary/5 to-transparent pointer-events-none" />
        
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-3xl"
          style={{ top: '15%', right: '15%' }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
              Documentation
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
                & Guides
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, publish, and thrive on the decentralized web
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold"
                data-testid="button-start-learning"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium"
                data-testid="button-view-api-docs"
              >
                <Code className="w-5 h-5 mr-2" />
                View API Docs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Quick Start</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with ChainBlog in just a few simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < quickStartSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Documentation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and references for all skill levels
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {docSections.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                className="space-y-6"
                initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{section.category}</h3>
                </div>

                <div className="space-y-4">
                  {section.docs.map((doc, docIndex) => (
                    <motion.div
                      key={doc.title}
                      className="group p-6 bg-card/50 border border-border/50 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (sectionIndex * 0.1) + (docIndex * 0.05) }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-muted-foreground mb-3">{doc.description}</p>
                          <Badge className={getDifficultyColor(doc.difficulty)}>
                            {doc.difficulty}
                          </Badge>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Developer Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tools and resources to accelerate your development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{resource.description}</p>
                    <div className="flex items-center justify-center text-primary font-medium">
                      <span className="mr-2">Access</span>
                      {resource.external ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join our community of developers building the future of decentralized publishing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-12 py-4 text-lg font-semibold"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-medium"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
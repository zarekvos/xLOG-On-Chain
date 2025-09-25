import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Lock, Link, Shield, Zap, Users, Globe, Code, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { supportedChains } from '@/lib/wagmi';

export default function Features() {
  const mainFeatures = [
    {
      icon: Lock,
      title: 'True Ownership',
      description: 'Your content lives on the blockchain forever. No platform can delete, modify, or restrict your posts.',
      benefits: ['Permanent storage', 'Censorship resistant', 'Platform independent']
    },
    {
      icon: Link,
      title: 'Multi-Chain Support',
      description: 'Publish on Ethereum, Base, BNB Chain, and Avalanche. Choose the network that fits your needs.',
      benefits: ['Cross-chain compatibility', 'Network flexibility', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Censorship Resistant',
      description: 'Decentralized storage means your voice can never be silenced. Write freely without fear.',
      benefits: ['Decentralized hosting', 'No single point of failure', 'Global accessibility']
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern Web3 infrastructure for optimal performance and user experience.',
      benefits: ['Instant publishing', 'Fast loading', 'Smooth interactions']
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with other creators and build meaningful relationships in the Web3 space.',
      benefits: ['Creator network', 'Collaboration tools', 'Community governance']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Publish to a global audience without geographical restrictions or platform limitations.',
      benefits: ['Worldwide access', 'No geo-blocking', 'Universal compatibility']
    }
  ];

  const technicalFeatures = [
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Open source with comprehensive APIs and tools for developers.',
      details: 'Built on modern Web3 stack with TypeScript, React, and blockchain integration.'
    },
    {
      icon: Layers,
      title: 'Modular Architecture',
      description: 'Extensible platform that grows with your needs.',
      details: 'Plugin system allows for custom functionality and third-party integrations.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent pointer-events-none" />
        
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
          style={{ top: '10%', right: '5%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
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
              Powerful
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge capabilities that make ChainBlog the future of decentralized content creation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, publish, and manage your decentralized content
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-foreground mb-6">Technical Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technology for developers and creators alike
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-10 h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 italic">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-12 text-center border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="supported-networks"
          >
            <h3 className="text-4xl font-bold text-foreground mb-8">Supported Networks</h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the blockchain network that best fits your needs and audience
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {supportedChains.map((chain, index) => (
                <motion.div
                  key={chain.id}
                  className="flex flex-col items-center space-y-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-12 h-12 ${chain.color} rounded-full`} />
                  <span className="font-semibold text-foreground">{chain.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of creators who have already embraced the future of decentralized blogging
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-12 py-4 text-lg font-semibold"
                data-testid="button-start-blogging-cta"
              >
                Start Blogging Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-lg font-medium"
                data-testid="button-view-docs-cta"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
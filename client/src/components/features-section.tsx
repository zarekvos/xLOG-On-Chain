import { motion } from 'framer-motion';
import { Lock, Link, Shield } from 'lucide-react';
import { supportedChains } from '@/lib/wagmi';

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: 'True Ownership',
      description: 'Your content lives on the blockchain forever. No platform can delete, modify, or restrict your posts.',
    },
    {
      icon: Link,
      title: 'Multi-Chain Support',
      description: 'Publish on Ethereum, Base, BNB Chain, and Avalanche. Choose the network that fits your needs.',
    },
    {
      icon: Shield,
      title: 'Censorship Resistant',
      description: 'Decentralized storage means your voice can never be silenced. Write freely without fear.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ChainBlog?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience true digital ownership with our decentralized blogging platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl border border-border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl p-8 text-center border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          data-testid="supported-networks"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Supported Networks</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {supportedChains.map((chain) => (
              <div key={chain.id} className="flex items-center space-x-3">
                <div className={`w-8 h-8 ${chain.color} rounded-full`} />
                <span className="text-muted-foreground font-medium">{chain.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

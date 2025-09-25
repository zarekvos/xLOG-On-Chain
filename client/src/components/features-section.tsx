import { motion } from 'framer-motion';
import { Lock, Link, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { supportedChains } from '@/lib/wagmi';

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: 'True Ownership',
      description: 'Your content lives on the blockchain forever. No platform can delete, modify, or restrict your posts.',
      gradient: 'from-emerald-500 to-teal-600',
      details: ['Permanent blockchain storage', 'Immutable content records', 'Zero platform dependency']
    },
    {
      icon: Link,
      title: 'Multi-Chain Support',
      description: 'Publish on Ethereum, Base, BNB Chain, and Avalanche. Choose the network that fits your needs.',
      gradient: 'from-blue-500 to-indigo-600',
      details: ['4+ EVM networks supported', 'Cross-chain compatibility', 'Flexible network selection']
    },
    {
      icon: Shield,
      title: 'Censorship Resistant',
      description: 'Decentralized storage means your voice can never be silenced. Write freely without fear.',
      gradient: 'from-purple-500 to-pink-600',
      details: ['Decentralized infrastructure', 'No single point of failure', 'Global content accessibility']
    },
  ];

  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"
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
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powerful Features</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> ChainBlog</span>?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience true digital ownership with our decentralized blogging platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              data-testid={`feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Feature details */}
                <div className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center text-sm text-muted-foreground/80"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                    >
                      <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                      {detail}
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-12 text-center border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="supported-networks"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          <div className="relative z-10">
            <motion.h3 
              className="text-4xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Supported 
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Networks</span>
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {supportedChains.map((chain, index) => (
                <motion.div
                  key={chain.id}
                  className="group flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 ${chain.color} rounded-full shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                    }}
                  />
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {chain.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

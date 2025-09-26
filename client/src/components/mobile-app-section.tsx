import { motion } from 'framer-motion';
import { AppStoreButton } from './app-store-button';
import { Smartphone, Download, Star, Users } from 'lucide-react';

export function MobileAppSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Write and publish blogs anywhere, anytime with our mobile-optimized interface.'
    },
    {
      icon: Download,
      title: 'Offline Support',
      description: 'Draft your posts offline and publish when you reconnect to the blockchain.'
    },
    {
      icon: Star,
      title: 'Native Experience',
      description: 'Built specifically for mobile with native iOS features and performance.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with other blockchain bloggers and discover trending content.'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-600/20">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Mobile App Available</span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Blog on the Go with 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> xLog Mobile</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Take your blockchain blogging experience mobile. Write, publish, and manage your decentralized content from anywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AppStoreButton size="lg" className="px-8 py-4 text-lg" />
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="font-semibold">4.8</span>
              <span className="mx-1">•</span>
              <span>1000+ downloads</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-blue-600/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Blog on the Blockchain?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Download the xLog mobile app and start publishing your thoughts permanently on the blockchain. 
              Available now on iOS App Store.
            </p>
            <AppStoreButton size="lg" className="px-12 py-4 text-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

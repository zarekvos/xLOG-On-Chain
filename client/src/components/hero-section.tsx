import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WalletConnect } from './wallet-connect';
import { Sparkles, ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const stats = [
    { value: '∞', label: 'Forever Storage' },
    { value: '4+', label: 'EVM Networks' },
    { value: '0%', label: 'Censorship' },
    { value: '100%', label: 'Your Content' },
  ];

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/8 to-blue-500/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-500/5 via-transparent to-green-500/5 pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Enhanced floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-primary/15 to-purple-500/10 rounded-full blur-3xl"
          style={{ top: '5%', right: '5%' }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/10 to-primary/15 rounded-full blur-2xl"
          style={{ bottom: '10%', left: '0%' }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-xl"
          style={{ top: '60%', right: '20%' }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Powered by Web3 Technology</span>
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Decentralized
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent relative"
              >
                Blogging
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-2xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block"
              >
                on EVM Chains
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Own your content forever. Publish on-chain with full control and censorship resistance across multiple EVM networks.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 px-12 py-6 text-xl font-bold rounded-2xl"
                data-testid="button-start-blogging"
              >
                Start Blogging
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-6 text-lg font-semibold rounded-2xl backdrop-blur-sm bg-white/10"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </Button>
            </motion.div>
            
            <div className="sm:hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <WalletConnect />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-3"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

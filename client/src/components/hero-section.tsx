import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WalletConnect } from './wallet-connect';

export function HeroSection() {
  const stats = [
    { value: '∞', label: 'Forever Storage' },
    { value: '4+', label: 'EVM Networks' },
    { value: '0%', label: 'Censorship' },
    { value: '100%', label: 'Your Content' },
  ];

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent pointer-events-none" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full"
          style={{ top: '10%', right: '10%' }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-full"
          style={{ bottom: '20%', left: '5%' }}
          animate={{
            y: [0, 15, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Decentralized
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Blogging
              </span>
              <br />
              on EVM Chains
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Own your content forever. Publish on-chain with full control and censorship resistance across multiple EVM networks.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold"
              data-testid="button-start-blogging"
            >
              Start Blogging
            </Button>
            <div className="sm:hidden md:block">
              <WalletConnect />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
              >
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

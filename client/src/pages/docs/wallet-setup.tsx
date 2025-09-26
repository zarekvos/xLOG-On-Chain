import { motion } from 'framer-motion';
import { ArrowLeft, Wallet, Shield, AlertTriangle, CheckCircle, ExternalLink, Download, Settings } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function WalletSetup() {
  // These wallets are supported by our RainbowKit configuration
  const wallets = [
    {
      name: 'MetaMask',
      icon: '/metamask-icon.svg',
      description: 'Most popular browser extension wallet',
      features: ['Browser extension', 'Mobile app', 'Hardware wallet support'],
      downloadUrl: 'https://metamask.io/download/',
      recommended: true
    },
    {
      name: 'Rainbow',
      icon: '/rainbow-icon.svg',
      description: 'Beautiful mobile-first wallet by RainbowKit creators',
      features: ['Mobile app', 'NFT support', 'DeFi integration', 'Beautiful UI'],
      downloadUrl: 'https://rainbow.me/',
      recommended: true
    },
    {
      name: 'WalletConnect',
      icon: '/walletconnect-icon.svg',
      description: 'Connect with 300+ wallets',
      features: ['Mobile wallets', 'Hardware wallets', 'DeFi integration'],
      downloadUrl: 'https://walletconnect.com/',
      recommended: false
    },
    {
      name: 'Coinbase Wallet',
      icon: '/coinbase-icon.svg',
      description: 'User-friendly with built-in DApp browser',
      features: ['Browser extension', 'Mobile app', 'Easy onboarding'],
      downloadUrl: 'https://wallet.coinbase.com/',
      recommended: false
    }
  ];

  const setupSteps = [
    {
      title: 'Choose a Wallet',
      description: 'Select a Web3 wallet that suits your needs',
      details: 'We recommend MetaMask for beginners due to its ease of use and wide compatibility.'
    },
    {
      title: 'Install the Wallet',
      description: 'Download and install your chosen wallet',
      details: 'Most wallets offer browser extensions and mobile apps. Choose based on your preference.'
    },
    {
      title: 'Create or Import Wallet',
      description: 'Set up a new wallet or import an existing one',
      details: 'If you\'re new, create a new wallet. If you have an existing wallet, import it using your seed phrase.'
    },
    {
      title: 'Secure Your Wallet',
      description: 'Write down your seed phrase and set a strong password',
      details: 'Your seed phrase is your master key. Store it safely offline and never share it with anyone.'
    },
    {
      title: 'Add Networks',
      description: 'Add the blockchain networks you want to use',
      details: 'xLog supports Ethereum, Base, BNB Chain, and Avalanche. Add these networks to your wallet.'
    },
    {
      title: 'Connect to xLog',
      description: 'Connect your wallet to the xLog platform',
      details: 'Click "Connect Wallet" on xLog and select your wallet to establish the connection.'
    }
  ];

  const securityTips = [
    'Never share your private key or seed phrase with anyone',
    'Always verify URLs before connecting your wallet',
    'Use hardware wallets for large amounts',
    'Keep your wallet software updated',
    'Enable two-factor authentication when available',
    'Be cautious of phishing attempts'
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
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Wallet Setup</h1>
                <p className="text-muted-foreground">Connect and configure your Web3 wallet</p>
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
            A Web3 wallet is your gateway to the decentralized web. It allows you to interact with blockchain networks, 
            manage your digital assets, and publish content on xLog.
          </p>
        </motion.div>

        {/* Security Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Alert className="border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
            <AlertTriangle className="w-4 h-4 text-orange-600" />
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Security First:</strong> Your wallet holds your digital assets. Always keep your seed phrase secure 
              and never share it with anyone. xLog will never ask for your private keys.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Wallet Options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Choose Your Wallet</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {wallets.map((wallet, index) => (
              <motion.div
                key={wallet.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className={`relative ${wallet.recommended ? 'border-primary shadow-md' : ''}`}>
                  {wallet.recommended && (
                    <Badge className="absolute -top-2 -right-2 bg-primary">
                      Recommended
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img 
                          src={wallet.icon} 
                          alt={`${wallet.name} icon`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to a generic wallet icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <Wallet className="w-8 h-8 text-muted-foreground hidden" />
                      </div>
                      <div>
                        <CardTitle>{wallet.name}</CardTitle>
                        <CardDescription>{wallet.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {wallet.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className="w-full"
                      variant={wallet.recommended ? "default" : "outline"}
                    >
                      <a href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download {wallet.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Setup Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Setup Process</h2>
          <div className="space-y-6">
            {setupSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-2">{step.description}</p>
                        <p className="text-sm text-muted-foreground">{step.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                <CardTitle className="text-green-800 dark:text-green-200">Security Best Practices</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {securityTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-green-800 dark:text-green-200">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Wallet Setup Complete?</h3>
              <p className="text-muted-foreground mb-6">
                Once your wallet is set up, you can connect it to xLog and start publishing your content on the blockchain.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/docs/network-selection">
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Next: Network Selection
                  </Button>
                </Link>
                <Link href="/create-blog">
                  <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                    Connect Wallet & Start Writing
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

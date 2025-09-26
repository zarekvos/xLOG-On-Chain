import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAlert } from '@/components/ui/alert-service';

export default function AlertDemo() {
  const alert = useAlert();

  const testAlerts = () => {
    // Test basic alerts
    setTimeout(() => alert.success('This is a success message'), 100);
    setTimeout(() => alert.error('This is an error message'), 600);
    setTimeout(() => alert.warning('This is a warning message'), 1100);
    setTimeout(() => alert.info('This is an info message'), 1600);

    // Test blockchain specific alerts
    setTimeout(() => alert.blockchain.walletConnected('0x1234567890abcdef1234567890abcdef12345678'), 2100);
    setTimeout(() => alert.blockchain.transactionPending('0xabcdef1234567890'), 2600);
    setTimeout(() => alert.blockchain.networkSwitched('Plasma Chain'), 3100);
    setTimeout(() => alert.blockchain.blogPublished('Ethereum'), 3600);
  };

  const testAdvancedAlert = () => {
    alert.success('Blog post created successfully!', {
      title: 'Success',
      description: 'Your post has been published to the blockchain',
      duration: 8000,
      action: {
        label: 'View Post',
        onClick: () => alert.info('Navigating to post...')
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Professional Alert System Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              Test the new professional alert notifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => alert.success('Operation completed successfully!')}
                  className="w-full"
                  variant="default"
                >
                  Success Alert
                </Button>
                
                <Button 
                  onClick={() => alert.error('Something went wrong!')}
                  className="w-full"
                  variant="destructive"
                >
                  Error Alert
                </Button>
                
                <Button 
                  onClick={() => alert.warning('Please check your input')}
                  className="w-full"
                  variant="outline"
                >
                  Warning Alert
                </Button>
                
                <Button 
                  onClick={() => alert.info('Here is some useful information')}
                  className="w-full"
                  variant="secondary"
                >
                  Info Alert
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => alert.blockchain.walletConnected('0x1234567890abcdef1234567890abcdef12345678')}
                  className="w-full"
                >
                  Wallet Connected
                </Button>
                
                <Button 
                  onClick={() => alert.blockchain.transactionPending('0xabcdef1234567890')}
                  className="w-full"
                >
                  Transaction Pending
                </Button>
                
                <Button 
                  onClick={() => alert.blockchain.transactionSuccess('0xabcdef1234567890', {
                    viewUrl: 'https://etherscan.io/tx/0xabcdef1234567890'
                  })}
                  className="w-full"
                >
                  Transaction Success
                </Button>
                
                <Button 
                  onClick={() => alert.blockchain.networkSwitched('Plasma Chain')}
                  className="w-full"
                >
                  Network Switched
                </Button>

                <Button 
                  onClick={() => alert.blockchain.blogPublished('Ethereum')}
                  className="w-full"
                >
                  Blog Published
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={testAdvancedAlert}
                  className="w-full"
                >
                  Alert with Action Button
                </Button>
                
                <Button 
                  onClick={testAlerts}
                  className="w-full"
                  variant="outline"
                >
                  Test All Alerts (Sequential)
                </Button>
                
                <Button 
                  onClick={() => alert.error('Validation failed', {
                    title: 'Form Error',
                    description: 'Please fill in all required fields before submitting.',
                    duration: 10000
                  })}
                  className="w-full"
                  variant="destructive"
                >
                  Custom Duration Alert
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real Use Cases</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={() => {
                    alert.info('Connecting to wallet...', { title: 'Please Wait' });
                    setTimeout(() => alert.blockchain.walletConnected('0x742d35Cc6634C0532925a3b8D4C05E4E8b9c1234'), 2000);
                  }}
                  className="w-full"
                >
                  Simulate Wallet Connection
                </Button>
                
                <Button 
                  onClick={() => {
                    alert.blockchain.transactionPending('0x1234abcd');
                    setTimeout(() => alert.blockchain.transactionSuccess('0x1234abcd', {
                      viewUrl: 'https://polygonscan.com/tx/0x1234abcd'
                    }), 3000);
                  }}
                  className="w-full"
                >
                  Simulate Transaction Flow
                </Button>
                
                <Button 
                  onClick={() => {
                    alert.warning('Please connect your wallet first', {
                      action: {
                        label: 'Connect',
                        onClick: () => alert.info('Opening wallet connection...')
                      }
                    });
                  }}
                  className="w-full"
                >
                  Simulate Wallet Required
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

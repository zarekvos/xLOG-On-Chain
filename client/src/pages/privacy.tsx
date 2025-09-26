import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-center">Privacy Policy</CardTitle>
                <p className="text-center text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    xLog operates as a decentralized platform. We collect minimal personal information:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Wallet addresses for blockchain interactions</li>
                    <li>Content you choose to publish on-chain</li>
                    <li>Basic usage analytics to improve our service</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information is used to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Enable blockchain publishing functionality</li>
                    <li>Provide customer support</li>
                    <li>Improve platform performance and user experience</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your blog content is stored permanently on the blockchain. We implement industry-standard 
                    security measures to protect any off-chain data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy, contact us at: privacy@xlog.app
                  </p>
                </section>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

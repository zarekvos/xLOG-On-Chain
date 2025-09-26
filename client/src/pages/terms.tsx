import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
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
                <CardTitle className="text-4xl font-bold text-center">Terms of Service</CardTitle>
                <p className="text-center text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using xLog, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Permission is granted to temporarily use xLog for personal, non-commercial 
                    transitory viewing only. This is the grant of a license, not a transfer of title.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>You may not modify or copy the materials</li>
                    <li>You may not use the materials for commercial purposes</li>
                    <li>You may not reverse engineer any software contained in the platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Content Responsibility</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You are solely responsible for the content you publish on the blockchain through 
                    our platform. Content published on-chain is permanent and immutable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Blockchain Interaction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By using xLog, you acknowledge that blockchain transactions are irreversible 
                    and that you bear full responsibility for transaction fees and outcomes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about these Terms of Service, contact us at: legal@xlog.app
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

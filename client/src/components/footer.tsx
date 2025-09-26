import { motion } from 'framer-motion';
import { Github, Twitter, MessageCircle, Link as ChainIcon, FileText, LayoutDashboard, Smartphone, Apple, Code2, Zap } from 'lucide-react';
import { Link } from 'wouter';
const logoPath = '/xlog.png';

export function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/features', icon: Zap, internal: true },
      { name: 'Blogs', href: '/blogs', icon: ChainIcon, internal: true },
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, internal: true },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs', icon: FileText, internal: true },
      { name: 'API Reference', href: '/api-references', icon: Code2, internal: true },
      { name: 'Support', href: 'mailto:support@xlog.app', icon: MessageCircle, internal: false },
    ],
    Community: [
      { name: 'GitHub', href: 'https://github.com/zarekvos', icon: Github, internal: false },
      { name: 'Twitter', href: 'https://x.com/zarekvos', icon: Twitter, internal: false },

    ],
    Mobile: [
      { name: 'iOS App Store', href: 'https://apps.apple.com/id/app/xlog-on-chain-blogging/id6449499296', icon: Apple, internal: false },
      { name: 'Android (Coming Soon)', icon: Smartphone, className: "rounded-xl cursor-not-allowed", internal: false, disabled: true },
    ],
  };

  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile App Promotion Section - HIDDEN (uncomment to show later) */}
        {/*
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Take xLog Mobile</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Write and publish blockchain blogs on the go with the xLog mobile app. Available now on iOS App Store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/id/app/xlog-on-chain-blogging/id6449499296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-2xl mr-2"></span>
              Download for iOS
            </a>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-gray-300 font-semibold rounded-xl cursor-not-allowed">
              <span className="text-2xl mr-2"></span>
              Android Coming Soon
            </div>
          </div>
        </motion.div>
        */}

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoPath} 
                alt="xLog Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">xLog</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The future of decentralized blogging. Own your content forever on the blockchain.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{category}</h4>
              <div className="space-y-2">
                {links.map((link) => {
                  const linkContent = (
                    <>
                      {'icon' in link && link.icon && <link.icon className="h-4 w-4" />}
                      <span>{link.name}</span>
                    </>
                  );

                  if ('disabled' in link && link.disabled) {
                    return (
                      <div
                        key={link.name}
                        className={`flex items-center space-x-2 text-gray-500 ${'className' in link ? link.className : ''}`}
                        data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                      >
                        {linkContent}
                      </div>
                    );
                  }

                  return link.internal ? (
                    <Link
                      key={link.name}
                      href={link.href!}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {linkContent}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {linkContent}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-400 text-sm">
                © 2024 xLog. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Made by <span className="text-primary font-semibold">zarekvos</span>
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    Resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Support', href: '#support' },
    ],
    Community: [
      { name: 'GitHub', href: 'https://github.com', icon: Github },
      { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
      { name: 'Discord', href: 'https://discord.com' },
    ],
  };

  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">ChainBlog</span>
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
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {'icon' in link && link.icon && <link.icon className="h-4 w-4" />}
                    <span>{link.name}</span>
                  </a>
                ))}
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
            <p className="text-gray-400 text-sm">
              © 2024 ChainBlog. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

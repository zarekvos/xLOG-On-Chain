import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { WalletConnect } from './wallet-connect';
import { Button } from '@/components/ui/button';
import { Menu, X, Link as ChainIcon, FileText, LayoutDashboard, Zap } from 'lucide-react';
const logoPath = '/xlog.png';

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/features', label: 'Features', icon: Zap },
    { href: '/blogs', label: 'Blogs', icon: ChainIcon },
    { href: '/docs', label: 'Docs', icon: FileText },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-white/80 backdrop-blur-md border-b border-border'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <img 
              src={logoPath} 
              alt="xLog Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold text-foreground">xLog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ${
                    location === link.href ? 'text-foreground font-semibold' : ''
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Wallet Connect */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://apps.apple.com/id/app/xlog-on-chain-blogging/id6449499296"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get App
            </a>
            <WalletConnect />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground transition-colors ${
                      location === link.href ? 'text-foreground font-semibold' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-${link.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-3 py-2 space-y-3">
                <a
                  href="https://apps.apple.com/id/app/xlog-on-chain-blogging/id6449499296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get App
                </a>
                <WalletConnect />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

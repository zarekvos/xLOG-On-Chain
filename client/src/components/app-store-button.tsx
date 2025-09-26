import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AppStoreButtonProps {
  variant?: 'default' | 'outline' | 'gradient';
  size?: 'sm' | 'default' | 'lg';
  showIcon?: boolean;
  className?: string;
}

export function AppStoreButton({ 
  variant = 'gradient', 
  size = 'default', 
  showIcon = true,
  className = '' 
}: AppStoreButtonProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href="https://apps.apple.com/id/app/xlog-on-chain-blogging/id6449499296"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size={size}
          className={`${getButtonStyles()} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-semibold ${className}`}
        >
          Get Mobile App
        </Button>
      </a>
    </motion.div>
  );
}

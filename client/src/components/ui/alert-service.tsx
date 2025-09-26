import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Professional Alert Service
class AlertService {
  private toastFunction: any;

  setToastFunction(toastFn: any) {
    this.toastFunction = toastFn;
  }

  private getAlertConfig(type: AlertType) {
    const configs = {
      success: {
        icon: CheckCircle,
        variant: 'default' as const,
        className: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200',
        iconColor: 'text-green-600 dark:text-green-400'
      },
      error: {
        icon: XCircle, 
        variant: 'destructive' as const,
        className: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200',
        iconColor: 'text-red-600 dark:text-red-400'
      },
      warning: {
        icon: AlertTriangle,
        variant: 'default' as const,
        className: 'border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-200',
        iconColor: 'text-orange-600 dark:text-orange-400'
      },
      info: {
        icon: Info,
        variant: 'default' as const,
        className: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200',
        iconColor: 'text-blue-600 dark:text-blue-400'
      }
    };
    return configs[type];
  }

  show(type: AlertType, message: string, options: AlertOptions = {}) {
    if (!this.toastFunction) {
      console.warn('Toast function not initialized. Using fallback alert.');
      alert(`[${type.toUpperCase()}] ${options.title || ''}: ${message}`);
      return;
    }

    const config = this.getAlertConfig(type);
    const Icon = config.icon;

    const toastContent = (
      <div className={`flex items-start gap-3 ${config.className} p-4 rounded-lg border`}>
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.iconColor}`} />
        <div className="flex-1 min-w-0">
          {options.title && (
            <div className="font-semibold text-sm mb-1">
              {options.title}
            </div>
          )}
          <div className="text-sm opacity-90">
            {message}
          </div>
        </div>
      </div>
    );

    this.toastFunction({
      title: toastContent,
      duration: options.duration || 5000,
      variant: config.variant,
      action: options.action ? {
        label: options.action.label,
        onClick: options.action.onClick
      } : undefined
    });
  }

  success(message: string, options?: AlertOptions) {
    this.show('success', message, { title: 'Success', ...options });
  }

  error(message: string, options?: AlertOptions) {
    this.show('error', message, { title: 'Error', ...options });
  }

  warning(message: string, options?: AlertOptions) {
    this.show('warning', message, { title: 'Warning', ...options });
  }

  info(message: string, options?: AlertOptions) {
    this.show('info', message, { title: 'Information', ...options });
  }

  // Method khusus untuk blockchain notifications
  blockchain = {
    transactionPending: (txHash?: string) => {
      this.info('Transaction submitted to blockchain', {
        title: 'Transaction Pending',
        description: txHash ? `Transaction Hash: ${txHash.slice(0, 10)}...` : undefined,
        duration: 8000
      });
    },

    transactionSuccess: (txHash?: string, options?: { viewUrl?: string }) => {
      this.success('Transaction confirmed successfully!', {
        title: 'Transaction Confirmed',
        description: txHash ? `Hash: ${txHash.slice(0, 10)}...` : undefined,
        duration: 10000,
        action: options?.viewUrl ? {
          label: 'View on Explorer',
          onClick: () => window.open(options.viewUrl, '_blank')
        } : undefined
      });
    },

    transactionFailed: (reason?: string) => {
      this.error(reason || 'Transaction failed to execute', {
        title: 'Transaction Failed',
        duration: 10000
      });
    },

    walletConnected: (address: string) => {
      this.success(`Connected to ${address.slice(0, 6)}...${address.slice(-4)}`, {
        title: 'Wallet Connected',
        duration: 5000
      });
    },

    walletDisconnected: () => {
      this.info('Wallet has been disconnected', {
        title: 'Wallet Disconnected',
        duration: 3000
      });
    },

    networkSwitched: (networkName: string) => {
      this.success(`Switched to ${networkName}`, {
        title: 'Network Changed',
        duration: 4000
      });
    },

    blogPublished: (networkName?: string) => {
      this.success(`Blog post published successfully!${networkName ? ` on ${networkName}` : ''}`, {
        title: 'Blog Published',
        duration: 6000
      });
    }
  };
}

// Create global instance
export const alert = new AlertService();

// Hook untuk menggunakan alert dalam komponen React
export function useAlert() {
  const { toast } = useToast();

  React.useEffect(() => {
    alert.setToastFunction(toast);
  }, [toast]);

  return alert;
}

// Provider component untuk inisialisasi global
export function AlertProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();

  React.useEffect(() => {
    alert.setToastFunction(toast);
  }, [toast]);

  return <>{children}</>;
}

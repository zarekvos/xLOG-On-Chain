import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CreatorDashboard } from '@/components/creator-dashboard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <CreatorDashboard />
      </div>
      <Footer />
    </div>
  );
}
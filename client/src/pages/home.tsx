import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { BlogSection } from '@/components/blog-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

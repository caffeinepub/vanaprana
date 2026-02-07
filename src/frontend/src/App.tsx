import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { HeroSection } from './components/sections/HeroSection';
import { BrandStorySection } from './components/sections/BrandStorySection';
import { ProductsSection } from './components/sections/ProductsSection';
import { SustainabilitySection } from './components/sections/SustainabilitySection';
import { B2BSection } from './components/sections/B2BSection';
import { ContactSection } from './components/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <BrandStorySection />
        <ProductsSection />
        <SustainabilitySection />
        <B2BSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}

export default App;

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/assets/generated/vanaprana-hero.dim_1600x900.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Vanaprana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Forest Breath
          </p>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Sustainable jute carry bags handcrafted in India, exported to Portugal. Reducing
            landfill waste with vital eco-life force.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={scrollToContact} className="text-base">
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-base"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

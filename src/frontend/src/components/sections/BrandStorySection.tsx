import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Globe } from 'lucide-react';

export function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground">
            Vanaprana — a rare term meaning "Forest Breath" — embodies the vital eco-life force
            that connects us to nature.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Rooted in Nature</h3>
              <p className="text-sm text-muted-foreground">
                Our jute bags are crafted from natural fibers, celebrating the earth's renewable
                resources and reducing plastic waste.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Handcrafted with Care</h3>
              <p className="text-sm text-muted-foreground">
                Each bag is handcrafted in India by skilled artisans, preserving traditional
                techniques while supporting local communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Impact</h3>
              <p className="text-sm text-muted-foreground">
                Exported to Portugal and beyond, our bags help reduce landfill waste and promote
                sustainable living worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-base text-foreground/80 leading-relaxed">
            Vanaprana represents more than just a product — it's a commitment to sustainable
            practices, ethical craftsmanship, and a healthier planet. Every bag carries the breath
            of the forest, connecting consumers to the vital eco-life force that sustains us all.
          </p>
        </div>
      </div>
    </section>
  );
}

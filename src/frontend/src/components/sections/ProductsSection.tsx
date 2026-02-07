import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export function ProductsSection() {
  const features = [
    'Biodegradable & compostable',
    'Durable & long-lasting',
    'Handcrafted in India',
    'Exported to Portugal',
    'Multiple sizes available',
    'Custom branding options',
  ];

  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Made in India
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Jute Carry Bags</h2>
          <p className="text-lg text-muted-foreground">
            Premium quality jute bags designed for durability, style, and environmental
            responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img
              src="/assets/generated/vanaprana-products.dim_1400x900.png"
              alt="Vanaprana jute carry bags"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Product Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-muted/30 border-border/50">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Perfect For</h4>
                <p className="text-sm text-muted-foreground">
                  Retail stores, grocery shops, promotional events, corporate gifting, eco-conscious
                  consumers, and sustainable lifestyle brands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

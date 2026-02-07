import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, TrendingUp, Shield, FileText } from 'lucide-react';

export function B2BSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const benefits = [
    {
      icon: Package,
      title: 'Flexible Order Volumes',
      description:
        'We start with LCL (Less than Container Load) shipments to manage risk, transitioning to FCL (Full Container Load) as your volume grows.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description:
        'Direct from manufacturer pricing with transparent cost structures. Volume discounts available for larger orders.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description:
        'Rigorous quality control at every stage. Each batch is inspected to meet EU standards before export.',
    },
    {
      icon: FileText,
      title: 'Marketing Support',
      description:
        'Product narratives, high-quality visuals, and selling points to help you market effectively to your customers.',
    },
  ];

  return (
    <section id="b2b" className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">
            For Business Partners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For Distributors & Retailers
          </h2>
          <p className="text-lg text-muted-foreground">
            Partner with Vanaprana to bring sustainable jute bags to your customers. We support
            your success with quality products and reliable service.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Partner With Us</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">Our Three Core Pillars</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold mb-2">Sustainability</h4>
                    <p className="text-sm text-muted-foreground">
                      Eco-friendly materials that reduce environmental impact and appeal to
                      conscious consumers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Durability</h4>
                    <p className="text-sm text-muted-foreground">
                      Long-lasting quality that ensures customer satisfaction and repeat purchases.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Handcrafted Value</h4>
                    <p className="text-sm text-muted-foreground">
                      Authentic artisan craftsmanship that tells a compelling story to your
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Request a quote, order samples, or discuss a pilot order. We're here to support your
            business with consistent quality and reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToContact}>
              Request Quote
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Order Samples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

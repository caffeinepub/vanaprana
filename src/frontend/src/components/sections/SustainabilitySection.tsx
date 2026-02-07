import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Recycle, Award, Users, Sprout } from 'lucide-react';

export function SustainabilitySection() {
  const pillars = [
    {
      icon: Sprout,
      title: 'Sustainability',
      description:
        'Jute is a renewable, biodegradable natural fiber that decomposes without harming the environment. Our bags help reduce plastic waste and landfill burden.',
    },
    {
      icon: Award,
      title: 'Durability',
      description:
        'Built to last, our jute bags withstand repeated use and heavy loads. Quality craftsmanship ensures longevity, making them a practical alternative to single-use bags.',
    },
    {
      icon: Users,
      title: 'Handcrafted Value',
      description:
        'Each bag is handcrafted by skilled artisans in India, preserving traditional techniques and supporting local communities with fair employment.',
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainability & Credibility
          </h2>
          <p className="text-lg text-muted-foreground">
            Our commitment to the planet, quality, and people defines everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pillars.map((pillar, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12 max-w-4xl mx-auto" />

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Credibility & Compliance
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Recycle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Eco-Certified Materials</h4>
                    <p className="text-sm text-muted-foreground">
                      Our jute is sourced from certified sustainable farms, ensuring minimal
                      environmental impact and ethical production practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">EU Compliance Ready</h4>
                    <p className="text-sm text-muted-foreground">
                      All products meet European Union standards for quality, safety, and
                      sustainability, ensuring smooth import and retail distribution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { InquiryForm } from '../InquiryForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a distributor, retailer, or interested consumer, we'd love to hear from
            you. Send us your inquiry and we'll respond promptly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

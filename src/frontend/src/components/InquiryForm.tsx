import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useSubmitInquiry } from '../hooks/useQueries';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  buyerType: 'business' | 'consumer';
  message: string;
  consent: boolean;
};

export function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      buyerType: 'business',
      consent: false,
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const submitInquiry = useSubmitInquiry();
  const consent = watch('consent');

  const onSubmit = async (data: FormData) => {
    if (!data.consent) {
      toast.error('Please accept the consent to proceed');
      return;
    }

    try {
      await submitInquiry.mutateAsync({
        name: data.name,
        email: data.email,
        company: data.company || null,
        buyerType: data.buyerType,
        message: data.message,
        consent: data.consent,
      });

      setIsSuccess(true);
      reset();
      toast.success('Thank you! Your inquiry has been submitted successfully.');

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your inquiry has been submitted successfully. We'll get back to you soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Us an Inquiry</CardTitle>
        <CardDescription>
          Fill out the form below and we'll respond to your inquiry as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              {...register('company')}
              placeholder="Your company name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="buyerType">
              I am a <span className="text-destructive">*</span>
            </Label>
            <Select
              defaultValue="business"
              onValueChange={(value) => setValue('buyerType', value as 'business' | 'consumer')}
            >
              <SelectTrigger id="buyerType">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business (Distributor/Retailer)</SelectItem>
                <SelectItem value="consumer">Consumer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              placeholder="Tell us about your inquiry, order requirements, or questions..."
              rows={5}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setValue('consent', checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
              I consent to Vanaprana storing and processing my information to respond to this
              inquiry. <span className="text-destructive">*</span>
            </Label>
          </div>
          {errors.consent && (
            <p className="text-sm text-destructive">{errors.consent.message}</p>
          )}

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={submitInquiry.isPending}
          >
            {submitInquiry.isPending ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

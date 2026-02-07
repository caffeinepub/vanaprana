import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { BuyerType } from '../backend';

type SubmitInquiryParams = {
  name: string;
  email: string;
  company: string | null;
  buyerType: 'business' | 'consumer';
  message: string;
  consent: boolean;
};

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitInquiryParams) => {
      if (!actor) throw new Error('Actor not available');

      const buyerType: BuyerType =
        params.buyerType === 'business' ? BuyerType.business : BuyerType.consumer;

      await actor.submitForm(
        params.name,
        params.email,
        params.company,
        buyerType,
        params.message,
        params.consent
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

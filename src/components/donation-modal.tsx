"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, Smartphone } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { initiateMpesaPaymentAction } from "@/app/donate/actions";

interface DonationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
}

const phoneRegex = /^(07|2547)\d{8}$/;
const formSchema = z.object({
  amount: z.number().min(10, "Amount must be at least KES 10."),
  phone: z.string().regex(phoneRegex, "Please enter a valid M-Pesa number (e.g., 0712345678)."),
});

export function DonationModal({ isOpen, onOpenChange, amount }: DonationModalProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: amount,
      phone: "",
    },
  });
  
  // Update form's amount when the prop changes
  React.useEffect(() => {
    form.setValue('amount', amount);
    if (amount > 0) {
      form.clearErrors('amount');
    }
  }, [amount, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const result = await initiateMpesaPaymentAction(values);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Request Sent!",
        description: result.message,
      });
      onOpenChange(false);
      form.reset({ amount: 0, phone: "" });
    } else {
      toast({
        variant: "destructive",
        title: "Payment Failed",
        description: result.error,
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Donate via M-Pesa</DialogTitle>
          <DialogDescription>
            Enter your details below. A prompt will be sent to your phone to complete the payment.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Amount (KES)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number"
                      placeholder="Enter amount"
                      {...field}
                      onChange={event => field.onChange(+event.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your M-Pesa Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                       <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <Input placeholder="e.g. 0712345678" {...field} className="pl-10" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" className="w-full" disabled={isLoading || form.watch('amount') < 10}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Donate KES {form.watch('amount') || 0}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

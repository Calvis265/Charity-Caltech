"use server";

import { z } from "zod";

// Basic validation for Kenyan phone numbers (e.g., 07... or 2547...)
const phoneRegex = /^(07|2547)\d{8}$/;

const donationSchema = z.object({
  amount: z.number().min(10, { message: "Amount must be at least KES 10." }),
  phone: z.string().regex(phoneRegex, { message: "Please enter a valid Kenyan M-Pesa number." }),
});

type DonationResult = 
  | { success: true; message: string }
  | { success: false; error: string };

export async function initiateMpesaPaymentAction(
  values: unknown
): Promise<DonationResult> {
  console.log("Validating donation details...", values);
  const validation = donationSchema.safeParse(values);

  if (!validation.success) {
    const errorMessage = validation.error.issues.map(issue => issue.message).join(', ');
    console.error("Validation failed:", errorMessage);
    return { success: false, error: errorMessage || "Invalid data provided." };
  }
  
  const { amount, phone } = validation.data;
  console.log(`Initiating M-Pesa payment for KES ${amount} to ${phone}`);

  // ========================================================================
  // M-PESA API INTEGRATION (PLACEHOLDER)
  // ========================================================================
  // This is where you would call the M-Pesa Daraja API to initiate an STK Push.
  // You will need to get your credentials (Consumer Key, Consumer Secret, Passkey)
  // from the Safaricom Developer Portal and store them securely as environment variables.
  //
  // All funds will be sent to the M-Pesa account associated with your Short Code.
  //
  // Example steps:
  // 1. Get an access token from the M-Pesa API.
  // 2. Make a POST request to the STK Push endpoint with the transaction details.
  //    - BusinessShortCode: Your PayBill or Till number (e.g., 174379)
  //    - Amount: `amount`
  //    - PartyA: `phone` (the customer's number, e.g., 2547XXXXXXXX)
  //    - PartyB: Your PayBill or Till number again. For PayBill, this is the same as BusinessShortCode.
  //    - PhoneNumber: `phone` (the customer's number, e.g., 2547XXXXXXXX)
  //    - CallBackURL: A public URL endpoint you create to receive transaction status updates.
  //    - AccountReference: A reference for the transaction (e.g., "CaltechDonation")
  //    - TransactionDesc: A short description (e.g., "Donation to Caltech")
  //
  // NOTE: The number 0757056917 you provided is a personal number. For STK Push,
  // you typically need a business PayBill or Till Number. If you intend to use a personal
  // number, you might need a different M-Pesa API product or setup.
  // ========================================================================

  // Simulate network delay for API call
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    // In a real scenario, you would check the response from the M-Pesa API.
    // If the API call is successful, it means the push notification has been
    // sent to the user's phone.
    console.log("Successfully initiated STK Push. Waiting for user to complete payment.");
    
    return { 
      success: true, 
      message: "Success! A payment request has been sent to your phone. Please enter your M-Pesa PIN to complete the donation." 
    };

  } catch (error) {
    console.error("M-Pesa API Error:", error);
    return { 
      success: false, 
      error: "Could not initiate payment. Please try again later." 
    };
  }
}

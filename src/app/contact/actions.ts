'use server';

import {z} from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {message: 'Name must be at least 2 characters.'}),
  email: z.string().email({message: 'Please enter a valid email.'}),
  subject: z
    .string()
    .min(5, {message: 'Subject must be at least 5 characters.'}),
  message: z
    .string()
    .min(10, {message: 'Message must be at least 10 characters.'}),
});

type SendMessageResult =
  | {success: true; message: string}
  | {success: false; error: string};

export async function sendContactMessageAction(
  values: unknown
): Promise<SendMessageResult> {
  const validation = formSchema.safeParse(values);

  if (!validation.success) {
    const errorMessage = validation.error.issues
      .map(issue => issue.message)
      .join(', ');
    return {success: false, error: errorMessage || 'Invalid data provided.'};
  }

  const {name, email, subject, message} = validation.data;

  // In a real application, you would send an email here using a service.
  // For now, we log the data to the server console as a placeholder.
  console.log('--- New Contact Message ---');
  console.log(`From: ${name} <${email}>`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('--------------------------');

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    // Placeholder for actual email sending logic which might fail
    return {success: true, message: 'Your message has been sent successfully!'};
  } catch (e) {
    console.error(e);
    const errorMessage =
      e instanceof Error ? e.message : 'An unknown error occurred.';
    return {
      success: false,
      error: `An unexpected error occurred: ${errorMessage}`,
    };
  }
}

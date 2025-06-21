
'use server';

import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const loginSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }),
    password: z.string().min(1, { message: 'Password is required.' }),
});

type AuthResult = {
  success: boolean;
  message: string;
};

export async function signUpAction(values: unknown): Promise<AuthResult> {
  const validation = signUpSchema.safeParse(values);

  if (!validation.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would save the user to a database.
  // Here, we're just simulating a successful sign-up.
  console.log('New user signed up:', validation.data.email);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Sign-up successful! You can now log in.' };
}

export async function loginAction(values: unknown): Promise<AuthResult> {
    const validation = loginSchema.safeParse(values);

    if (!validation.success) {
        return { success: false, message: 'Invalid data provided.' };
    }

    const { email, password } = validation.data;

    // In a real application, you would verify credentials against a database.
    // Here, we're just simulating a successful login for any input.
    console.log('User logged in:', email);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // A real implementation would check the password, etc.
    if (password) {
        return { success: true, message: 'Login successful!' };
    }

    return { success: false, message: 'Invalid email or password.' };
}

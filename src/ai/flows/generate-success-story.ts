'use server';

/**
 * @fileOverview AI flow to generate uplifting student success stories based on student data and program outcomes.
 *
 * - generateSuccessStory - A function that generates a success story.
 * - GenerateSuccessStoryInput - The input type for the generateSuccessStory function.
 * - GenerateSuccessStoryOutput - The return type for the generateSuccessStory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSuccessStoryInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  programName: z.string().describe('The name of the program the student participated in.'),
  outcome: z.string().describe('A description of the positive outcome for the student as a result of the program.'),
});
export type GenerateSuccessStoryInput = z.infer<typeof GenerateSuccessStoryInputSchema>;

const GenerateSuccessStoryOutputSchema = z.object({
  successStory: z.string().describe('A compelling success story about the student.'),
});
export type GenerateSuccessStoryOutput = z.infer<typeof GenerateSuccessStoryOutputSchema>;

export async function generateSuccessStory(input: GenerateSuccessStoryInput): Promise<GenerateSuccessStoryOutput> {
  return generateSuccessStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSuccessStoryPrompt',
  input: {schema: GenerateSuccessStoryInputSchema},
  output: {schema: GenerateSuccessStoryOutputSchema},
  prompt: `You are a skilled storyteller working for a nonprofit organization that supports needy and vulnerable students. Your task is to create an uplifting and compelling success story based on the provided student data and program outcomes.

Student Name: {{{studentName}}}
Program Name: {{{programName}}}
Outcome: {{{outcome}}}

Write a short story (approximately 200-300 words) highlighting the student's journey, the challenges they overcame, and the positive impact of the program on their life. The story should be inspiring and emphasize the organization's mission and values.`,
});

const generateSuccessStoryFlow = ai.defineFlow(
  {
    name: 'generateSuccessStoryFlow',
    inputSchema: GenerateSuccessStoryInputSchema,
    outputSchema: GenerateSuccessStoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

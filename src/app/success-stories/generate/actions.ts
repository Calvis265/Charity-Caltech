
"use server";

import { generateSuccessStory, GenerateSuccessStoryInput, GenerateSuccessStoryOutput } from "@/ai/flows/generate-success-story";
import { z } from "zod";

const formSchema = z.object({
  studentName: z.string().min(2),
  programName: z.string().min(3),
  outcome: z.string().min(10),
});

type GenerateStoryResult = 
  | { success: true; story: GenerateSuccessStoryOutput }
  | { success: false; error: string };

export async function generateStoryAction(
  input: GenerateSuccessStoryInput
): Promise<GenerateStoryResult> {
  try {
    const validation = formSchema.safeParse(input);
    if (!validation.success) {
      return { success: false, error: "Invalid input provided." };
    }

    const result = await generateSuccessStory(validation.data);
    
    if (!result || !result.successStory) {
       return { success: false, error: "Failed to generate story. The AI model did not return a valid response." };
    }

    return { success: true, story: result };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { success: false, error: `An unexpected error occurred: ${errorMessage}` };
  }
}


"use server";

import { z } from "zod";

const volunteerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  role: z.string().min(2, "Role must be at least 2 characters."),
});

type VolunteerActionResult = 
  | { success: true; message: string }
  | { success: false; error: string };

// In a real application, these actions would interact with a database.
// For this prototype, they will just log to the console and simulate success.

export async function addVolunteerAction(values: unknown): Promise<VolunteerActionResult> {
  const validation = volunteerSchema.safeParse(values);
  if (!validation.success) {
    return { success: false, error: "Invalid data provided." };
  }

  console.log("Adding new volunteer:", validation.data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true, message: "Volunteer added successfully." };
}

export async function updateVolunteerAction(values: unknown): Promise<VolunteerActionResult> {
  const validation = volunteerSchema.safeParse(values);
  if (!validation.success || !validation.data.id) {
    return { success: false, error: "Invalid data for updating." };
  }

  console.log("Updating volunteer:", validation.data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Volunteer updated successfully." };
}


export async function deleteVolunteerAction(id: string): Promise<VolunteerActionResult> {
    if (!id) {
        return { success: false, error: "No ID provided for deletion." };
    }

    console.log("Deleting volunteer with ID:", id);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Volunteer deleted successfully." };
}

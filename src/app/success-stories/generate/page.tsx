
"use client";

import { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { generateStoryAction } from "./actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Copy, Sparkles, UserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required."),
  studentPhoto: z.any().optional(),
  programName: z.string().min(3, "Program name is required."),
  outcome: z.string().min(10, "Outcome description must be at least 10 characters."),
});

const toDataUri = (file: File): Promise<string> => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
});


export default function GenerateSuccessStoryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<{ story: string; photo: string | null }>({ story: "", photo: null });
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      programName: "",
      outcome: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedResult({ story: "", photo: null });
    
    let studentPhotoDataUri: string | undefined = undefined;
    if (values.studentPhoto && values.studentPhoto[0]) {
        try {
            studentPhotoDataUri = await toDataUri(values.studentPhoto[0]);
        } catch (error) {
            toast({ variant: "destructive", title: "Error", description: "Could not process image file."});
            setIsLoading(false);
            return;
        }
    }

    const result = await generateStoryAction({
        studentName: values.studentName,
        programName: values.programName,
        outcome: values.outcome,
        studentPhotoDataUri,
    });

    if (result.success) {
      setGeneratedResult({
          story: result.story.successStory,
          photo: studentPhotoDataUri || null,
      });
      toast({
        title: "Story Created!",
        description: "Your new story has been created below.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      });
    }
    
    setIsLoading(false);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedResult.story);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <div>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Create a Success Story</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our story builder to quickly draft an inspiring story. Just provide a few details, and let our tool do the rest.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Story Details</CardTitle>
                <CardDescription>Enter the key information below.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Calvis O." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studentPhoto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student's Photo (Optional)</FormLabel>
                          <FormControl>
                            <div className="flex items-center space-x-4">
                              <Avatar className="h-20 w-20">
                                <AvatarImage src={photoPreview ?? undefined} alt="Student photo preview" />
                                <AvatarFallback><UserRound className="h-8 w-8"/></AvatarFallback>
                              </Avatar>
                              <Input 
                                type="file" 
                                accept="image/*" 
                                className="flex-1"
                                onChange={(e) => {
                                  field.onChange(e.target.files);
                                  if (e.target.files && e.target.files[0]) {
                                    setPhotoPreview(URL.createObjectURL(e.target.files[0]));
                                  } else {
                                    setPhotoPreview(null);
                                  }
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="programName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Education Sponsorship" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="outcome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Positive Outcome</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the positive change or achievement..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                           <FormDescription>
                             Be specific. E.g., "Graduated top of his class and got a scholarship to university."
                           </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                      )}
                      Create Story
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Generated Story</CardTitle>
                <CardDescription>Review and edit the generated story below.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                   {generatedResult.photo && (
                    <div className="mb-4 aspect-video relative w-full overflow-hidden rounded-md">
                        <Image src={generatedResult.photo} alt="Generated story student photo" layout="fill" objectFit="cover" />
                    </div>
                  )}
                  <Textarea
                    placeholder={isLoading ? "Creating your story..." : "Your new story will appear here."}
                    value={generatedResult.story}
                    onChange={(e) => setGeneratedResult(prev => ({...prev, story: e.target.value}))}
                    className="min-h-[280px] bg-secondary/50"
                    readOnly={!generatedResult.story && !isLoading}
                  />
                  {generatedResult.story && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={handleCopy}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-md">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

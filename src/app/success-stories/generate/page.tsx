"use client";

import { useState } from "react";
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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Copy, Sparkles } from "lucide-react";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required."),
  programName: z.string().min(3, "Program name is required."),
  outcome: z.string().min(10, "Outcome description must be at least 10 characters."),
});

export default function GenerateSuccessStoryPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState("");
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
    setGeneratedStory("");
    
    const result = await generateStoryAction(values);

    if (result.success) {
      setGeneratedStory(result.story.successStory);
      toast({
        title: "Story Generated!",
        description: "Your success story has been created below.",
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
    navigator.clipboard.writeText(generatedStory);
    toast({
      title: "Copied to clipboard!",
    });
  };

  return (
    <div>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Generate a Success Story</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Use our AI-powered tool to quickly draft an inspiring story. Just provide a few details, and let our storyteller do the rest.
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
                            <Input placeholder="e.g., Maria K." {...field} />
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
                             Be specific. E.g., "Graduated top of her class and got a scholarship to university."
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
                      Generate Story
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Generated Story</CardTitle>
                <CardDescription>Review and edit the AI-generated story below.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Textarea
                    placeholder={isLoading ? "Generating your story..." : "Your generated story will appear here."}
                    value={generatedStory}
                    onChange={(e) => setGeneratedStory(e.target.value)}
                    className="min-h-[280px] bg-secondary/50"
                    readOnly={!generatedStory && !isLoading}
                  />
                  {generatedStory && (
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
                    <div className="absolute inset-0 flex items-center justify-center bg-background/50">
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

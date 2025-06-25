"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MultiSelectCategories } from "@/components/MultiselectLanguages";
const formSchema = z.object({
  name: z.string().min(2).max(30),
  bio: z.string().min(10).max(100),
  location: z.string().min(2).max(30),
  priceRange: z.string().min(1),
  languages: z.array(z.string()).min(1, "Select at least one language"),
});

export default function OnBoard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      priceRange: "",
      languages: [],
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  // ○ Name, Bio, Category (multi-select dropdown with checkboxes)
  // ○ Languages Spoken (multi-select with checkbox)
  // ○ Fee Range (dropdown)
  // ○ Location (text input)

  return (
    <div className="w-full flex justify-center items-center p-[24px] ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Bio" {...field} />
                </FormControl>
                <FormDescription>This is your public bio.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter location" {...field} />
                </FormControl>
                <FormDescription>
                  This will show as your location.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fee Range</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select fee range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="below-5k">Below ₹5,000</SelectItem>
                      <SelectItem value="5k-10k">₹5,000 – ₹10,000</SelectItem>
                      <SelectItem value="10k-25k">₹10,000 – ₹25,000</SelectItem>
                      <SelectItem value="25k-50k">₹25,000 – ₹50,000</SelectItem>
                      <SelectItem value="50k-1l">
                        ₹50,000 – ₹1,00,000
                      </SelectItem>
                      <SelectItem value="above-1l">Above ₹1,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Pick the primary category you perform in.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <MultiSelectCategories />
          <Button variant={"artist"} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

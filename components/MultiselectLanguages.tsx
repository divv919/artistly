"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

const CATEGORIES = ["Singer", "Dancer", "DJ", "Speaker", "Comedian", "Anchor"];

export function MultiSelectCategories() {
  const { setValue, watch } = useFormContext();
  const selectedCategories = watch("categories") || [];

  const toggleCategory = (cat: string) => {
    if (selectedCategories.includes(cat)) {
      setValue(
        "categories",
        selectedCategories.filter((c: string) => c !== cat)
      );
    } else {
      setValue("categories", [...selectedCategories, cat]);
    }
  };

  return (
    <FormField
      name="categories"
      render={() => (
        <FormItem>
          <FormLabel>Categories</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[200px] justify-start">
                {selectedCategories.length > 0
                  ? selectedCategories.join(", ")
                  : "Select categories"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]">
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <FormItem
                    key={cat}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={() => toggleCategory(cat)}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{cat}</FormLabel>
                  </FormItem>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <FormDescription>Select one or more categories.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

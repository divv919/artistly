"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";

import { artistData } from "../data/artistData";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Categories() {
  return (
    <Suspense>
      <CategoriesWOSuspense />
    </Suspense>
  );
}

function CategoriesWOSuspense() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState<string | undefined>(
    searchParams.get("location") || undefined
  );
  const [priceRange, setPriceRange] = useState<string | undefined>(
    searchParams.get("priceRange") || undefined
  );
  const [category, setCategory] = useState<string | undefined>(
    searchParams.get("category") || undefined
  );
  const router = useRouter();

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) params.set("category", category);
    else params.delete("category");

    if (location) params.set("location", location);
    else params.delete("location");

    if (priceRange) params.set("priceRange", priceRange);
    else params.delete("price");

    router.push(`?${params.toString()}`);
  };

  return (
    <main className="py-[16px] px-[56px] bg-yellow-100 flex flex-col gap-[36px]">
      <header className="pb-[18px] border-b border-amber-300">
        <h1 className="text-[36px] font-bold tracking-tighter ">
          Browse Artists Through Categories
        </h1>
        <p className="text-[16px] tracking-tight">
          Discover talented performers for your next event
        </p>
      </header>
      <article className="grid grid-cols-5 gap-[36px]">
        <div className="sticky top-6 h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Select Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-[10px]">
                <h1>Category</h1>
                <Select
                  onValueChange={(value: string) => setCategory(value)}
                  value={category}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="singers"> Singers</SelectItem>
                    <SelectItem value="dancers">Dancers</SelectItem>
                    <SelectItem value="speakers">Speakers</SelectItem>
                    <SelectItem value="djs">DJs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardContent className="w-full">
              <div className="flex flex-col gap-[10px]">
                <h1>Location</h1>
                <Select
                  onValueChange={(value: string) => setLocation(value)}
                  value={location}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>

            <CardContent>
              <div className="flex flex-col gap-[10px]">
                <h1>Price Range</h1>
                <Select
                  onValueChange={(value: string) => setPriceRange(value)}
                  value={priceRange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All Price Ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="below-5k">Below ₹5,000</SelectItem>
                    <SelectItem value="5k-10k">₹5,000 – ₹10,000</SelectItem>
                    <SelectItem value="10k-25k">₹10,000 – ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 – ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 – ₹1,00,000</SelectItem>
                    <SelectItem value="above-1l">Above ₹1,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>

            <CardFooter className="flex justify-start">
              <div className="flex gap-[12px]">
                <Button variant={"artist"} onClick={handleApply}>
                  Apply
                </Button>
                <Button variant={"outline-artist"}>Clear All</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className=" col-span-4 grid grid-cols-3 gap-[18px]">
          {artistData.map((artist) => {
            return (
              <Card key={artist.id}>
                <CardContent className="grid gap-[8px] grid-rows-5 h-full">
                  <div className="row-span-3 rounded-md overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src={artist.image}
                      alt="random"
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="grid grid-rows-6 gap-[6px] row-span-2 ">
                    <div className="grid grid-cols-8">
                      <h1 className="col-span-6 font-semibold text-[20px]">
                        {artist.name}
                      </h1>
                      <div className="flex items-center gap-[4px]">
                        <div className="text-orange-500 w-full aspect-square">
                          <Star size={14} />
                        </div>
                        <p>{artist.rating}</p>
                        <p>({artist.reviews})</p>
                      </div>
                    </div>
                    <div className="flex gap-[8px] flex-wrap">
                      {artist.tags.map((tag, index) => (
                        <Badge
                          variant={"secondary"}
                          className="h-fit"
                          key={index}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-neutral-600 flex items-center gap-[4px] tracking-tight text-[14px]">
                      <div>
                        <MapPin size={14} />
                      </div>
                      <div>{artist.location}</div>
                    </div>
                    <div className="row-span-2 text-neutral-700 tracking-tight text-[16px]">
                      {artist.description}
                    </div>

                    <div className="grid grid-cols-10">
                      <div className="col-span-8 font-medium">
                        {artist.priceRange}
                      </div>
                      <div>
                        <Button size={"sm"} variant={"artist"}>
                          Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </article>
    </main>
  );
}

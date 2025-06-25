import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CategoryPageData from "@/app/data/categoryPageData";
import { Button } from "./ui/button";
export const Category = () => {
  return (
    <main className="px-[36px] py-[20px] flex flex-col gap-[36px]">
      <header>
        <h1 className="text-[44px] text-center font-bold text-amber-800 tracking-tighter">
          Browse Categories
        </h1>
      </header>
      <article className="flex flex-col  justify-center items-center gap-[16px]">
        {CategoryPageData.map((category, index) => {
          return (
            <div
              key={index}
              className="flex h-fit w-fit border border-neutral-300 rounded-md justify-center gap-[100px] shadow p-[30px] bg-amber-50"
            >
              <div className="w-[200px] h-full mx-[24px]">
                <Carousel>
                  <CarouselContent>
                    {category.carousel_images.map((img, index) => {
                      return (
                        <CarouselItem key={index}>
                          <Image
                            className="w-full object-cover"
                            alt="random-image"
                            src={img}
                            width={200}
                            height={200}
                          />
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="max-w-[660px] flex flex-col gap-[16px]">
                <h1 className="text-[24px] font-bold text-orange-600">
                  {category.title}
                </h1>
                <p>{category.subtitle}</p>
                <div className="w-fit">
                  {" "}
                  <Button variant={"artist"}>Explore</Button>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </main>
  );
};

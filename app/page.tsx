import { ArtistOnboard } from "@/components/ArtistOnboard";
import { Category } from "@/components/Category";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="--font-geist-sans flex flex-col gap-[6px] bg-gradient-to-b from-amber-200 to-amber-50">
      <Hero />

      <Category />

      <ArtistOnboard />
      <FAQ />
    </div>
  );
}

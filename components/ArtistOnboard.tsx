import { Button } from "./ui/button";

export const ArtistOnboard = () => {
  return (
    <main className="flex flex-col w-full justify-center items-center gap-[24px] tracking-tight text-amber-100 bg-amber-600 p-[48px]">
      <div className="flex flex-col gap-[12px] items-center">
        <div className="text-[48px] font-bold leading-[1]">
          Join as an Artist
        </div>
        <p className=" tracking-tight text-center">
          At Artistly, we believe every artist deserves a stage — not just to
          showcase their work,
          <br /> but to be celebrated, discovered, and supported. Whether you
          are a passionate singer, a captivating dancer, an electrifying DJ,{" "}
          <br /> or a thought-provoking speaker, this is your space to shine.
        </p>
      </div>
      <div>
        <Button variant={"outline-artist"}>Onboard</Button>
      </div>
    </main>
  );
};

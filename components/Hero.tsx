import { Button } from "./ui/button";
import Link from "next/link";
export const Hero = () => {
  return (
    <main className="flex  justify-center   px-[36px] py-[40px] ">
      <div className="flex flex-col gap-[36px] items-center">
        <div>
          <h1 className=" flex flex-col items-center gap-[16px] tracking-tighter font-bold text-[64px]">
            <div className="leading-[1.15] "> Where Art Meets</div>
            <div className="text-white bg-gradient-to-b  w-fit h-fit from-yellow-400 to-red-400 ">
              Opportunity
            </div>
          </h1>
        </div>
        <div className="flex flex-col text-[16px] gap-[16px] tracking-tight text-center">
          <div>
            Discover visionary artists from every corner of the world. Connect,
            collaborate, <br />
            and turn imagination into reality. Whether you are an <br />
            admirer or an artist, find your next masterpiece or make one.
          </div>
          <div className="flex justify-center gap-[24px]">
            <Link href={"/onboard"}>
              <Button variant={"outline-artist"}>Join Now</Button>
            </Link>
            <Link href={"/categories"}>
              <Button variant={"artist"}>Discover Artists</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

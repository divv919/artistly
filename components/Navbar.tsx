import { Caveat } from "next/font/google";
import { Button } from "./ui/button";

const caveat = Caveat({
  subsets: ["latin"],
});
export const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 bg-amber-200 px-[36px] py-[20px]">
      <h1
        className={`${caveat.className} font-bold text-[24px] flex items-center`}
      >
        Artistly
      </h1>
      <div className="flex justify-center items-center  gap-[16px] text-[14px]">
        <Button variant={"link"} className="w-fit h-fit">
          Categories
        </Button>
        <Button variant={"link"} className="w-fit h-fit">
          Discover Artists
        </Button>
        <Button variant={"link"} className="w-fit h-fit">
          Find Gigs
        </Button>
      </div>
      <div className="flex justify-end gap-[18px]  items-center ">
        <Button variant="outline-artist">Bookings</Button>
        <Button variant={"artist"}>Contact Us</Button>
      </div>
    </nav>
  );
};

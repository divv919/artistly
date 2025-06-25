import { Button } from "./ui/button";

import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
});
export const Footer = () => {
  return (
    <footer className=" flex flex-col gap-[48px] p-[24px] items-center bg-amber-950 text-amber-50">
      <div>
        <div
          className={`${caveat.className} text-center font-bold text-[24px] tracking-tight`}
        >
          Artistly
        </div>
        <div>
          Connecting event planners with talented performing artists worldwide.
        </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col items-center gap-[18px]">
          <div className="flex flex-col items-start gap-[12px]">
            <h1 className="w-fit text-[20px] font-medium ">
              For Event Planners
            </h1>
            <div className="flex flex-col items-start">
              <Button className="p-0" variant={"link"}>
                Browse Artists
              </Button>
              <Button className="p-0" variant={"link"}>
                Request Quotes
              </Button>
              <Button className="p-0" variant={"link"}>
                Book Events
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[18px]">
          <div className="flex flex-col items-start gap-[12px]">
            <h1 className="w-fit text-[20px] font-medium ">For Artists</h1>
            <div className="flex flex-col items-start">
              <Button variant={"link"} className="p-0">
                Create Profile
              </Button>
              <Button className="p-0" variant={"link"}>
                Manage Bookings
              </Button>
              <Button variant={"link"} className="p-0">
                Grow
              </Button>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[18px]">
          <div className="flex flex-col items-start gap-[12px]">
            <h1 className="w-fit text-[20px] font-medium ">Contacts</h1>
            <div className="flex flex-col items-start">
              <Button variant={"link"} className="p-0">
                Email
              </Button>
              <Button className="p-0" variant={"link"}>
                +91 9876543210
              </Button>
              <Button variant={"link"} className="p-0">
                Address
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-900 pt-[28px] w-full text-center tracking-tight text-[14px]">
        © 2025 Artistly. All rights reserved.
      </div>
    </footer>
  );
};

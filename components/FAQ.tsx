import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const FAQ = () => {
  return (
    <main className="w-full flex justify-between px-[300]">
      <div className="w-[400px]  rounded-md p-[16px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Artistly?</AccordionTrigger>
            <AccordionContent>
              Artistly is a platform that connects talented artists — including
              singers, dancers, DJs, and speakers — with audiences,
              collaborators, and event opportunities. It’s a space to showcase
              creativity, discover new talent, and build meaningful artistic
              connections.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How can I join as an artist?</AccordionTrigger>
            <AccordionContent>
              Simply click on the “Join as an Artist” button, fill in your
              profile details, upload your portfolio or videos, and start
              getting discovered by clients and fans around the world.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is there a fee to join Artistly?
            </AccordionTrigger>
            <AccordionContent>
              No, joining Artistly as an artist is completely free. We believe
              in supporting creative talent and providing a space to grow your
              presence without any upfront costs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Who can hire artists on Artistly?
            </AccordionTrigger>
            <AccordionContent>
              Anyone looking to collaborate with or hire artists — from event
              organizers to creative agencies to individuals — can browse
              profiles and reach out directly through the platform.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              What types of artists are featured?
            </AccordionTrigger>
            <AccordionContent>
              We welcome a wide range of performers and creatives — singers,
              dancers, DJs, speakers, poets, visual artists, and more. If you
              create and inspire, Artistly is for you.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              How do I get featured on the homepage?
            </AccordionTrigger>
            <AccordionContent>
              Featured artists are handpicked based on the quality of their
              portfolio, engagement, and uniqueness. Keep your profile updated
              and active to increase your chances of being spotlighted.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Enter your email and name to contact us
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Name</p>
            <Input placeholder="John Doe" />
          </CardContent>
          <CardContent>
            <p>Email</p>
            <Input placeholder="123@gmail.com" />
          </CardContent>
          <CardFooter>
            <Button variant={"outline-artist"}>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

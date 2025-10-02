import Link from "next/link";
import { Button } from "./ui/button";
import { homePath, ticketsPath } from "@/paths";
import { LucideTickets } from "lucide-react";

export const Header = () => {
  return (
    <>
      <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 bg-background/95 backdrop:blur w-full flex justify-between py-2.5 px-5 border-b">
        <div>
          <Button asChild variant="ghost">
            <Link href={homePath()}>
              <LucideTickets />
              <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
            </Link>
          </Button>
        </div>
        <div>
          <Button asChild variant="default">
            <Link href={ticketsPath()}>Tickets</Link>
          </Button>
        </div>
      </nav>
    </>
  );
};

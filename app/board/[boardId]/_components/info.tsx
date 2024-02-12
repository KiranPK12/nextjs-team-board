"use client ";

import { Actions } from "@/components/actions";
import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeperator = () => {
  return <div className="text-neutral-300 px-1.5"></div>;
};

const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });
  if (!data) {
    return <InfoSkeleton />;
  }
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button variant={"board"} className="px-2" asChild>
          <Link href={"/"}>
            <Image height={40} width={40} src="/logo.svg" alt="Logo" />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint side="bottom" sideOffset={10} label="Edit Title">
        <Button
          className="text-base px-2 "
          variant={"board"}
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div className="">
          <Hint label="Main Menu" side="bottom" sideOffset={10}>
            <Button size={"icon"} variant={"board"}>
              <Menu className="h-4 w-4 " />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};

export default Info;

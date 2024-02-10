"use client";
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Hint from "@/components/hint";
interface ItemsProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Items = ({ id, name, imageUrl }: ItemsProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id == id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative">
      <Hint label={name} align="start" side="right" sideOffset={15}>
        <Image
          src={imageUrl}
          onClick={onClick}
          alt="name"
          fill
          className={cn(
            "rounded-md opacity-75 hover:opacity-100 cursor-pointer transition",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

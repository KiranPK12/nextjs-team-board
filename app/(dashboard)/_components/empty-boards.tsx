"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board Created");
        // todo : redirect to the board
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/note.svg"} alt="Empty search" height={110} width={110} />
      <h2 className="font-semibold text-2xl mt-6">Create your first Board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a first board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size={"lg"}>
          Create Board{" "}
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;

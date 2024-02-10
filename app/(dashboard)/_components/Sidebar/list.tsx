"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Items } from "./item";
import Hint from "@/components/hint";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;

  return (
    <ul className="space-y-4">
      {userMemberships.data.map((mem) => (
        <Items
          key={mem.organization.id}
          name={mem.organization.name}
          imageUrl={mem.organization.imageUrl}
          id={mem.organization.id}
        />
      ))}
    </ul>
  );
};

import Image from "next/image";
import React from "react";

const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favorites.svg"}
        alt="Empty search"
        height={140}
        width={140}
      />
      <h2 className="font-semibold text-2xl mt-6">No Favourite Boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try favouriting a board</p>
    </div>
  );
};

export default EmptyFavourites;

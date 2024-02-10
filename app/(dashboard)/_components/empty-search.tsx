import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-search.svg"}
        alt="Empty search"
        height={140}
        width={140}
      />
      <h2 className="font-semibold text-2xl mt-6">No Results Found!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try searching something else</p>
    </div>
  );
};

export default EmptySearch;

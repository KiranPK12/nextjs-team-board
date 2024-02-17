"use client";

import { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      {/* TODO: draft pencil there  */}
      <Cursors />
    </>
  );
});

export default CursorsPresence;

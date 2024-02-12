import ToolButton from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Toolbar = ({
  canRedo,
  canUndo,
  canvasState,
  setCanvasState,
  undo,
  redo,
}: ToolbarProps) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {
            setCanvasState({ mode: CanvasMode.None });
          }}
          isActive={canvasState.mode === CanvasMode.None}
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Sticky Notes"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          icon={Undo2}
          onClick={undo}
          disabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          icon={Redo2}
          onClick={redo}
          disabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 h-[300px] w-[52px] bg-white shadow-md rounded-md" />
  );
};
export default Toolbar;

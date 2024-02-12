"use client";

import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const ToolButton = ({
  label,
  icon: Icon,
  disabled,
  isActive,
  onClick,
}: ToolButtonProps) => {
  return (
    <Hint label={label} sideOffset={14} side="right">
      <Button
        className=""
        disabled={disabled}
        onClick={onClick}
        variant={isActive ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};

export default ToolButton;

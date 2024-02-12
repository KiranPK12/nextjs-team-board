import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const COLOURS = [
  "#8a2be2", // BlueViolet
  "#ff4500", // OrangeRed
  "#800000", // Maroon
  "#4682b4", // SteelBlue
  "#ff00ff", // Magenta
  "#4b0082", // Indigo
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColors(connectionId: number): string {
  return COLOURS[connectionId % COLOURS.length];
}

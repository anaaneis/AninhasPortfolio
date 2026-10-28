import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx joins class names; twMerge resolves conflicts (e.g. two different paddings)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

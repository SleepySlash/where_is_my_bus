import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colleges = [
  {
    name: "MLRIT",
    id: 1,
  },
  {
    name: "CMR",
    id: 2,
  },
  {
    name: "MLRITM",
    id: 3,
  },
  {
    name: "BVRIT",
    id: 4,
  },
];
export const gender_ = [
  {
    name:'Male',
    id:1,
  },
  {
    name:'Female',
    id:2,
  },
  {
    name:'Other..',
    id:3,
  }
];


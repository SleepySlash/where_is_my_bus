import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colleges = [
  {
    name: "MLRIT",
    id:1,
  },
  {
    name:"CMR",
    id:2,
  },{
    name:'MLRITM',
    id:3,
  },
  {
    name:"BVRIT",
    id:4,
  }
];
export default colleges
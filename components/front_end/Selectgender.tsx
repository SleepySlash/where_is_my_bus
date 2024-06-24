import * as React from "react";
import { gender_ } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Kumbh_Sans, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
const montserrat_lighter = Kumbh_Sans({
  weight: "400",
  subsets: ["latin"],
});
export function Selectgender() {
  return (
    <Select>
      <SelectTrigger
        className={cn("outline-[#3D408A] focus:outline-[#3D408A] w-[135px]")}
      >
        <SelectValue
          placeholder="Select Gender"
          className={cn(
            "focus:outline-[#3D408A] outline-[#3D408A]",
            montserrat_lighter.className
          )}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {gender_.map((gen) => (
            <SelectItem
              key={gen.id}
              value={gen.name}
              className={cn("focus:outline-none  ", montserrat.className)}
            >
              {gen.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

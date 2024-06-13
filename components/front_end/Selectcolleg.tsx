import * as React from "react";
import {colleges} from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
const montserrat_lighter = Montserrat({
  weight: "400",
  subsets: ["latin"],
});


export function Selectcollege() {
  return (
    <Select >
      <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A] rounded-lg">
        <SelectValue
          placeholder="Select College"
          className={cn("focus:outline-[#3D408A] outline-[#3D408A] ",montserrat_lighter.className)}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {colleges.map((clg) => (
            <SelectItem
              key={clg.id}
              value={clg.name}
              className={cn("focus:outline-none", montserrat.className)}
            >
              {clg.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
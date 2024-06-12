import * as React from "react";
import {gender_} from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Kumbh_Sans } from 'next/font/google';
import { cn } from "@/lib/utils";

const kumbh_sans_medium = Kumbh_Sans({
  weight: '600',
  subsets: ['latin'],
});
const kumbh_sans_lighter = Kumbh_Sans({
  weight: '400',
  subsets: ['latin'],
});
export function Selectgender() {
  return (
    <Select>
      <SelectTrigger className={cn("outline-[#3D408A] focus:outline-[#3D408A] w-[135px]",kumbh_sans_lighter.className)}>
        <SelectValue
          placeholder="Select Gender"
          className={cn("focus:outline-[#3D408A] outline-[#3D408A]",kumbh_sans_medium.className)}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {gender_.map((gen) => (
            <SelectItem
              key={gen.id}
              value={gen.name}
              className="focus:outline-none"
            >
              {gen.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
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

export function Selectgender() {
  return (
    <Select>
      <SelectTrigger className="outline-[#3D408A] focus:outline-[#3D408A] w-[135px]">
        <SelectValue
          placeholder="Select Gender"
          className="focus:outline-[#3D408A] outline-[#3D408A]"
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
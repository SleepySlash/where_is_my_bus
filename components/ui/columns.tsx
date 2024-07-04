"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { getUserInterface } from "@/lib/schemas";

export const columns: ColumnDef<getUserInterface>[] = [
  {
    accessorKey: "Role",
    header: "Role",
  },
  {
    accessorKey: "RollNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-center w-full font-manrope"
        >
          Roll Number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("RollNumber")}</div>;
    },
  },
  {
    accessorKey: "Phone",
    header: () => <div className="text-center font-manrope">Phone</div>,
    cell: ({ row }) => {
      const amount = String(row.getValue("Phone"));
      const formatted = amount;

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-red-100">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
              className="text-red-600 hover:bg-red-200/50 hover:text-red-600"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

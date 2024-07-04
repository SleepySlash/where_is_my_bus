"use client";
import * as React from "react";
import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 50,
  });
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [roleFilters, setRoleFilters] = React.useState({
    Student: true,
    Parent: true,
    Faculty: true,
  });
  // @ts-ignore
  const filteredData = data.filter((item: any) => roleFilters[item.Role]);

  const table = useReactTable({
    data: filteredData,
    columns,
    pageCount: Math.ceil(data.length / pagination.pageSize), // Calculate the total number of pages
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
      globalFilter,
    },
    manualPagination: true, // Enable manual pagination
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    globalFilterFn: (row, columnId, filterValue) => {
      return (
        String(row.getValue("RollNumber"))
          .toLowerCase()
          .includes(filterValue.toLowerCase()) ||
        String(row.getValue("Phone"))
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    },
  });

  return (
    <div>
      <div className="flex items-center py-4 gap-1">
        <Input
          placeholder="Filter emails and status..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm flex-grow"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto border border-violetBlue"
            >
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={roleFilters.Student}
              onCheckedChange={(value) =>
                setRoleFilters({
                  ...roleFilters,
                  Student: !roleFilters.Student,
                })
              }
            >
              Student
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={roleFilters.Parent}
              onCheckedChange={(value) =>
                setRoleFilters({ ...roleFilters, Parent: !roleFilters.Parent })
              }
            >
              Parent
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              className="capitalize"
              checked={roleFilters.Faculty}
              onCheckedChange={(value) =>
                setRoleFilters({
                  ...roleFilters,
                  Faculty: !roleFilters.Faculty,
                })
              }
            >
              Faculty
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table
                .getRowModel()
                .rows.slice(
                  pagination.pageIndex * pagination.pageSize,
                  (pagination.pageIndex + 1) * pagination.pageSize
                )
                .map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(pagination.pageIndex - 1)}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.setPageIndex(pagination.pageIndex + 1)}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

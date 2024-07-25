"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "./data-table";

const data: Sales[] = [
  {
    id: "m5gr84i9",
    amount: 55000,
    product: "Laptop",
    status: "success",
    quantity: 2,
  },
  {
    id: "3u1reuv4",
    amount: 40000,
    product: "Iphone 7",
    quantity: 4,
    status: "success",
  },
  {
    id: "derv1ws0",
    amount: 20000,
    product: "Monitor",
    quantity: 10,
    status: "processing",
  },
  {
    id: "5kma53ae",
    amount: 3000,
    product: "Mouse",
    quantity: 5,
    status: "success",
  },
  {
    id: "bhqecj4p",
    amount: 150000,
    product: "PC",
    quantity: 1,
    status: "failed",
  },
  {
    id: "derv1ws0",
    amount: 20000,
    product: "Monitor",
    quantity: 10,
    status: "processing",
  },
  {
    id: "5kma53ae",
    amount: 3000,
    product: "Mouse",
    quantity: 5,
    status: "success",
  },
  {
    id: "bhqecj4p",
    amount: 150000,
    product: "PC",
    quantity: 1,
    status: "failed",
  },
  {
    id: "derv1ws0",
    amount: 20000,
    product: "Monitor",
    quantity: 10,
    status: "processing",
  },
  {
    id: "5kma53ae",
    amount: 3000,
    product: "Mouse",
    quantity: 5,
    status: "success",
  },
  {
    id: "bhqecj4p",
    amount: 150000,
    product: "PC",
    quantity: 1,
    status: "failed",
  },
];

export type Sales = {
  id: string;
  product: string;
  amount: number;
  quantity: number;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "product",
    header: "Product",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

export function RecentSales() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns}></DataTable>
    </div>
  );
}

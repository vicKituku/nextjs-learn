"use client";
import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";
export default function AddProductButton() {
  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "1300");
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="fixed bottom-0 right-10 border bg-green-500 hover:bg-green-700 text-white p-2 rounded-md w-48"
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : "Add Macbook Pro"}
    </button>
  );
}

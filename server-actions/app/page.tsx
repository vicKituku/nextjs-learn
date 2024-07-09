import { Product } from "@/typings";
import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";

export default async function Home() {
  const res = await fetch(
    "https://668d01c3099db4c579f154a0.mockapi.io/products",
    { cache: "no-cache", next: { tags: ["products"] } }
  );
  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Products Warehouse</h1>
      <AddProductButton />
      <form
        action={addProductToDatabase}
        className="flex flex-col max-w-xl mx-auto p-5 gap-5"
      >
        <input
          type="text"
          name="product"
          className="border border-gray-300 rounded-md  p-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="price"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Price"
        />
        <button className="border bg-blue-500 text-white p-2 rounded-md">
          Add Product
        </button>
      </form>
      <h2 className="text-2xl font-bold text-center">List of Products</h2>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

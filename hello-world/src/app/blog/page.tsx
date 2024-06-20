import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog",
  description: "Latest articles about MyApp",
};
export default function Blog() {
  return <h1>My Blog</h1>;
}

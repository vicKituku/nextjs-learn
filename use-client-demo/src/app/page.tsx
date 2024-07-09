import Button from "./components/button";
import Post from "./components/post";
import Form from "./components/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-6 p-24">
      <h1>Home Page</h1>
      <Button />

      <Form />
      <div className=""></div>
    </main>
  );
}

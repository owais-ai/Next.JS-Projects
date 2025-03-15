import Link from "next/link";

export default function Home() {
  return (
    <main className="h-48 text-center mt-20">
      <div>
        Api Rendering using params
      </div>
      <p>
        <Link href={"/books"}>Books</Link>
      </p>
    </main>
  );
}

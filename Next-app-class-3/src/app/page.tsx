import Link from "next/link";

export default function Home() {
  return (
    <div>
      I am HomePage.<br/>
      <Link href={"/category"}>Go to Category Page</Link>
      <br />
      <Link href={"/category/sports"}>Go to Sports page</Link>
      <br />
      <Link href="/students">Student Page</Link>
    </div>
  );
}

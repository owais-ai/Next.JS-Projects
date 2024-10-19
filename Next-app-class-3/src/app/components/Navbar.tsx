import Link from "next/link";
function Navbar() {
  return (
    <div>
      <h1>This a navbar</h1>
      <h1>
        <Link href="/">Home</Link>
      </h1>
    </div>
  );
}

export default Navbar;

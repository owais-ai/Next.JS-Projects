import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <div className="bg-blue-950 pb-2 text-white flex justify-between text-center pt-3">
        <div className="ml-36 flex">
          <Image src="/phone.png" alt="phone-icon" width={20} height={1} />
          <p className="text-xs py-1">Download App via SMS</p>
        </div>
        <div><p className="mr-36 text-xs py-1">Sign In | Sign Up</p></div>
      </div>
      <div className="bg-blue-950">
        <div className="h-px bg-gray-500 justify-center mx-36"></div>
      </div>

      <div className="h-28 bg-blue-950 text-white flex justify-center items-center gap-32">
        <Link href="/"><Image src="/logo.png" alt="logo" width={200} height={50} /></Link>
        <ul className="flex gap-6">
          <li>New Cars</li> 
          <li>Used Cars</li>
          <li>Bikes</li>
          <li>Auto Store</li>
          <li>videos</li>
          <li>Blogs</li>
          <li>Forums</li>
          <li>More</li>
          <button className="h-8 w-32 rounded text-white bg-red-700">
            Post an Add
          </button>
        </ul>
      </div>
    </nav>
  );
}

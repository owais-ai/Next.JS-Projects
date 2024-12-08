import Image from "next/image";
import Link from "next/link";

export default function Heaader() {
  return (
    <header className="flex flex-wrap items-center justify-between py-5 px-5 md:px-10 lg:px-24">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image
            src={"/logo2.svg"}
            alt="Logo"
            width={185}
            height={100}
            className="w-28 md:w-44" // Adjust logo size for smaller screens
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-10 font-semibold">
        <Link href={"/"} className="border-b-2 border-transparent hover:border-slate-200">Home</Link>
        <Link href={"/shop"} className="hover:border-b-2 hover:border-slate-200">Shop</Link>
        <Link href={"/blog"} className="hover:border-b-2 hover:border-slate-200">Blog</Link>
        <Link href={"/contact"} className="hover:border-b-2 hover:border-slate-200">Contact</Link>
      </nav>

      {/* Icon Buttons */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <button>
          <Image
            src={"/mdi_account-alert-outline.svg"}
            alt="Account Alert"
            width={25}
            height={25}
          />
        </button>
        <button>
          <Image
            src={"/akar-icons_search.svg"}
            alt="Search"
            width={25}
            height={25}
          />
        </button>
        <button>
          <Image
            src={"/akar-icons_heart.svg"}
            alt="Wishlist"
            width={25}
            height={25}
          />
        </button>
        <button>
          <Image
            src={"/ant-design_shopping-cart-outlined.svg"}
            alt="Cart"
            width={25}
            height={25}
          />
        </button>
      </div>
    </header>
  );
}

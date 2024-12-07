import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="flex justify-end pr-20 text-white items-center bg-black py-4">
        <div className="w-[859px] h-[24px] flex gap-6">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <span className="font-semibold">
            <u>ShopNow</u>
          </span>
        </div>
        <div className="flex gap-2">
          <span>English</span>
          <Image
            src={"/dropdown.png"}
            alt={"dopedown"}
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex justify-around mt-12 items-center">
        <div>
          <div className="-mt-8"><Link href={"/"}><Image src={"/logo.png"} alt="logo" width={68} height={48}/></Link></div>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="border-b-2 hover:border-b-2 hover:border-slate-300">
              <Link href={"#"}>Home</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href={"#"}>Contact</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href={"#"}>About</Link>
            </li>
            <li className="hover:border-b-2 hover:border-slate-300">
              <Link href={"#"}>Signup</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <div className="bg-slate-100 rounded flex justify-around gap items-center w-[243px] h-[38px]">
            <div className="">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-slate-100 font-thin text-[12px] border-none p-1 w-[180px]"
              />
            </div>
            <div className="w-4 h-4">
              <Image
                className="bg-slate-100"
                src={"/search.svg"}
                alt="search icon"
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="flex gap-5 w-6 h-6">
          <Image
              src={"/wishlist.svg"}
              alt="wishlist"
              width={16}
              height={16}
            /> <Image
              src={"/cart.svg"}
              alt="cart"
              width={20}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

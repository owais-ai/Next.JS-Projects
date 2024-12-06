import Image from "next/image";
export default function Header() {
  return (
    <div className="flex justify-end pr-20 text-white items-center bg-black py-4">
      <div className="w-[859px] h-[24px] flex gap-6">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <span className="font-semibold"><u>ShopNow</u></span>
      </div>
      <div className="flex gap-2">
        <span>English</span>
        <Image src={"/dropdown.png"} alt={"dopedown"} width={24} height={24} />
      </div>
    </div>
  );
}

import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="Main mx-28">
      <div className="border-t-[1px] border-t-slate-200 my-4 w-full"/>

      <div className="Hero mt-10 flex justify-between">

        <div className="Hero1">
          <ul className="flex flex-col justify-between h-[344px]">
            <li>Woman's Fashion</li>
            <li>Man's Fashion</li>
            <li>Electronics</li>
            <li>Home & Electronics</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby & Toys</li>
            <li>Grocery & Pets</li>
            <li>Heath & Beauty</li>
          </ul>
        </div>

        <div className="Hero2 w-[894px] h-[344px] flex flex-col items-center justify-center gap-10 bg-black overflow-hidden">
          <div className="hero1 flex gap-44">
            <div className="flex flex-col gap-8 pt-10">
              <div><Image src={"/iphone-frame.svg"} alt="iphoneImg" width={190} height={49} /></div>
              <div className="text-white text-5xl">Up to 10% <br /> off Voucher</div>

              <div className="flex gap-2">
                <div className="text-white text-[18px] font-semibold">Shop Now</div>
                <div><Image src={"/icons arrow-right.svg"} alt="iphoneImg" width={24} height={24} /></div>
              </div>

            </div>
            <div className="HeroiphoneImage relative top-10 left-14">
              <Image src={"/HeroIphone.svg"} alt="iphoneHeroImg" width={400} height={24} />
            </div>
          </div>
          <div className="dots"><Image src={"/dotFrame.svg"} alt="iphoneImg" width={100} height={24} /></div>
        </div>
      </div>

            <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] flex items-center"><span className="ml-8 text-[#DB4444]">Today's</span></div>            

      <div className="Today's mb-20 mt-6 flex justify-between gap-20 items-baseline">
        <div className="">
          <div className="1-1">
          <div className="text-3xl font-semibold">Flash Sales</div>
          </div>
        </div>

        <div className="1-2">
          <Image src={"/flashSale.svg"} alt="" width={280} height={100}/>
        </div>

        <div className="1-3">
        <Image src={"/arrows.svg"} alt="" width={100} height={100} className="ml-80" />
        </div>
      </div>


    </div>
  );
}

import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="Main mx-28">
      <div className="border-t-[1px] border-t-slate-200 my-4 w-full" />

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

      <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] font-semibold flex items-center"><span className="ml-8 text-[#DB4444]">Today's</span>
      </div>

      <div className="Today's mb-20 mt-6 flex justify-between gap-20 items-baseline">
        <div className="">
          <div className="1-1">
            <div className="text-3xl font-semibold">Flash Sales</div>
          </div>
        </div>

        <div className="1-2">
          <Image src={"/flashSale.svg"} alt="" width={280} height={100} />
        </div>

        <div className="1-3">
          <Image src={"/arrows.svg"} alt="" width={100} height={100} className="ml-80" />
        </div>
      </div>


      <div className="flashProducts flex justify-around">

        <div className="Product1 w-[270px] h-[350px] flex flex-col gap-3 items-center text-center">
          <div className="Product1 w-[270px] h-[250px] bg-[#F5F5F5] rounded">
            <div className="h-[26px] w-[55px] bg-[#DB4444] relative top-3 left-3 text-white flex items-center justify-center">-40%</div>
            <div className="w-[270px] h-[200px] flex justify-center items-center"><Image src={"/g92-2-500x500 1.svg"} alt="" width={180} height={180} /></div>
          </div>
          <div>
            <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
            <p className="flex gap-5 justify-center"><span className="text-[#DB4444] text-[18px] font-semibold">$120</span>
              <span className="text-gray-500 font-semibold"><s>$160</s></span></p>
          </div>
        </div>

        <div className="Product2 w-[270px] h-[350px] flex flex-col gap-3 items-center text-center">
          <div className="Product1 w-[270px] h-[250px] bg-[#F5F5F5] rounded">
            <div className="h-[26px] w-[55px] bg-[#DB4444] relative top-3 left-3 text-white flex items-center justify-center">-35%</div>
            <div className="w-[270px] h-[200px] flex justify-center items-center"><Image src={"/keyboard.png"} alt="" width={190} height={180} /></div>
          </div>
          <div>
            <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
            <p className="flex gap-5 justify-center"><span className="text-[#DB4444] text-[18px] font-semibold">$120</span>
              <span className="text-gray-500 font-semibold"><s>$160</s></span></p>
          </div>
        </div>

        <div className="Product3 w-[270px] h-[350px] flex flex-col gap-3 items-center text-center">
          <div className="Product1 w-[270px] h-[250px] bg-[#F5F5F5] rounded">
            <div className="h-[26px] w-[55px] bg-[#DB4444] relative top-3 left-3 text-white flex items-center justify-center">-30%</div>
            <div className="w-[270px] h-[200px] flex justify-center items-center"><Image src={"/lcd.png"} alt="" width={190} height={180} /></div>
          </div>
          <div>
            <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
            <p className="flex gap-5 justify-center"><span className="text-[#DB4444] text-[18px] font-semibold">$120</span>
              <span className="text-gray-500 font-semibold"><s>$160</s></span></p>
          </div>
        </div>

        <div className="Product4 w-[270px] h-[350px] flex flex-col gap-3 items-center text-center">
          <div className="Product1 w-[270px] h-[250px] bg-[#F5F5F5] rounded">
            <div className="h-[26px] w-[55px] bg-[#DB4444] relative top-3 left-3 text-white flex items-center justify-center">-40%</div>
            <div className="w-[270px] h-[200px] flex justify-center items-center"><Image src={"/chair.png"} alt="" width={190} height={180} /></div>
          </div>
          <div>
            <p className="font-semibold">HAVIT HV-G92 Gamepad</p>
            <p className="flex gap-5 justify-center"><span className="text-[#DB4444] text-[18px] font-semibold">$120</span>
              <span className="text-gray-500 font-semibold"><s>$160</s></span></p>
          </div>
        </div>

      </div>

      <div>
        <div className="flex justify-center my-6"><button className="border-[1px] py-4 px-8 rounded text-white bg-[#DB4444]">View All Products</button></div>
      </div>

      <div className="categories">
        <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] font-semibold flex items-center"><span className="ml-8 text-[#DB4444]">Categories</span>
        </div>

        <div className="Today's mb-14 mt-6 flex justify-between gap-20 items-baseline">
          <div className="">
            <div className="text-3xl font-semibold">Browse By Category
            </div>
          </div>

        </div>
      </div>
      <div className="flex justify-between mb-6">
        <div className="product1 w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-CellPhone.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p>Phones</p>
          </div>
        </div>

        <div className="product1 w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-Computer.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p>Computers</p>
          </div>
        </div>

        <div className="product1 w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-SmartWatch.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p>Smart Watches</p>
          </div>
        </div>

        <div className="product1 w-[170px] h-[145px] bg-[#DB4444] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-Camera.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p className="text-white">Camera</p>
          </div>
        </div>

        <div className="product1 w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-Headphone.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p>Head Phones</p>
          </div>
        </div>

        <div className="product1 w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center  gap-3">
          <div>
            <Image src={"/Category-Gamepad.svg"} alt="" width={56} height={56} />
          </div>
          <div>
            <p>Gaming</p>
          </div>
        </div>

      </div>


      <div className="Month">
        <div className="flex mt-20 items-center">
          <div className=" w-5 h-10 rounded-md bg-[#DB4444] flex items-center">
          </div>
          <p className="ml-3 text-[#DB4444] font-semibold ">This Month</p>
        </div>

        <div className="Today's mb-14 mt-6 flex justify-between gap-20 items-baseline">
          <div className="text-3xl font-semibold">Best Selling Products
          </div>
          <div className=""><button className="border-[1px] py-4 px-12 rounded text-white bg-[#DB4444]">View All</button></div>
        </div>
      </div>

    </div>
  );
}

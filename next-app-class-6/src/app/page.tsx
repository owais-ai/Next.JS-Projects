import Image from "next/image";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="justify-center items-center text-center mt-9">
        <div className="flex justify-center flex-row text-center items-center gap-8">
          <div className="bg-gray-300 border-t-2 w-60"></div>
          <p className="text-2xl text-gray-700 font-bold">
            Sell Your Car on PakWheels and Get the Best Price
          </p>
          <div className="bg-gray-300 border-b-2 w-60"></div>
        </div>

        <div className="flex justify-center gap-32 mt-10">
          <div>
            <p className="font-bold text-xl text-blue-900 mb-4">
              Post your Ad on PakWheels
            </p>
            <ul className="text-gray-700">
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>Post your Ad for Free
                in 3 Easy Steps
              </li>
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>Get Genuine offers
                from Verified Buyers
              </li>
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>Sell your car Fast at
                the Best Price
              </li>
            </ul>
            <button className="flex items-center  justify-center  bg-red-600 text-white w-32 h-10 mt-3 rounded">
              Post Your Ad
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-20 border-l-2 border-gray-300" />
            <span className="px-4 text-gray-700 font-bold">OR</span>
            <div className="h-20 border-l-2 border-gray-300" />
          </div>

          <div>
            <p className="font-bold text-xl text-blue-900 mb-4 mr-8">
              Try PakWheels Sell It For Me
            </p>
            <ul className="text-gray-700">
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>Dedicated Sales
                Expert to Sell your Car
              </li>
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>We Bargain for you
                and share the Best Offer
              </li>
              <li className="flex item-start gap-2 my-1">
                <span className="text-green-600"> ✔ </span>We ensure Safe &
                Secure Transaction
              </li>
            </ul>
            <button className=" flex bg-blue-600 text-white text-center justify-center items-center w-36 h-10 mt-3 rounded">
              Register Your Car
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="ml-48 my-16 pt-10 text-gray-600">
          <div className="font-bold">Featured New Cars</div>
          <div>
            <ul className="flex gap-10 mt-6">
              <li className="font-bold border-b-2 border-blue-400 pb-2">
                Popular
              </li>
              <li>Upcoming</li>
              <li>Newly Launched</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mx-52 pb-16">
          <div className="bg-white"bg-white>
            <Image src="/Corolla.jpg" alt="Car" width={220} height={50} />Toyotta Corolla
          </div>
          <div className="bg-white"bg-white>
            <Image src="/Alto.png" alt="Car" width={220} height={50} /> Suzuki Alto
          </div>
          <div className="bg-white"bg-white>
            <Image src="/Swift.jpg" alt="Car" width={220} height={50} /> Suzuki Swift
          </div>
          <div className="bg-white"bg-white>
            <Image src="/Civic.jpg" alt="Car" width={220} height={50} /> Honda Civic
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
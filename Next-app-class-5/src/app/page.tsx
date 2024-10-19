import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    // <div className="bg-black text-purple-500 font-bold">
    //   <Navbar />
    //   <h1>tailwind css</h1>
    // </div>
    <div className="bg-yellow-600 text-black font-bold">
      {/* <head> */}
      {/* <div className="w-full bg-black"> */}
      <nav className="flex h-12 w-full bg-pink-600 justify-between items-center">
        <div className="bg-orange-500 w-56 h-5 text-center">1st Nav div</div>
        <div className="bg-blue-800 w-56 h-5 text-center">2nd Nav div</div>
        <div className="bg-orange-500 w-56 h-5 text-center">3rd Nav div</div>
      </nav>
      <div className="flex bg-blue-500 h-96 w-full justify-center items-center">This div contains Governer's Photo</div>
      <div className="bg-purple-500 w-full h-80 text-center flex justify-between">
        <div className="bg-red-600 w-96">This is 1st div</div>
        <div className="bg-orange-600 w-96">This is 2nd div</div>
        <div className="bg-red-600 w-96">This is 3rd div</div>
      </div>

      {/* <p className="text-red-900 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
    </div>
  );
}

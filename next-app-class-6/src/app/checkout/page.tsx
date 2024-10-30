import Navbar from "../components/Navbar";
import Link from "next/link";
export default function Checkout() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-semibold text-center uppercase py-6">
        enter your details
      </h1>
      <form className="flex flex-col justify-center items-center gap-6 py-10">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border border-blue-300 p-2 w-1/3 rounded"
        />
        <input
          type="email"
          className="p-2 rounded w-1/3 border border-blue-300"
          placeholder="Enter your Email"
        />
        <input
          type="text"
          placeholder="Card Number"
          className="p-2 rounded w-1/3 border border-blue-300"
        />
        <input
          type="text"
          placeholder="Address"
          className="border border-blue-300 p-2 w-1/3 rounded"
        />
      </form>
      <div className="flex justify-center items-center py-10">
        <Link href="/confirmation">
          <button className="bg-blue-800 rounded p-2 text-white">
            Place Your Order
          </button>
        </Link>
      </div>
    </div>
  );
}

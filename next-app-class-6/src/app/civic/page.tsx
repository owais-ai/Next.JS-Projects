import Link from "next/link";
import Image from "next/image";

export default function Civic() {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center font-bold underline text-2xl py-5">
        Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs
      </div>
      <div className="flex justify-center items-center pb-5">
        <Image src="/Civic.jpg" alt="Civic" width={350} height={400} />
      </div>

      <div className="flex gap-8 justify-center">
        <button className="bg-blue-800 text-white h-9 w-40 rounded">
          Book a test Drive
        </button>
        <button className="bg-white text-blue-800 border border-blue-800 h-9 w-48 rounded">
          Request Bank Finance
        </button>
        <button className="bg-white text-blue-800 border border-blue-800 h-9 w-28 rounded">
          Visit Place
        </button>
        <button className="bg-white text-blue-800 border border-blue-800 h-9 w-36 rounded">
          Car Inspection
        </button>
      </div>

      <div className="flex justify-center my-6 font-bold text-xl">
        Vehicle Description
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <div className="flex gap-1">
          <p className="font-bold">Number of Doors</p>
          <p>4</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Engine</p>
          <p>1800 CC</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Condition</p>
          <p>8.5 / 10</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Driven</p>
          <p>95000 KM</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Suspension Type</p>
          <p>Soft Suspension</p>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <div className="flex gap-1">
          <p className="font-bold">Avg</p>
          <p>13 KM per ltr</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Tranmission</p>
          <p>Automatic</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Fuel Type</p>
          <p>High Octane</p>
        </div>
      </div>
      <div className="flex justify-center my-5 text-green-600 text-2xl">
        PKR 70,50,000
      </div>
      <div className="flex justify-center">
        <Link href="/checkout">
          <button className="bg-blue-800 text-white w-40 h-12 rounded my-4">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

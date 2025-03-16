import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";


// Dummy data for cars
const carsData:any = {
  civic: {
    title: "Honda Civic 2024 Price in Pakistan, Images, Reviews & Specs",
    img: "/Civic.jpg",
    doors: 4,
    engine: "1800 CC",
    condition: "8.5 / 10",
    driven: "95000 KM",
    suspension: "Soft Suspension",
    avg: "13 KM per ltr",
    transmission: "Automatic",
    fuel: "High Octane",
    price: "PKR 70,50,000",
  },
  corolla: {
    title: "Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs",
    img: "/Corolla.jpg",
    doors: 4,
    engine: "1600 CC",
    condition: "9 / 10",
    driven: "85000 KM",
    suspension: "Standard Suspension",
    avg: "14 KM per ltr",
    transmission: "Automatic",
    fuel: "Petrol",
    price: "PKR 65,00,000",
  },
  alto: {
    title: "Suzuki Alto 2024 Price in Pakistan, Images, Reviews & Specs",
    img: "/Alto.png",
    doors: 4,
    engine: "660 CC",
    condition: "9.5 / 10",
    driven: "50000 KM",
    suspension: "Soft Suspension",
    avg: "18 KM per ltr",
    transmission: "Manual",
    fuel: "Petrol",
    price: "PKR 28,00,000",
  },
  swift: {
    title: "Suzuki Swift 2024 Price in Pakistan, Images, Reviews & Specs",
    img: "/Swift.jpg", 
    doors: 4,
    engine: "660 CC",
    condition: "9.5 / 10",
    driven: "50000 KM",
    suspension: "Soft Suspension",
    avg: "18 KM per ltr",
    transmission: "Manual",
    fuel: "Petrol",
    price: "PKR 28,00,000",
  },
};

export default function CarPage({params}:{params:{car:string}}) { 
   
const carData =  carsData[params.car]


  return (
    <div className="bg-gray-100">
      {/* Title */}
      <div className="flex justify-center items-center font-bold underline text-2xl py-5 px-4">
        {carData.title}
      </div>

      {/* Car Image */}
      <div className="flex justify-center items-center pb-5 px-4">
        <Image
          src={carData.img}
          alt={carData.title}
          width={350}
          height={400}
          className="rounded"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center px-4">
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

      {/* Vehicle Description */}
      <div className="flex justify-center my-6 font-bold text-xl">
        Vehicle Description
      </div>

      {/* Vehicle Specifications */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-4 px-4">
        <div className="flex gap-1">
          <p className="font-bold">Number of Doors:</p>
          <p>{carData.doors}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Engine:</p>
          <p>{carData.engine}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Condition:</p>
          <p>{carData.condition}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Driven:</p>
          <p>{carData.driven}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Suspension Type:</p>
          <p>{carData.suspension}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 px-4">
        <div className="flex gap-1">
          <p className="font-bold">Avg:</p>
          <p>{carData.avg}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Transmission:</p>
          <p>{carData.transmission}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Fuel Type:</p>
          <p>{carData.fuel}</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="flex justify-center my-5 text-green-600 text-2xl">
        {carData.price}
      </div>

      {/* Payment Button */}
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
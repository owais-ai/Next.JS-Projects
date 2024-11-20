import Image from "next/image";
export default function Navbar() {
  return (
    <div className="bg-[rgb(4,78,131)] mt-0 h-[74px]">
      <div className="flex flex-col md:flex-row gap-20 mx-6 text-center items-center justify-center">
        <Image className="md:mt-5 z-10 justify-center" src="/logo.png" alt="logo" width="84" height="50"/>
        <span className="text-blue-200 mt-5 text-center text-2xl font-bold hidden md:mb-20 md:block">Tuition Free Education Program on Latest Technologies</span>
        <ul className="hidden md:flex md:flex-row gap-10 text-[16px] mr-5 ml-auto text-white mt-7 md:mb-20">
          <li>Home</li>
          <li>Apply</li>
          <li>Jobs</li>
          <li>Result</li>
          <li>Courses</li>
        </ul>
      </div>
    </div>
  );
}

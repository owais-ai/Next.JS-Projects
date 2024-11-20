import Image from "next/image";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex md:justify-between md:flex-row flex-col bg-gray-100 bg-cover bg-no-repeat bg-center min-h-screen w-full">
        <div className="md:mt-28 mt-16 md:ml-8 text-center">
          <span className="text-[rgb(4,78,131)] text-6xl font-extrabold">
            Governor Sindh
          </span>
          <br />
          <span className="text-[rgb(4,78,131)] text-4xl">
            Kamran Khan Tessori
          </span>
          <br />
          <br />
          <span className="text-[rgb(46,182,232)] text-4xl font-bold">
            Certified Cloud <br />
            Applied Generative AI <br />
            Engineer (GenEng)
          </span>
          <br />
          <br />
          <span className="text-[rgb(4,78,131)] text-2xl font-extrabold">
            Earn up to $5,000 / month
            <br />
            <br />
            Now admissions are open in
            <br />
            Hyderabad
          </span>
          <br />
          <br />
          <div className="flex md:flex-row flex-col py-6">
            <div>
              <button className="bg-[rgb(4,78,131)] py-4 px-14 mt-4 text-white font-bold rounded">
                APPLY NOW
              </button>
            </div>
            <div className="mt-4">
              <span className="md:ml-28 text-3xl font-bold text-[rgb(4,78,131)]">
                562,143
              </span>
              <br />
              <span className="md:ml-20 font-normal text-[rgb(4,78,131)]">
                Accepted Applications
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Image
            src="/cover.png"
            alt="cover"
            width="800"
            height="60"
            className="md:ml-[25%] mt-10"
          />
        </div>
      </div>
      <div>
        <h1 className="text-[rgb(4,78,131)] text-center px-2 font-extrabold text-3xl mt-14 mb-12">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="px-7 pb-8 text-[20px] text-zinc-800 tracking-normal md:tracking-wide text-cente text-justify">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
      </div>
      <div className="flex md:justify-around justify-center items-center md:items-stretch p-2 gap-5 md:gap-0 md:flex-row flex-col">
        <Image
          className="rounded-xl"
          src="/imageWebsite.jpg"
          alt="image"
          width={400}
          height={50}
          layout="fixed"
        />
        <Image
          className="rounded-xl"
          src="/imageWebsite2.jpg"
          alt="image"
          width={400}
          height={50}
        />
        <Image
          className="rounded-xl"
          src="/imageWebsite3.jpg"
          alt="image"
          width={400}
          height={50}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center p-2 gap-3 mt-10 mb-20">
        <Image
          className="rounded-xl"
          src="/slideShow1.6f890b58.jpg"
          alt="image"
          width={650}
          height={50}
        />
        <Image
          className="rounded-xl"
          src="/slideShow7.9e3fcc75.jpg"
          alt="image"
          width={650}
          height={50}
        />
      </div>
      <div className="text-[rgb(4,78,131)] text-4xl text-center md:text-start font-bold md:pl-8">
        Core Courses Sequence
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:pl-10 gap-8 pt-10">
        <Image
          className="rounded-lg"
          src="/programming_fundamentals.49cca4e9.jpg"
          alt="image"
          width={300}
          height={50}
        />
        <Image
          className="rounded-lg"
          src="/nextjs.3dff0f70.jpg"
          alt="image"
          width={300}
          height={50}
        />
        <Image
          className="rounded-lg"
          src="/earn_as_your_learn.b8248a49.jpg"
          alt="image"
          width={300}
          height={50}
        />
      </div>
      <div className="text-[rgb(4,78,131)] text-4xl text-center md:text-start font-bold md:pl-8 mt-10">
        Advanced Courses
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:pl-10 gap-8 pt-10 pb-10">
        <Image
          className="rounded-lg"
          src="/AI.39397d24.jpg"
          alt="image"
          width={300}
          height={50}
        />
        <Image
          className="rounded-lg"
          src="/metaverse.06eccb60.jpg"
          alt="image"
          width={300}
          height={50}
        />
        <Image
          className="rounded-lg"
          src="/iot.16f7b003.jpg"
          alt="image"
          width={300}
          height={50}
        />
        <Image
          className="rounded-lg"
          src="/automation.a77dbbe8.jpg"
          alt="image"
          width={300}
          height={50}
        />
      </div>
    </div>
  );
}

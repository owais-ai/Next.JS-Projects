import Image from "next/image"
import Link from "next/link"
import Service from "../components/Service"

export default function Blog() {
    return (
        <div className="">
            <div className="flex flex-col gap-2 items-center justify-center absolute top-36 z-10 left-[46%]">
                <h3 className="text-4xl tracking-wider font-bold">Blog</h3>
                <p className="flex gap-2"> <Link href={'/'}>Home</Link><Image src={'/Vector.svg'} alt="" width={10} height={10} /> <span><Link href={'#'}>Blog</Link></span> </p>
            </div>
            <div className="h-52 relative">
                <Image src={'/cover.jpeg'} alt="cover" layout="fill" className="object-cover object-center opacity-40" />
            </div>

            <div className="flex justify-around mx-24 my-16">

                {/* first colomn */}
                <div className="1">
                    <div>
                        <Image src={'/41417cd682c30a19eecaf20a549cee89.jpeg'} alt="" width={600} height={600} className="rounded-md" />
                    </div>
                    <div className="my-6">
                        <Image src={'/Group 172.svg'} alt="" width={300} height={600} />
                    </div>
                    <div>
                        <h3 className="text-3xl">Going all-in with millennial design</h3>
                    </div>
                    <div>
                        <p className="text-[#9F9F9F] py-4 w-[600px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                    </div>
                    <div>
                        <button className="border-b-2 border-slate-400">Read More</button>
                    </div>
                    <div className="relative w-[600px] h-[400px] mt-16">
                        <Image src={'/writing.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                    </div>
                    <div className="my-6">
                        <Image src={'/Group 172.svg'} alt="" width={300} height={600} />
                    </div>

                    <div>
                        <h3 className="text-3xl">Exploring new ways of decorating</h3>
                    </div>
                    <div>
                        <p className="text-[#9F9F9F] py-4 w-[600px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                    </div>
                    <div>
                        <button className="border-b-2 border-slate-400">Read More</button>
                    </div>

                    <div className="relative w-[600px] h-[400px] mt-16">
                        <Image src={'/4190307dc6c7273c0bbf5086605997e4.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                    </div>
                    <div className="my-6">
                        <Image src={'/Group 172.svg'} alt="" width={300} height={600} />
                    </div>

                    <div>
                        <h3 className="text-3xl">Handmade pieces that took time to make</h3>
                    </div>
                    <div>
                        <p className="text-[#9F9F9F] py-4 w-[600px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                    </div>
                    <div>
                        <button className="border-b-2 border-slate-400">Read More</button>
                    </div>

                </div>

                {/* second colomn */}
                <div className="2">
                    <div className="relative">

                        {/* Input Field */}
                        <input
                            type="text"
                            className="border-2 border-slate-300 outline-none rounded-md py-2 pl-5 pr-10 w-60"
                        />

                        {/* Search Icon */}
                        <div className="absolute inset-y-0 right-3 flex items-center">
                            <button><Image
                                src="/akar-icons_search.svg"
                                alt="Search Icon"
                                width={20}
                                height={20}
                            /></button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mt-10 mb-6">Categories</h2>
                        <div className="flex justify-between">
                            {/* 1st category line */}
                            <div>
                                <ul className="text-[#9F9F9F]">
                                    <li className="py-3">Crafts</li>
                                    <li className="py-3">Design</li>
                                    <li className="py-3">Handmade</li>
                                    <li className="py-3">Interior</li>
                                    <li className="py-3">Wood</li>
                                </ul>
                            </div>
                            {/* 2nd category line */}
                            <div>
                                <ul className="text-[#9F9F9F]">
                                    <li className="py-3">2</li>
                                    <li className="py-3">8</li>
                                    <li className="py-3">7</li>
                                    <li className="py-3">1</li>
                                    <li className="py-3">6</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl mt-16">Recent Posts</h3>
                    </div>

                    <div className="flex mt-10 gap-2 items-center">
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={'/8b94b8e3a17bbb18c564006d557e73b1.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                        </div>

                        <div className="w-36">
                            <p>Going all-in with millennial design</p>
                            <p className="text-[#9F9F9F] pt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-2 items-center">
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={'/309ac985861a262b8622e7528e08049f.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                        </div>

                        <div className="w-40">
                            <p>Exploring new ways of decorating</p>
                            <p className="text-[#9F9F9F] pt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-2 items-center">
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={'/6615f4968338e0a7004a86529ecf85c9.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                        </div>

                        <div className="w-40">
                            <p>Handmade pieces that took time to make</p>
                            <p className="text-[#9F9F9F] pt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-2 items-center">
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={'/cfbc72a9932875eeb20db551bb01abb3.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                        </div>

                        <div className="w-36">
                            <p>Modern home in Milan</p>
                            <p className="text-[#9F9F9F] pt-2">03 Aug 2022</p>
                        </div>
                    </div>

                    <div className="flex mt-10 gap-2 items-center">
                        <div className="relative w-[80px] h-[80px]">
                            <Image src={'/7de5c930d1538360f43cbfa1d7f00337.jpeg'} alt="" layout="fill" className="object-cover object-center rounded-md" />
                        </div>

                        <div className="w-36">
                            <p>Colorful office redesign</p>
                            <p className="text-[#9F9F9F] pt-2">03 Aug 2022</p>
                        </div>
                    </div>

                </div>


            </div>

            <div className="flex gap-10 my-10 justify-center">
                <button className="py-3 px-5 bg-[#B88E2F] text-white rounded-md">1</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">2</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">3</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">Next</button>
            </div>

                <Service/>

        </div>
    )
}
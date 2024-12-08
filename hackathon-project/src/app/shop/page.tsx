import Image from "next/image"
import Link from "next/link"
import Service from "../components/Service"

export default function Shop() {
    return (
        <div className="">
            <div className="flex flex-col gap-2 items-center justify-center absolute top-36 z-10 left-[46%]">
                <h3 className="text-4xl tracking-wider font-bold">Shop</h3>
                <p className="flex gap-2"> <Link href={'/'}>Home</Link><Image src={'/Vector.svg'} alt="" width={10} height={10} /> <span><Link href={'#'}>Shop</Link></span> </p>
            </div>
            <div className="h-52 relative">
                <Image src={'/cover.jpeg'} alt="cover" layout="fill" className="object-cover object-center opacity-40" />
            </div>

            <div className="h-20 relative">
                <Image src={'/Group 63.svg'} alt="" layout="fill" className="object-cover object-center" />
            </div>

            <div className="Products flex justify-around mt-10 mx-24 flex-wrap">

                <div className="prodcut1 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Stylish cafe chair</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut2 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Outdoor bar table and stool</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut3 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
                        <p className="text-[#898989]">Luxury big sofa</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 800.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut4 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
                        <p className="text-[#898989]">Small Mug</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 4.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 7.500.000</s></span></h4>
                    </div>
                </div>


                <div className="prodcut1 w-60 h-96 flex-wrap">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Stylish cafe chair</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut2 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Outdoor bar table and stool</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut3 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
                        <p className="text-[#898989]">Luxury big sofa</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 800.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut4 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
                        <p className="text-[#898989]">Small Mug</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 4.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 7.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut1 w-60 h-96 flex-wrap">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Stylish cafe chair</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut2 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Outdoor bar table and stool</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut3 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
                        <p className="text-[#898989]">Luxury big sofa</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 800.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut4 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
                        <p className="text-[#898989]">Small Mug</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 4.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 7.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut1 w-60 h-96 flex-wrap">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Stylish cafe chair</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut2 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Outdoor bar table and stool</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut3 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
                        <p className="text-[#898989]">Luxury big sofa</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 800.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut4 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
                        <p className="text-[#898989]">Small Mug</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 4.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 7.500.000</s></span></h4>
                    </div>
                </div>


                <div className="prodcut1 w-60 h-96 flex-wrap">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Stylish cafe chair</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut2 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
                        <p className="text-[#898989]">Outdoor bar table and stool</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut3 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
                        <p className="text-[#898989]">Luxury big sofa</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 800.000</s></span></h4>
                    </div>
                </div>

                <div className="prodcut4 w-60 h-96">
                    <div className="prodcut1 w-60 h-64 relative">
                        <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt="" layout="fill" className="object-cover object-center rounded" />
                    </div>
                    <div className="flex flex-col pt-2 rounded text-center mb-16 items-center bg-[#F4F5F7]">
                        <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
                        <p className="text-[#898989]">Small Mug</p>
                        <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 4.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 7.500.000</s></span></h4>
                    </div>
                </div>

            </div>

            <div className="flex gap-10 justify-center">
                <button className="py-3 px-5 bg-[#B88E2F] text-white rounded-md">1</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">2</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">3</button>
                <button className="py-3 px-5 bg-[#F9F1E7] text-black rounded-md">Next</button>
            </div>

            <Service/>

        </div>
    )
}
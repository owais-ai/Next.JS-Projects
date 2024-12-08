import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="">
            <div className="my-6 justify-between py-5 border-y-2 border-slate-200">
                <div className="flex justify-between my-6 mx-24">
                    <div className="1 flex flex-col gap-12">
                        <Image src={"/logo2.svg"} alt="" width={145} height={100} />
                        <p className="text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables, <br />
                            FL 33134 USA</p>
                    </div>

                    <div className="2 flex flex-col gap-6">
                        <h3 className="text-[#9F9F9F] font-semibold">Links</h3>
                        <ul className="flex flex-col gap-6 font-semibold">
                            <Link href={"/"}><li>Home</li></Link>
                            <Link href={"/shop"}><li>Shop</li></Link>
                            <Link href={"/blog"}><li>Blog</li></Link>
                            <Link href={"/contact"}><li>Contact</li></Link>
                        </ul>
                    </div>

                    <div className="3 flex flex-col gap-6">
                        <h3 className="text-[#9F9F9F] font-semibold">Help</h3>
                        <ul className="flex flex-col gap-6 font-semibold">
                            <Link href={"#"}><li>Payment Options</li></Link>
                            <Link href={"#"}><li>Returns</li></Link>
                            <Link href={"#"}><li>Privacy Policy</li></Link>
                        </ul>
                    </div>

                    <div className="4 flex flex-col gap-6">
                        <h3 className="text-[#9F9F9F] font-semibold">Newsletter</h3>
                        <div className="flex gap-4">
                            <input type="email" placeholder="Enter Your Email Address" className="border-b-[1px] border-black outline-none" />
                            <button className="border-b-[1px] border-black">SUBSCRIBE</button>
                        </div>
                    </div>

                </div>

            </div>
            <p className="ml-24 pb-6">&copy; 2024 furino. All rights reverved</p>
        </div>
    )
}
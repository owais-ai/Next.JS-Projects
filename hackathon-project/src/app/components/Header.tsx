import Image from "next/image"
import Link from "next/link"

export default function Heaader() {
    return (
        <div className="flex items-center justify-between py-5 mx-24    ">
            <div className="1">
                <Link href={"/"}><Image src={"/logo2.svg"} alt="" width={185} height={100} /></Link>
            </div>

            <div className="2">
                <ul className="flex gap-14 font-semibold">
                    <Link href={"/"}><li>Home</li></Link>
                    <Link href={"/shop"}><li>Shop</li></Link>
                    <Link href={"/blog"}><li>Blog</li></Link>
                    <Link href={"/contact"}><li>Contact</li></Link>
                </ul>
            </div>

            <div className="3 flex gap-8">
            <button><Image src={"/mdi_account-alert-outline.svg"} alt="" width={25} height={10} /></button>
            <button><Image src={"/akar-icons_search.svg"} alt="" width={25} height={10} /></button>
            <button><Image src={"/akar-icons_heart.svg"} alt="" width={25} height={10} /></button>
            <button><Image src={"/ant-design_shopping-cart-outlined.svg"} alt="" width={25} height={10} /></button>
            </div>
        </div>
    )
}
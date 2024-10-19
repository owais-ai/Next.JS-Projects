import Link from "next/link"
import Navbar from "../components/Navbar"
export default function Category() {
    return (<div>
        <Navbar />
        <h1>This is Category Page</h1>
        <Link href="/category/sports">Sports</Link>
    </div>)
}
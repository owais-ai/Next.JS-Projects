import Navbar from "@/app/components/Navbar";
import Link from "next/link";
const Sports = () => {
  return (
    <div>
        <Navbar/>
      <h1>This is Sports Page</h1>
      <Link href="www.google.com.pk">Google sports Internal</Link>
      <br></br>
      <Link href="https://www.google.com.pk">Google sports External</Link>
    </div>
  );
}
export default Sports;

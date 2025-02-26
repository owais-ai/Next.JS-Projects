import ProductLists from "./components/ProductLists";

console.log(ProductLists);

export default function Home() {
   
  return (
    <main className="flex justify-center items-center gap-20 text-4xl flex-col my-20">
      <h1>Redux Toolkit</h1>
      <ProductLists/>
     
    </main>
  );
}

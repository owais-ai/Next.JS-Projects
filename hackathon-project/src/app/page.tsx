import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="hero bg-[url('/background-hero.jpeg')] w-full bg-cover bg-center rounded-md h-[600px]">
        <div className="w-[600px] h-[400px] relative top-32 left-[650px] flex items-center justify-center">
          <div className="w-[450px] h-[300px] bg-[#FFF3E3] flex flex-col gap-1 justify-end items-start px-10">
            <p>New Arrival</p>
            <h1 className="text-3xl text-[#B88E2F] font-bold">Discover Our <br />New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="bg-[#B88E2F] py-4 px-16 text-white mt-10 mb-5">Buy Now</button>
          </div>
        </div>

      </div>

      <div className="range">
        <div className="range1 flex flex-col items-center mt-16 gap-1">
          <h1 className="text-3xl text-[#333333] font-bold">Browse The Range</h1>
          <p className="text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="range2 my-12 flex justify-between mx-32">
          <div className="2.1 flex flex-col gap-4 items-center w-[350px] h-[500px]">
            <Image src={"/Mask Group.svg"} alt="" width={380} height={381} className="object-cover rounded-md object-left h-full w-full" />
            <p className="text-[#333333] text-xl font-semibold">Dining</p>
          </div>
          <div className="2.2">
            <div className="1 flex flex-col gap-4 items-center w-[350px] h-[500px]">
              <Image src={"/Image-living room.svg"} alt="" width={380} height={381} className="object-cover rounded-md object-left h-full w-full" />
              <p className="text-[#333333] text-xl font-semibold">Living</p>
            </div>
          </div>
          <div className="2.3">
            <div className="1 flex flex-col gap-4 items-center w-[350px] h-[500px]">
              <Image src={"/Mask Group2.svg"} alt="" width={380} height={381} className="object-cover rounded-md object-left h-full w-full" />
              <p className="text-[#333333] text-xl font-semibold">Bedroom</p>
            </div>
          </div>
        </div>
      </div>

      <div className="products mt-16 mx-24">
        <div className="text-center">
          <h1 className="text-3xl text-[#3A3A3A] font-bold">Our Products</h1>
        </div>
        <div className="my-10 flex justify-between flex-wrap">

          <div className="product1 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/43eebd52ea72d60650f31030ec4bf7e6.png'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Syltherine</h3>
              <p className="text-[#898989]">Stylish cafe chair</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
            </div>
          </div>

          <div className="product2 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image
                src="/4a5dbc0c29efbae1beca6ab40dd9b598.jpeg"
                alt=""
                layout="fill" // Make the image fill the parent div
                className="rounded object-cover object-center" // Adjust object-fit and position
              />
            </div>
            <div className="flex flex-col pt-2 rounded text-center">
              <h3 className="text-2xl text-[#3A3A3A]">Respira</h3>
              <p className="text-[#898989]">Outdoor bar table and stool</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 500.000</s></span></h4>
            </div>
          </div>

          <div className="product3 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/7c62fb49f7d4a1a6a5dc5959b40150ed.png'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Lolito</h3>
              <p className="text-[#898989]">Luxury big sofa</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
            </div>
          </div>

          <div className="product4 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/a7c05024ab4e27374edb12195b6559e2.png'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
              <p className="text-[#898989]">Small Mug</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
            </div>
          </div>

          <div className="product5 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/ea43a4c55f9e28aa3592f17ff47a4303.png'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Muggo</h3>
              <p className="text-[#898989]">Small Mug</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 150.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
            </div>
          </div>

          <div className="product6 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/e77ede2f478b2f26210bd264978981f6.jpeg'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Pingky</h3>
              <p className="text-[#898989]">Cute bed set</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 7.000.000</span> <span className="text-[#B0B0B0]"><s>Rp 14.000.000</s></span></h4>
            </div>
          </div>

          <div className="product7 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/bdb0310fb379a6b1828809d2c0652533.png'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Leviosa</h3>
              <p className="text-[#898989]">Stylish cafe chair</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 2.500.000</span> <span className="text-[#B0B0B0]"><s>Rp 3.500.000</s></span></h4>
            </div>
          </div>

          <div className="product8 flex flex-col items-center basis-1/4">
            <div className="h-[350px] w-56 relative">
              <Image src={'/3d98b27fb98ee49958d7089f10d39dfe.jpeg'} alt=""
                layout="fill"
                className="rounded object-cover object-center" /></div>
            <div className="flex flex-col pt-2 rounded text-center mb-16">
              <h3 className="text-2xl text-[#3A3A3A]">Potty</h3>
              <p className="text-[#898989]">Minimalist flower pot</p>
              <h4 className="flex gap-3"><span className="text-[#3A3A3A]">Rp 500.000</span> <span className="text-[#B0B0B0]"><s>Rp 950.000</s></span></h4>
            </div>
          </div>

        </div>
        <div className="button flex justify-center my-8">
          <button className="text-[#B88E2F] border-[1px] font-semibold py-3 px-20 border-[#B88E2F]">Show More</button>
        </div>
      </div>

      <div className="explore-more px-24 flex gap-12 items-center justify-between my-10 p-8 bg-[#FCF8F3]">

        <div className="explore1 basis-1/3 flex flex-col gap-6 items-start">
          <h1 className="text-3xl font-bold font-sans text-[#3A3A3A]">50+ Beautiful rooms inspiration</h1>
          <p className="text-[#616161]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="bg-[#B88E2F] font-sans text-white font-semibold py-3 px-12">Explore More</button>
        </div>

        <div className="explore2 basis-1/3">
          <Image src={"/Image.svg"} alt="" width={380} height={381} className="rounded-md"></Image>
        </div>
        <div className="explore3 basis-1/3 flex flex-col gap-12">
          <Image src={'/exploreImage.png'} alt="" width={300} height={381} className="rounded-md"></Image>
          <Image src={'/Indicator.svg'} alt="" width={80} height={30} className="rounded-md"></Image>
        </div>

      </div>

      <div className="setup">

        <div className="text-center leading-8 py-4">
          <p className="text-[#616161] font-semibold">Share your setup with</p>
          <h1 className="text-3xl text-[#3A3A3A] font-bold">#FuniroFurniture</h1>
        </div>

        <div className="w-full">
          <Image src={'/Images.svg'} alt="" width={130} height={30} className="w-full -mt-8 object-cover object-center rounded-md"></Image>
        </div>

      </div>

    </div>
  );
}

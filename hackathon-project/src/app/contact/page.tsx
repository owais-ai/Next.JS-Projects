import Image from "next/image"

export default function Contact() {
    return (
        <div className="">

            <div>
                <div className="flex flex-col items-center justify-around mt-16 gap-1">
                    <h1 className="text-3xl text-[#333333] font-bold pb-3">Get In Touch With Us</h1>
                    <p className="text-[#9F9F9F] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
            </div>
            <div className="flex justify-center gap-14 my-20">
                <div className="">
                    <Image src={'/contaactDetails.svg'} alt="" width={350} height={150}
                    className="-mt-10"
                    />
                </div>

                <div className=" flex flex-col gap-10">
                    <div className="flex flex-col ml-24">
                        <p className="mb-2">Your Name</p>
                        <input type="text" 
                        placeholder="Name" 
                        className="py-2 px-4 outline-none border-[2px] border-slate-200 rounded w-[450px]" />
                    </div>

                    <div className="flex flex-col ml-24">
                        <p className="mb-2">Email Address</p>
                        <input type="email"
                        placeholder="Email" 
                        className="py-2 px-4 outline-none border-[2px] border-slate-200 rounded w-[450px]" />
                    </div>

                    <div className="flex flex-col ml-24">
                        <p className="mb-2">Subject</p>
                        <input type="text" 
                        placeholder="Subject" 
                        className="py-2 px-4 outline-none border-[2px] border-slate-200 rounded w-[450px]" />
                    </div>

                    <div className="flex flex-col ml-24">
                        <p className="mb-2">Message</p>
                        <textarea 
                        placeholder="Message" 
                        className="pt-2 pb-20 overflow-hidden px-4 outline-none border-[2px] border-slate-200 rounded w-[450px]" />
                    </div>
                    <button className="bg-[#B88E2F] text-white w-44 ml-24 py-2 px-8 rounded">Submit</button>

                </div>
            </div>

            <div className="bg-[#F9F1E7] w-full h-60 mt-16 relative">
                <Image src={'/Feature.svg'}
                    alt=""
                    layout="fill"
                    className="object-contain object-center px-16"
                />
            </div>

        </div>
    )
}
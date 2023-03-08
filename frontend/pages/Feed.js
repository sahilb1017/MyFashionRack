import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Feed() {
    return(
        <div className="w-full">
            <Navbar/>

            <div className='w-full  h-9  text-white mt-10'>
                <div className="grid place-items-center">
                    <div className="flex justify-between items-center h-9 w-[80%] bg-lightGrey rounded-xl outline outline-1 outline-pink px-7">
                        <Link href="#" className="group">
                            Streetwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Workwear
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Minimalist
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Formal
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Athleisure
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Vintage
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>
                        <Link href="#" className="group">
                            Second-hand
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-white"></span>
                        </Link>

                    </div>
                </div>
            </div>


            <div className='w-full  h-96  text-white mt-10'>
                <div className="grid place-items-center">
                    <div className="flex justify-between  h-96 w-[80%]">
                        <div className="bg-lightGrey h-96 w-60 rounded-xl outline outline-1 outline-pink">
                            
                        </div>

                        <div className="grid gap-9">
                            <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                            
                            </div>
                            

                            <div className="bg-lightGrey h-60 w-60 rounded-xl outline outline-1 outline-pink">
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-screen">

            </div>
        </div>
    )
}




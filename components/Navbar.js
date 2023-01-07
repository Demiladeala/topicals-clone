import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {CiSearch} from 'react-icons/ci'
import {AiOutlineMenu} from 'react-icons/ai'
    
    
const Navbar = () => {

    return ( 
        <>
        <div className="sticky top-0 z-50 shadow-sm w-full">
            <div className=' z-100 w-full px-2 py-3 text-center text-sm bg-[#c4c3ff] font-sans'><p>Subscribe to save 10% on your next Topicals delivery<a className="text-sm ml-3 underline">Learn More</a></p></div>
            <div className="flex w-full h-16 justify-between items-center px-14 navbar bg-[#f6f6f6] sm:justify-between">
                <div className="w-8 lg:hidden">
                    <div className=" cursor-pointer relative right-5"><AiOutlineMenu size={30} /></div>
                </div>
                <div className="hidden lg:flex visible">
                    <li className=" text-sm ">Shop</li>
                    <li className="ml-7 text-sm">Holiday Gifts</li>
                    <li className=" ml-7 text-sm">Rewards</li>
                    <li className=" ml-7 text-sm">About</li>
                </div>
                <h1 className="font-bold text-3xl">TOPICALS</h1>

                <div className="flex">
                    <div className=" text-black ml-7 text-sm hidden md:flex visible"><CiSearch size={25}/><li>Search</li></div>
                    <li className="ml-7 text-sm cursor-pointer">Help</li>
                    <li className="ml-7 text-sm hidden md:flex visible">Account</li>
                    <li className="ml-7 text-sm hidden md:flex visible">Bag</li>
                    <div className="border-solid border border-black
                    w-5 h-5 rounded-full text-center ml-1 cursor-pointer"><span className="relative bottom-1">0</span></div>
                    
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Navbar;

/*  <div className='rounded bg-yellow-200'>
            <div>
                {props.image}
            </div>
    </div>

      <div className=' items-center w-[48%]'>
            <div className=' w-full h-[350px] mt-10 rounded'>
                <div className='w-full'>
                <Image className='w-full cursor-pointer' src={props.img} width={100} height={1}/>
                </div>
            </div>
            <div>
                <div className='items-center flex justify-between'>
                <span>{props.name}</span>
                <span>{props.prize}</span>
                </div>
                <span className=' italic block'>{props.description}</span>
                <Link className=' button bg-orange-500 text-center text-white block p-2 mt-4 rounded' href='/'>{props.button}</Link>
            </div>
        </div>
 */
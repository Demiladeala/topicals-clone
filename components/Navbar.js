import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import ReactDOM from 'react-dom';
import {AiOutlineMenu, AiOutlineClose, AiOutlineArrowLeft} from 'react-icons/ai'
import {CiShoppingCart} from 'react-icons/ci'
import { useState } from "react";



    
const Navbar = () => {
    const [nav, setNav]  = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    const [cart, setCart] = useState(false)

    const handleCart = () => {
        setCart(!cart)
    }


    return ( 
        <>
          <div onClick={handleCart} id='cart' className={cart ? 'fixed right-0 top-0 bg-black/70 w-full h-screen z-[200] ease-in duration-200':''}>
                <div className={cart ?
                'fixed right-0 top-0 w-[80%] sm:w-[40%] h-screen bg-white p-10 ease-in-out duration-500'
                :'hidden'}>
                    
                    <div className="flex cursor-pointer">
                        <AiOutlineArrowLeft onClick={handleCart} size={25}/>
                        <h3 className="px-4">Continue shopping</h3>
                    </div>

                    <h1 className="py-16 text-xl sm:text-2xl">Shopping Cart <span className="text-orange-600">(0 items)</span></h1>

                    <div className="items-center justify-center flex">
                         <CiShoppingCart  size={90}/>
                    </div>

                    <h1 className="text-center py-8 font-bold text-xl sm:text-2xl">Your Shopping Cart is empty</h1>

                    <Link className=' button bg-orange-500 text-center text-white block p-2 mt-4 rounded-xl' href='/products'>Continue Shopping</Link>

                </div>
            </div>


        <div className="sticky top-0 z-50 shadow-sm w-full">
            <div className=' z-100 w-full px-2 py-3 text-center text-sm bg-[#c4c3ff]'><p>Subscribe to save 10% on your next Mocha delivery<a className="text-sm ml-3 underline">Learn More</a></p></div>
            <div className="flex w-full h-16 justify-between items-center navbar bg-[#f6f6f6] sm:justify-between px-[20px]">
               
                <div className="hidden lg:flex visible">
                    <li className=" text-sm ml-4"><Link href='/products'>Shop</Link></li>
                    <li className=" ml-7 text-sm"><Link href='#about'>About</Link></li>
                </div>

                <div className="w-8 ml-3 z-10 cursor-pointer lg:hidden">
                   {nav? <AiOutlineMenu onClick={handleNav} size={28}/> :   <AiOutlineClose onClick={handleNav} size={25} className='mr-5 cursor-pointer' />}
                </div>

                

                <div className={!nav ? 'absolute top-0 left-0 w-full transform transition-transform duration-300 ease-in-out filter lg:hidden' : 'fixed top-0 left-[-100%] duration-300 ease-in-out'}>
                    <div className="flex flex-col justify-left bg-[#f6f6f6] items-left mt-[108px] h-screen">
                        <div className="flex justify-between mt-6 " >
                            <Link className={`text-xl font-normal mb-3 mx-4 `} onClick={handleNav} href='/'>Home</Link>
                          
                        </div>
                        <Link className="text-xl font-normal my-3 mx-4" onClick={handleNav} href='/products'>Products</Link>
                        <Link className="text-xl font-normal my-3 mx-4" onClick={handleNav} href='/contact'>Contact</Link>
                        <Link className="text-xl font-normal my-3 mx-4" onClick={handleNav} href='#spottie'>Spottie hottie</Link>
                        <Link href='/products' onClick={handleNav} className='bg-white rounded-full shadow-lg text-center font-bold text-sm w-[30%] p-2 mx-8 mt-6 hover:opacity-60'>Shop Now</Link>
                    </div>
                </div>

              



                <h1 className="font-bold text-[15px] mx-5 flex sm:text-center mr-2 lg:text-[20px]">MOCHA STORE</h1>

                <div className="flex">
                    <li className=" text-sm hidden md:flex visible cursor-pointer ">Help</li>
                    <li onClick={handleCart} className="ml-7 text-sm  md:flex visible cursor-pointer">Cart</li>
                    <div onClick={handleCart} className="border-solid border border-black
                    w-5 h-5 rounded-full text-center ml-1  cursor-pointer"><span className="relative bottom-[3px]">0</span></div>
                    
                </div>

              

            </div>
        </div>
        </>
     );
}
 
export default Navbar;


                                                     /*NAVBAR LEARNT ONLINE */

/*
    const [open , setOpen] = useState(false); //It's false because the btn is not open


function MobileNav({open,setOpen}){
    return(
        <div className={`absolute top-0 left-0 w-full transform ${open ? "-translate-y-0":"-translate-y-full"} transition-transform duration-300 ease-in-out filter lg:hidden`}>
            <div className="flex flex-col justify-left bg-[#f6f6f6] items-left mt-[108px] h-screen">
                <Link className={`text-xl font-normal my-3 mt-6 mx-4 `} href='/'>Home</Link>
                <Link className="text-xl font-normal my-3 mx-4" href='/products'>Products</Link>
                <Link className="text-xl font-normal my-3 mx-4" href='/contact'>Contact</Link>
                <Link className="text-sm font-normal my-3 mx-4" href='/'>help@mocha-store.com</Link>
                <Link className="text-sm font-normal my-3 mx-4" href='/'>+1(833) 908-0674</Link>
                <Link className="text-sm font-normal my-3 mx-4" href='/'>Look Good today??????</Link>
                <Link href='/products' className='bg-white rounded-full shadow-lg text-center font-bold text-sm w-[30%] p-2 mx-8 mt-6 hover:opacity-60'>Shop Now</Link>
            </div>
        </div>
    )
}

 <MobileNav open={open} setOpen={setOpen}/> 
                <div className="w-8 ml-3 lg:hidden">
                    <div className="group z-50 relative w-8 h-6 cursor-pointer flex-col justify-between items-center flex" onClick={() => {setOpen(!open)}}>
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5": ""}`}/>
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "w-0": "w-full"}`}/>
                        <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5": ""}`}/>
                    </div>
                </div>

*/








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

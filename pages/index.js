import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Card from '../components/Card';
import Category from '../components/Category';
import productsdata from '../components/Productsdata'
import fadedimg from '../public/fadedeyeimg.webp'
import favimg from '../public/favproductimg.webp'




export default function Home() {
  const cards = productsdata.map(item =>{
    return(
        <Card 
          key ={item.id}
          img ={item.image}
          name ={item.name}
          prize ={item.prize}
          description ={item.description}
          button ={item.button}
        />
    )
  })
  const category = productsdata.map(item =>{
    return(
      <Category 
          key ={item.id}
          img ={item.image}
          name ={item.name}
        />
    )
  })

 
  return (
    <>
    <header>
      <title>Moocha store</title>
      <link rel='icon' href='favicon.ico'/>
    </header>  

                        {/*image section*/}
    <section className="landing">
    
    </section>
    <div className='px-4 pb-16 pt-24 ml-3 tagline md:mb-10'>
        <h1 className='text-2xl md:text-4xl'>Stock <span className='italic'>up</span> and save!</h1>
        <h2 className=' text-lg pt-6 font-semibold'>Time to get your skincare shelf together.</h2>
        <h2 className='text-lg font-semibold mb-6'>Save 20% on bundles with code <span className='font-bold'>BOXME.</span></h2>
        <Link href='/' className='button rounded text-white px-4 py-1.5 text-sm'>Shop Now</Link>
    </div>
                        {/*product section*/}
    <section className='ml-3 '>
    <div className='px-4'>
        <h1 className='text-2xl mt-16 md:text-4xl'><span className='italic '>Shop </span>Holiday Gifts</h1>
        <h2 className=' text-sm pt-6 '>Make your skincare wishlist come true our with our exclusive holiday</h2>
        <h2 className='text-sm mb-6'>gifts, made for every skin type and shade.</h2>
    </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] m-auto'>
          {cards}
          </div>
    </section>

    <div className='w-full mb-52 mt-24 m-auto md:hidden'>
      <p className=' float-right mr-6'>Shop All</p>
      <div className='w-16 float-right relative left-16 top-6 bg-black h-[1px]'></div>
    </div>

    <section className='w-[77%] m-auto mt-10 rounded-lg flex flex-col md:flex-row-reverse gap-20 lg:my-28 '>
      <div className='w-full'>
        <Image src={fadedimg} className='rounded-lg overflow-hidden w-full bg-cover object-cover' width={300} height={100}/>
      </div>
      <div className='lg:mt-12'>
        <span className='bg-[#d8fdb0] text-[8px] p-1 rounded-lg'>New Arrival</span>
        <h2 className='text-2xl py-4'>Say <span className='italic'>hi</span> to Faded Eye</h2>
        <p className='text-sm'>We made our best-selling skin brightening formula into an 
        under eye mask with 15-minute results!</p>
        <p className='text-sm py-4'>Brighten, depuff, and let dark circles fade away.</p>
        <Link className=' button bg-orange-500 text-center text-white block  mt-4 rounded md:w-28 p-1' href='/'>Shop Now</Link>
      </div>
    </section>
    
    <div className='w-full h-[0.5px] mt-24 bg-black lg:w-[95%] m-auto'>

    </div>

      <section>
        <div>
        <h1 className='text-center mt-12 pb-8'><span className='italic'>Shop by Category</span></h1>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] m-auto'>
          {category}
          </div>
      </section>

      <section className='ml-3 mt-8'>
          <div className='px-4 '>
              <h1 className='text-2xl mt-20 md:text-4xl'><span className='italic '>Shop </span>Best Sellers</h1>
              <h2 className=' text-sm pt-3 '>Meet our best selling skincare solutions, for funner flare-ups ahead.</h2>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] m-auto mt-8'>
          {cards}
          </div>
    </section>

    <div className='w-full mb-44 mt-24 m-auto md:hidden'>
      <p className=' float-right mr-6'>Shop All</p>
      <div className='w-16 float-right relative left-16 top-6 bg-black h-[1px]'></div>
    </div>

    <div className='w-full mt-28 h-[0.5px]  bg-black lg:w-[95%] m-auto'>

    </div>
     
    <section className='w-[77%] m-auto mb-20 mt-10 rounded-lg flex flex-col md:flex-row gap-20 '>
      <div className='w-full'>
        <Image src={favimg} className='rounded-lg overflow-hidden w-full bg-cover object-cover' width={300} height={100}/>
      </div>
      <div className='lg:mt-12'>
        <span className='bg-[#ff5a61] text-white text-[8px] px-3 py-1 rounded-lg'>New</span>
        <h2 className='text-2xl py-4'>Never run out of your <span className='italic'>favorite</span> product</h2>
        <p className='text-sm py-3'>With your Mocha subscription, you'll automatically receive your favorite products, 
        delivered to your door at 10% off original prices.</p>
        <p className='flex text-sm py-1'>10% off each product</p>
        <p className='flex text-sm py-1'>Free shipping on subscription orders</p>
        <p className='flex text-sm py-1'>Easy cancellations</p>
        <Link className=' button bg-orange-500 text-center text-white block  mt-4 rounded md:w-28 p-1' href='/'>Shop Now</Link>
      </div>
    </section>

    <section className=' w-full h-[650px] spottie bg-[url(../public/spottie-image.webp)] relative overflow-hidden bg-cover bg-no-repeat bg-center text-white'>
      {/* */}
      <div className='text-center mt-8'>
        <h1 className='text-2xl font-semibold lg:text-3xl'><span className='italic font-light'>Join</span> the Spottie Hotties</h1>
        <p className='text-xs mt-5 lg:text-sm'>Joining the spottie hotties rewards program is no risk, all reward.</p>
      </div>
      <div className='flex gap-8 flex-col lg:mt-44  md:flex-row mt-20'>
          <div className='bg-white/10 shadow-md w-48 rounded-lg m-auto p-3'>
            <h2 className='font-bold text-xl'><span className='font-bold text-xl'>1</span> Sign up</h2>
            <p className='text-xs'>Create an account and get 25 
            points towards products.</p>
          </div>
          <div className='bg-white/10 shadow-md w-48 rounded-lg m-auto p-3'>
            <h2 className='font-bold text-xl'><span>2</span> Earn Points</h2>
            <p className='text-xs'>Earn points every time 
            you shop with us.</p>
          </div>
          <div className='bg-white/10 shadow-md w-48 rounded-lg m-auto px-2 py-3'>
            <h2 className='font-bold text-xl'><span>3</span> Redeem Points</h2>
            <p className='text-xs'>Redeem points for exclusive discounts.</p>
          </div>
          <Link href='/products' className='button rounded-md shadow-lg text-center m-auto text-sm w-28 p-2 '>Sign up</Link>
      </div>
    </section>

    <section className='text-center'>
      <h1 className='italic mt-20 text-3xl'>Meet our</h1>
      <h1 className='font-bold text-3xl'>Community</h1>
      <div className='flex gap-3 w-[90%] m-auto justify-center mt-4'>
        <div className='bg-[#c4c3ff] w-24 text-xs rounded-full py-1'>#mytopicals</div>
        <div className='bg-[#c4c3ff] w-24 text-xs rounded-full py-1'>#mytopicals</div>
        <div className='bg-[#c4c3ff] w-24 text-xs rounded-full py-1'>#faded</div>
        <div className='bg-[#c4c3ff] w-24 text-xs rounded-full py-1'>#highroller</div>
      </div>
      <div className='bg-[#c4c3ff] w-24 text-xs rounded-full py-1 mt-2 m-auto'>#highroller</div>
    </section>

    <section>
      <div className=''>
        <div className=' cell-1'>
        </div>
        <div className=' cell-2'>
        </div>
        <div className=' cell-3'>

        </div>
        <div className=' cell-4'>

        </div>
        <div className=' cell-5'>

        </div>
      </div>
    </section>

    </>

  )
}


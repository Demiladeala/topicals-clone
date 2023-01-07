import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return ( 
      <>
       {/*<section className='mt-40 h-20 flex justify-start items-center overflow-hidden'>
        <p class="marquee">
          <span>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</span>
        </p>
        <p class="marquee marquee2">
          <span>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</span>
        </p>

        </section>*/}



          <footer className=' w-full text-center p-5'>
            <div>
              <h2 className=' font-bold text-xl pt-3'>Help</h2>
              <h2 className='font-bold text-xl pt-3'>Information</h2>
              <h2 className='font-bold text-xl pt-3'>Legal</h2>
              <h2 className='font-bold text-xl pt-3'>Social</h2>
              <h2 className='font-bold text-xl pt-3'>Wanna chat?</h2>
              <p className='pt-4'>Email: help@mocha-store.com</p>
              <p className='pt-3'>Text: Mocha Store to +1(833) 908-0674</p>
              <p className='text-xs italic pt-3'>*I agree to receive recurring automated
                marketing text messages (e.g. cart reminders)
                at the phone number provided. Consent is not a 
                condition to purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel. View our Terms of Service and Privacy Policy.</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
            <span className='pt-10 md:justify-start'>&copy;{year} Mocha Store. All Rights Reserved</span>
            </div>
          </footer>
        </>
     );
}
 
export default Footer;

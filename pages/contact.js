const contact = () => {
    return ( 
        <div className="">
            <div className=" w-[80%] m-auto items-center">
                <h1 className="text-center text-3xl italic lg: mt-20 mb-20">Contact</h1>
                <div className=" flex gap-20 mb-10 px-8">
                    <h3 className="font-bold basis-[50%] lg:ml-40">Text</h3>
                    <p className="text-[12px] basis-[50%] lg:mr-40">
                    Text TOPICALS411 to +1 
                    (833) 908-0674 for all 
                    the latest updates on products, 
                    special announcements & more!
                    </p>
                </div>
                <div className="flex gap-20 mb-10 px-8">
                    <h3 className="font-bold basis-[50%] lg:ml-40">Email</h3>
                    <p className="underline decoration-dotted text-[12px] basis-[50%] lg:mr-40">
                    help@mytopicals.com
                    </p>
                </div>
                <div className=" flex gap-20 mb-10 px-8">
                    <h3 className="font-bold basis-[50%] lg:ml-40">Address</h3>
                    <p className="text-[12px] basis-[50%] lg:mr-40">
                    Topicals
                    202 Bicknell Avenue
                    Santa Monica, CA 90405
                    United States
                    </p>
                </div>
            </div>
            <div className=" ml-24">
                <div className="absolute b-[-575px] z-[-1] up-down" id="burst-8"></div>
            </div>
        </div>
     );
}
 
export default contact;
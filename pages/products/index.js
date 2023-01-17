import Link from "next/link";
import Image from "next/image";
import idimg from "../../public/productone.webp"

export const getStaticProps = async() => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: {products: data}
    }

}

const products = ({ products }) => {
    return ( 
        <>
            <div>
                <h1 className="text-center text-4xl font-bold mt-12 sm:mt-20">Collections</h1>
                {products.map(product => (
                    <Link href={'/products/' + product.id} key={product.id}>
                       
                       <div className="w-[95%] m-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <div className=" bg-gray-200 m-auto mt-8 hover:bg-orange-400 hover:ease-in-out duration-300">
                            <Image className="transform hover:scale-110" src={idimg}></Image>
                            <span className="text-black relative top-5">{product.username}</span>
                            </div>
                            <div className=" bg-gray-200 m-auto mt-8 hover:bg-orange-400 hover:ease-in-out duration-300">
                            <Image className="transform hover:scale-110" src={idimg}></Image>
                            <span className="text-black relative top-5">{product.username}</span>
                            </div>
                            <div className=" bg-gray-200 m-auto mt-8 hover:bg-orange-400 hover:ease-in-out duration-300">
                            <Image className="transform hover:scale-110" src={idimg}></Image>
                            <span className="text-black relative top-5">{product.username}</span>
                            </div>
                            <div className=" bg-gray-200 m-auto mt-8 hover:bg-orange-400 hover:ease-in-out duration-300">
                            <Image className="transform hover:scale-110" src={idimg}></Image>
                            <span className="text-black relative top-5">{product.username}</span>
                            </div>
                       </div>

                    </Link>
                ))}
            </div>

           {/*  <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] m-auto my-20'>
                {products}
            </div>*/}


        </>
     );
}
 
export default products;
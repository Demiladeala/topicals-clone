import Link from "next/link";
import Image from "next/image";
import idimg from "../../public/productone.webp"

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(product =>{
        return{
            params: { id: product.id.toString() }
        }
    })
    return{
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const  data = await res.json();

    return{
        props: {product: data}
    }
}

const Details = ({product}) => {
    return ( 
        <div className="flex flex-col sm:flex-row">
           <div className="w-[90%] m-auto basis-[45%]"><Image src={idimg}></Image></div>

            <div className="basis-[45%] my-20 m-auto">
                <h1 className="justify-center font-bold text-2xl my-4">{product.username}</h1>
                <span className="text-orange-500">&#9733; &#9733; &#9733; &#9733; <span>&#9734;</span></span>
                <p className="my-4 font-bold">Details:</p>
                <span>{product.username} made in Nigeria</span>
                <span className="text-red-500">{product.suite}</span>

                <div className="flex gap-8 my-8">
                <Link className=' w-28 bg-white/25 text-black border-gray-800 border border-solid hover:scale-110 text-center block p-2 mt-4 rounded' href='#cart'>Add to Cart</Link>
                <Link className='w-28 bg-orange-500 text-center hover:scale-110 text-white block p-2 mt-4 rounded' href='#cart'>Buy Now</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Details;
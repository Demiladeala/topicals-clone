import Link from "next/link";

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
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8  w-[90%] m-auto font-bold text-base">
                            <div className='bg-[url("../public/productimg3.webp")]   bg-center my-12 w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] hover:scale-110 flex justify-left items-center m-auto'><span className="relative top-36 sm:top-48">{product.username}</span></div>
                            <div className='bg-[url("../public/productimg6.webp")] bg-center my-12 w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] hover:scale-110 flex justify-left items-center m-auto'><span className="relative top-36 sm:top-48">{product.username}</span></div>
                            <div className='bg-[url("../public/grid-img2.webp")]   bg-center my-12 w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] hover:scale-110 flex justify-left items-center m-auto'><span className="relative top-36 sm:top-48">{product.username}</span></div>
                            <div className='bg-[url("../public/productimg6.webp")] bg-center my-12 w-[200px] h-[250px] sm:w-[250px] sm:h-[350px] hover:scale-110 flex justify-left items-center m-auto'><span className="relative top-36 sm:top-48">{product.username}</span></div>
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
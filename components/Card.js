import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {
    return ( 
        <div className='rounded overflow-hidden'>
            <div>
                <img className='cursor-pointer rounded'  src={props.img} />
            </div>
            <div>
            <span>{props.name}</span>
            <span className=' italic block text-[8px]'>{props.description}</span>
            <span>{props.prize}</span>
            <Link className=' button bg-orange-500 text-center text-white block p-2 mt-4 rounded' href='/'>{props.button}</Link>
            </div>
        </div>
     );
}
 
export default Card;
 
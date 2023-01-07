import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Category = (props) => {
    return ( 
        <div className='rounded overflow-hidden'>
            <div>
                <img className='cursor-pointer rounded-xl'  src={props.img} />
            </div>
            <div>
            <span>{props.name}</span>
            </div>
        </div>
     );
}
 
export default Category;
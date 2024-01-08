import Image from 'next/image';
import React from 'react';
import { TiStar } from 'react-icons/ti';

export default function Card(props: { data: any }) {
  // const filledStars = Math.round(props.data.rating);
  // const emptyStars = 5 - filledStars;


  return (
    <div key={props.data.id} className="group p-4 relative flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" title={props.data.title} style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
      <Image
        src={props.data.image}
        alt={`${props.data.title} (${props.data.category})`}
        unoptimized
        width={150}
        height={150}
      />
      <div className="mt-3 text-md flex justify-center items-center flex-col font-medium transition-all duration-700 ease-in-out">
        <p className='w-10/12 truncate'>{props.data.title}</p>
        <p>$ {props.data.price}</p>
        <p>{props.data.category}</p>
        <p>{props.data.rating.count > 0 ? 'Available' : 'Out of Stock'} </p>
        <div className="flex justify-center items-center">
        <TiStar color={'#ffc107'} />
        </div>
      </div>
    </div>
  );
}

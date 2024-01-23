import Image from 'next/image';
import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { TiStar } from 'react-icons/ti';

export default function Card(props: { data: any }) {

  const filledStars = Math.round(props.data.rating.rate);
  const remainderStars = 5 - filledStars;

  const renderStars = (count: number, filled: boolean) => {
    const starArray = [];

    for (let i = 0; i < count; i++) {
      starArray.push(<TiStar key={i} color={filled ? '#ffc107' : '#ddd'} />);
    }

    return starArray;
  };


  return (
    <div key={props.data.id} className="group p-4 relative flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" title={props.data.title} style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
      <Image
        src={props.data.image}
        alt={`${props.data.title} (${props.data.category})`}
        unoptimized
        width={150}
        height={150}
      />
      <div className="w-full mt-3 text-md flex justify-center items-center flex-col font-medium transition-all duration-700 ease-in-out">
        <p className='w-10/12 truncate text-center'>{props.data.title}</p>
        <p>$ {props.data.price}</p>
        <p>{props.data.rating.count > 0 ? 'Available' : 'Out of Stock'} </p>
        <div className="flex justify-center items-center">
          {renderStars(filledStars, true)}
          {renderStars(remainderStars, false)}
        </div>
      </div>
      <div className='absolute top-4 right-4 bg-teal-200 p-3 rounded-full hover:bg-teal-500 hover:text-white hover:scale-[1.25] transition-all' title='Add To Cart'>
        <FaOpencart />
      </div>
    </div>
  );
}

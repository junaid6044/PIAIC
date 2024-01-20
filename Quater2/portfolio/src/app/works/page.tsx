// https://www.npmjs.com/package/react-alice-carousel
"use client"
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'


export default function works() {

  const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

  const seaItems = [
    <Image key={1} src="/img/a1.png" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
    <Image key={2} src="/img/a2.png" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
  ];

  const mentorcityItems = [
    <Image key={1} src="/img/m1.webp" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
    <Image key={2} src="/img/m2.webp" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
    <Image key={3} src="/img/m3.webp" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
    <Image key={4} src="/img/m4.webp" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
  ];

  const xploreItems = [
    <Image key={1} src="/img/x0.png" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
    <Image key={2} src="/img/x1.png" className='w-full h-full' width={300} height={300} onDragStart={handleDragStart} alt={''} />,
  ];

  return (
    <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div className="py-12">
        <h2 className="after-effect after:left-48 mt-12 lg:mt-0">Portfolio</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-[30px]">
        <AliceCarousel mouseTracking autoPlay infinite disableButtonsControls autoPlayInterval={1500} items={mentorcityItems} />
        <AliceCarousel mouseTracking autoPlay infinite disableButtonsControls autoPlayInterval={1500} items={seaItems} />
        <AliceCarousel mouseTracking autoPlay infinite disableButtonsControls autoPlayInterval={1500} items={xploreItems} />
      </div>
    </div>
  )
}

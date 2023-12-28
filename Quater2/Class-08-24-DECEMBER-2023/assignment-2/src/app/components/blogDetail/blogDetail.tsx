import React from 'react'
import Image from 'next/image'

interface BlogDetailProps {
  data: {
    id: number,
    imgSrc: string,
    title: string,
    text: string,
    link: string,
  }
}

export default function blogDetail(props:BlogDetailProps) {
  const htmlContent = props.data.text
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-12 relative">
      <div className="mb-8 max-w-3xl mx-auto">
        <h1 className="text-teal-600 font-bold text-3xl mb-2">{props.data.title}</h1>
      </div>

      <div className="text-center flex justify-center">
      <Image
        src={props.data.imgSrc}
        alt={props.data.title}
        className='rounded'
        width={730}
        height={415}
        priority
      />
      </div>

      <div className="max-w-3xl mx-auto mt-8">
        <div className="text-gray-500 text-lg" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  )
}

import React from 'react'
import Image from 'next/image'

export default function blogdetail(props: any) {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-12 relative">
      <div className="mb-8 max-w-3xl mx-auto">
        <h1 className="text-teal-600 font-bold text-3xl mb-2">{props.data.fields.title}</h1>
      </div>

      {/* <div className="text-center flex justify-center">
        <Image
          src={`${props.data.fields.image.fields.file.url}`}
          alt={props.data.fields.title}
          className='rounded'
          width={730}
          height={415}
          priority
        />
      </div> */}

      <div className="max-w-3xl mx-auto mt-8">
        <div className="text-gray-500 text-lg">{props.data.fields.description}</div>
      </div>
    </div>
  )
}

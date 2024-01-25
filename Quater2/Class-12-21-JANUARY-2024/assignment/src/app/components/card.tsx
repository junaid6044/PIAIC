import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Card(props:any) {
  return (
    // <Link href={props.data.fields.link}>
    //   <div className="rounded overflow-hidden shadow-lg">
    //     <Image
    //       src={props.data.fields.imgSrc}
    //       alt={props.data.fields.title}
    //       className="w-full"
    //       width={395}
    //       height={300}
    //       priority
    //     />
    //   </div>
    // </Link>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.data.fields.title}</div>
          <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: props.data.fields.description }} />
        </div>
  )
}

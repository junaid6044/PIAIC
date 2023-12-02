import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  data: {
    id: number,
    imgSrc: string,
    title: string,
    text: string,
    link: string,
  }
}

export default function Card(props:CardProps) {
  return (
    <Link href={props.data.link}>
      <div className="rounded overflow-hidden shadow-lg">
        <Image
          src={props.data.imgSrc}
          alt={props.data.title}
          className="w-full"
          width={395}
          height={300}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.data.title}</div>
          <p className="text-gray-700 text-base">{props.data.text}</p>
        </div>
      </div>
    </Link>
  )
}

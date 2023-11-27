import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  data: {
    id: number;
    imgSrc: string;
    imgText: string;
    title: string;
    text: string;
    link: string;
  };
}

export default function Card(props) {
  return (
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
        {/* <div className="max-w-prose">
          <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis h-[3.6em] truncate">
            {props.data.text}
          </p>
        </div> */}
        <div className="mt-4">
          <Link href={props.data.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

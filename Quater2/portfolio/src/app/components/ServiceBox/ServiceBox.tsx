import React from 'react'
import Image from 'next/image'


export default function ServiceBox({ data }: any) {
  return (
    <div className={`about-box dark:bg-transparent`} style={{ background: data.bgColor }}>
      <Image
        alt="icon"
        src={data.iconSrc}
        width={40}
        height={40}
        decoding="async"
        className="w-10 h-10 object-contain block text-transparent"
        loading="lazy"
      />
      <div className="space-y-2 break-all">
        <h3 className="dark:text-white text-xl font-semibold">{data.title}</h3>
        <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">{data.description}</p>
      </div>
    </div>
  )
}

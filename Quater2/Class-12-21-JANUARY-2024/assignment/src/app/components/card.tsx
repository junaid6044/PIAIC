import React from 'react';
import ContentfulImage from '@moxy/react-contentful-image';
import Link from 'next/link'

export default function Card(props: any) {
  const src = props.data.fields.image.fields.file.url;
  return (
    <Link href={`/blogs/${props.data.fields.link}`}>
      <div className="rounded overflow-hidden shadow-lg">
        <ContentfulImage
          image={src}
          className="w-full"
          resize={{ width: 395, height: 300 }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.data.fields.title}</div>
        <p className="text-gray-700 text-base truncate w-9/12">{props.data.fields.description}</p>
      </div>
    </Link>
  )
}

import React from 'react';
import Image from 'next/image';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteOutline } from 'react-icons/md';
import Link from 'next/link';
import { BlogTypeWithAction } from '../../types/commonTypes';

export default function Card(props: { data: BlogTypeWithAction }) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  const getImageSource = () => {
    if (props.data.image instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(props.data.image);
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setImageSrc(dataUrl);
      };
    } else {
      setImageSrc(props.data.image);
    }
  };

  React.useEffect(() => {
    getImageSource();
  }, [props.data.image]);

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link href={props.data.title}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={props.data.title}
            className="w-full"
            width={395}
            height={300}
            priority
          />
        ) : (
          <Image
            src="/default_image.jpg"
            alt="no image"
            className="w-full"
            width={395}
            height={300}
            priority
          />
        )}
        <div className='px-6 py-4'>
          <div className="font-bold text-xl mb-2">{props.data.title}</div>
          <p className="text-gray-700 text-base truncate">{props.data.description}</p>
        </div>
      </Link>
      <div className="flex items-center justify-end px-6 py-4">
        <button
          onClick={props.data.edit}
          className="flex items-center mr-2 bg-transparent bg-blue-100 hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-blue-800 hover:border-transparent rounded-full"
        >
          <CiEdit /> Edit
        </button>
        <button
          onClick={props.data.delete}
          className="flex items-center bg-transparent bg-red-100 hover:bg-red-800 text-red-800 font-semibold hover:text-white py-2 px-10 border-opacity-0 border border-red-800 hover:border-transparent rounded-full"
        >
          <MdDeleteOutline /> Delete
        </button>
      </div>
    </div>
  );
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="mt-8 grid grid-cols-1 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
      <div className="col-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <Image
          src="/img/18.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
          description
        </p>
      </div>
      <div className="row-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <Image
          src="/img/11.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
          description
        </p>
      </div>
      <div className="row-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <Image
          src="/img/12.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
          description
        </p>
      </div>
      <div className="group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <Image
          src="/img/23.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
          description
        </p>
      </div>
      <div className="col-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <Image
          src="/img/25.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
          description
        </p>
      </div>
    </div>
  )
}

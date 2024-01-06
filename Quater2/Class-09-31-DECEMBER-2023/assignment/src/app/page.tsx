import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='mt-8 px-2 md:px-16 lg:px-8 font-bold'>
        <h1>CASE STUDIES</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 px-2 md:px-16 lg:px-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
          <Image
            src="/img/28.jpg"
            alt="Picture of the author"
            className='h-full w-full'
            width={850}
            height={100}
          />
          <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out text-white">
            description
          </p>
          <div className="absolute h-full w-full bg-blue-500 bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-0"></div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
          <Image
            src="/img/11.jpg"
            alt="Picture of the author"
            className='h-full w-full'
            width={500}
            height={500}
          />
          <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out text-white">
            description
          </p>
          <div className="absolute h-full w-full bg-blue-500 bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-0"></div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
          <Image
            src="/img/12.jpg"
            alt="Picture of the author"
            className='h-full w-full'
            width={500}
            height={500}
          />
          <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out">
            description
          </p>
          <div className="absolute h-full w-full bg-blue-500 bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-0"></div>
        </div>
        <div className="col-span-1group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
          <Image
            src="/img/30.jpg"
            alt="Picture of the author"
            className='h-full w-full'
            width={800}
            height={800}
          />
          <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out text-white">
            description
          </p>
          <div className="absolute h-full w-full bg-blue-500 bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-0"></div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 group relative m-2 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
          <Image
            src="/img/27.jpg"
            alt="Picture of the author"
            className='h-full w-full'
            width={1000}
            height={500}
          />
          <p className="absolute left-5 bottom-6 text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out text-white">
            description
          </p>
          <div className="absolute h-full w-full bg-blue-500 bg-opacity-20 transition-all duration-500 group-hover:bg-opacity-0"></div>
        </div>
      </div>
    </>
  )
}

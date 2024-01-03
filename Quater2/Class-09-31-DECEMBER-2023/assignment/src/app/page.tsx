import Image from 'next/image'

export default function Home() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
      <div className="col-span-2 group relative mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]`} style={{ borderRadius: '50%', backgroundColor: 'grey' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          image
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          description
        </p>
      </div>
      <div className="row-span-2 group relative mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]`} style={{ borderRadius: '50%', backgroundColor: 'grey' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          image
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          description
        </p>
      </div>
      <div className="row-span-2 group relative mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]`} style={{ borderRadius: '50%', backgroundColor: 'grey' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          image
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          description
        </p>
      </div>
      <div className="group relative mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]`} style={{ borderRadius: '50%', backgroundColor: 'grey' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          image
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          description
        </p>
      </div>
      <div className="col-span-2 group relative mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 14px' }}>
        <div className={`absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]`} style={{ borderRadius: '50%', backgroundColor: 'grey' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          image
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          description
        </p>
      </div>
    </div>
  )
}

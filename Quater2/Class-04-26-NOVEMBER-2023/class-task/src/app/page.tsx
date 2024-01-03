import Image from 'next/image'

export default function Home() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
      <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style={{ borderRadius: '50%', backgroundColor: '#EB2A40' }}></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          Latest State of the art Technology
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          Train IT professionals who they can build million $ companies nationwide in cutting-edge technologies, fostering a technical revolution in Faisalabad and across Pakistan.
        </p>
      </div>
      {/* <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style="border-radius:50%;background-color:#023e8a"></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          Opportunity to learn Business
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          Opportunity to learn direct from top business leaders of Pakistan for a more successful business career.
        </p>
      </div>
      <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style="border-radius:50%;background-color:#023e8a"></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          Venture Capital Fund
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          This project will create a 100-million-dollar Cyberabad Venture Capital Fund to finance the IT companies and startups of Faisalabad.
        </p>
      </div>
      <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style="border-radius:50%;background-color:#023e8a"></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          Angle Investor Club
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          A Cyberabad Angel Investor Club will also be formed and it will also provide initial seed money for startup businesses, in exchange for ownership equity in the company.
        </p>
      </div>
      <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style="border-radius:50%;background-color:#023e8a"></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          Coworking Space
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          Establish the Cyberabad Coworking Space in Faisalabad&apos;s corporate district, offering flexible workspaces, 24/7 access, amenities, and networking opportunities. Energize and connect in this vibrant, fully-equipped environment.
        </p>
      </div>
      <div className="group relative  mx-2 my-3 flex min-h-[300px] w-auto cursor-pointer flex-col items-center justify-evenly overflow-hidden rounded-lg transition-all duration-500 hover:scale-110 lg:mx-5" style="box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 14px">
        <div className="absolute -left-10 -top-10 z-0 h-20 w-20 transition-all duration-700 group-hover:scale-[20]" style="border-radius:50%;background-color:#023e8a"></div>
        <h1 className="z-10 text-center text-lg font-bold transition-all duration-700 ease-in-out group-hover:text-white">
          International Embassies
        </h1>
        <p className="text-md z-10 mx-5 text-center font-medium transition-all duration-700 ease-in-out group-hover:text-white">
          Set up Cyberabad International Embassies in Silicon Valley, USA, and Dubai Internet City, fostering global business connections and serving as hubs for Cyberabad's international outreach.
        </p>
      </div> */}
    </div>
  )
}

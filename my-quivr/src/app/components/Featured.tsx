import React from 'react'
import Image from "next/image";

export default function Featured() {
  return (
    <div className="transparent w-screen flex justify-center overflow-hidden">
      <section className="flex flex-col items-center w-full max-w-6xl z-[2] py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-10 lg:gap-0 xl:gap-10 lg:h-[calc(100vh-250px)] mb-[calc(50vw*tan(6deg))] md:mb-0">
          <div className="w-[80vw] lg:w-[50%] lg:shrink-0 flex flex-col justify-center gap-10 sm:gap-20 lg:gap-32 xl:gap-36">
            <div>
              <h1 className="text-5xl leading-[4rem] sm:text-6xl sm:leading-[5rem] lg:text-[4.2rem] lg:leading-[6rem] font-bold text-black block max-w-2xl">Get a Second Brain with <span className="text-primary">Quivr</span></h1>
              <br />
              <p className="text-xl">Your productivity assistant connected to your files &amp; favorite applications</p>
            </div>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5">
              <a href="/login">
                <button className="px-8 py-3 text-sm disabled:opacity-80 text-center font-medium focus:ring ring-primary/10 outline-none flex items-center justify-center gap-2 border border-black dark:border-white disabled:bg-gray-500 disabled:hover:bg-gray-500 dark:bg-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors text-white bg-black rounded-full">Try free demo <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> </button>
              </a>
              <a href="/contact">
                <button className="text-sm text-center rounded-md focus:ring ring-primary/10 outline-none flex items-center justify-center gap-2 transition-opacity text-black dark:text-white bg-transparent py-2 px-4 disabled:opacity-25 font-semibold">Contact sales team <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg> </button>
              </a>
            </div>
          </div>
          <div className="w-[80vw] lg:w-[calc(50vw)] lg:shrink-0 lg:max-h-[calc(80vh-100px)] rounded flex items-center justify-center lg:justify-start">
            <Image
              src={"/laptop-demo.png"}
              alt="Quivr on laptop"
              width={1200}
              height={1200}
              className="hidden sm:block max-w-[calc(80vh-100px)] max-h-[calc(80vh-100px)] xl:scale-125"
            />
            <Image
              src={"/laptop-demo.png"}
              alt="Quivr on smartphone"
              width={640}
              height={640}
              className="sm:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

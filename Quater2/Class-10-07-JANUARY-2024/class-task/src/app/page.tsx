import Image from 'next/image'

export default function Home() {
  return (
    <div className="z-50 m-auto grid h-full w-[95%] lg:w-[90%]  lg:grid-cols-3 xl:w-[1300px]">
      <div className="col-span-1 h-fit w-full pt-5 md:py-4 lg:col-span-2">
        <h1 className="mt-5 w-full text-center text-[1.5rem] font-semibold leading-[2rem] text-main sm:text-4xl sm:leading-[3rem] lg:text-left lg:text-[2.5rem]">Initiative for Cloud Applied Generative AI<span className="text-sub1">&nbsp;by&nbsp;</span><span className="tracking-normal">Faisalabad Chamber of Commerce and Industry (FCCI)</span></h1>
        <div className="mb-7 flex flex-col items-center sm:mt-10 sm:gap-5 lg:mb-0">
          <p className="w-full text-center text-lg font-medium text-sub1 sm:text-xl lg:text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Advanced Specializations Available for Computer Science, Medical, Healthcare, Engineering, Marketing, Accounting, Finance, Banking and Cybersecurity Professionals. For the first time in the history of PAKISTAN, Breaking Barriers Between Technologists and Venture Capitalists with the leadership of Faisalabad Chamber of Commerce and Industry.</p>
          <a href="/apply">
            <div className="apply-now-button-transition z-20 whitespace-nowrap rounded-full bg-[#b21e35] px-8 py-2.5 uppercase text-white shadow-lg">Apply For Training Now</div>
          </a>
        </div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center px-5 py-10 md:m-auto lg:col-span-1">
        <div className="relative h-auto sm:min-w-[70%]">
          <div className="z-10 flex h-auto items-center justify-center overflow-hidden rounded-xl border-2 border-main sm:min-w-[70%]">
            <Image
              src="/img/cover.png"
              alt="FCCI"
              className='z-10 h-auto sm:min-w-[70%]'
              width={550}
              height={450}
            />
          </div>
          <div className="right-50% absolute -bottom-5 left-[35%] z-50 h-auto w-48 origin-center rounded-lg bg-white lg:left-10 xl:left-24" title="Faisalabad Chamber of Commerce &amp; Industry">
            <p className="text-center text-lg font-semibold text-main">Dr. Khurram Tariq</p>
            <p className="text-center font-medium text-sub1">
              President of<abbr title="Faisalabad Chamber of Commerce &amp; Industry">FCCI</abbr>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

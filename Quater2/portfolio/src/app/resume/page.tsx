import React from 'react'

export default function Resume() {
  return (
    <>
      <div className="container px-4 sm:px-5 md:px-10 lg:px-14">
        <div className="py-12">
          <h2 className="after-effect after:left-44">Resume</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
            <div>
              <div className="flex items-center space-x-2 mb-4 resume-icon">
                <div className="text-6xl text-[#F95054]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"></path>
                  </svg>
                </div>
                <h4 className="text-5xl dark:text-white font-medium">Education</h4>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2" style={{ background: 'rgb(255, 244, 244)' }}>
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2016 - 2020</span>
                <h3 className="text-xl dark:text-white"> BS Computer Science  </h3>
                <p className="dark:text-[#b7b7b7]">National Textile University, Pak</p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2" style={{ background: 'rgb(255, 241, 251)' }}>
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2014 - 2016</span>
                <h3 className="text-xl dark:text-white"> FSc Pre-Engineering </h3>
                <p className="dark:text-[#b7b7b7]"> Superior College Faisalabad, Pak</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4 resume-icon">
                <div className="text-6xl text-[#F95054]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
                  </svg>
                </div>
                <h4 className="text-5xl dark:text-white font-medium">Experience</h4>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2" style={{ background: 'rgb(238, 245, 250)' }}>
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2021 - Present</span>
                <h3 className="text-xl dark:text-white"> Sr. Software Engineer </h3>
                <p className="dark:text-[#b7b7b7]">Sr. Ruby on Rails developer at Techcologic</p>
              </div>
              <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2" style={{ background: 'rgb(242, 244, 255)' }}>
                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2020 - 2021</span>
                <h3 className="text-xl dark:text-white"> Front end Developer </h3>
                <p className="dark:text-[#b7b7b7]">Vistabit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-6">Languages Knowledge</h4>
            <div className='grid grid-cols-2 gap-4'>
              <div className="border-dashed border-b-2 border-gray-300">Ruby</div>
              <div className="border-dashed border-b-2 border-gray-300">Ruby on Rails</div>
              <div className="border-dashed border-b-2 border-gray-300">NextJs</div>
              <div className="border-dashed border-b-2 border-gray-300">HTML</div>
              <div className="border-dashed border-b-2 border-gray-300">CSS</div>
              <div className="border-dashed border-b-2 border-gray-300">Bootstrap</div>
              <div className="border-dashed border-b-2 border-gray-300">JavaScript</div>
              <div className="border-dashed border-b-2 border-gray-300">Jquery</div>
              <div className="border-dashed border-b-2 border-gray-300">TypeScript</div>
              <div className="border-dashed border-b-2 border-gray-300">C++</div>
              <div className="border-dashed border-b-2 border-gray-300">SQL</div>
              <div className="border-dashed border-b-2 border-gray-300">Shopify Liquid</div>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="text-5xl dark:text-white font-medium mb-8">Skills</h4>
            <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
              <button className="resume-btn text-[15px]">Ruby on Rails</button>
              <button className="resume-btn text-[15px]">Git</button>
              <button className="resume-btn text-[15px]">Shopify</button>
              <button className="resume-btn text-[15px]">PostgreSQL</button>
              <button className="resume-btn text-[15px]">Testing & Debugging</button>
              <button className="resume-btn text-[15px]">Communication Skills</button>
              <button className="resume-btn text-[15px]">Teamwork</button>
              <button className="resume-btn text-[15px]">Hardworking</button>
              <button className="resume-btn text-[15px]">Client Satisfaction</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

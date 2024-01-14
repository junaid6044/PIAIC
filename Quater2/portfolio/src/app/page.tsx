import Image from 'next/image'
import SlickSlider from './components/Slider/SlickSlider'
import ServiceBox from './components/ServiceBox/ServiceBox';

export default function Home() {
  const services = [
    {
      iconSrc: '/img/icon-1.svg',
      title: 'Ui/Ux Design',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(252, 244, 255)',
    },
    {
      iconSrc: '/img/icon-2.svg',
      title: 'App Development',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(254, 250, 240)',
    },
    {
      iconSrc: '/img/icon-3.svg',
      title: 'Photography',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(252, 244, 255)',
    },
    {
      iconSrc: '/img/icon-4.svg',
      title: 'Photography',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(255, 244, 244)',
    },
    {
      iconSrc: '/img/icon-5.svg',
      title: 'Management',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(255, 240, 248)',
    },
    {
      iconSrc: '/img/icon-6.svg',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.',
      bgColor: 'rgb(243, 250, 255)',
    },
  ];
  return (

    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite dark:text-color-910 leading-7">I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            </div>
          </div>
        </div>
      </div>
      <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">What I do!</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {services.map((service, index) => (
            <ServiceBox key={index} data={service} />
          ))}
        </div>
      </section>
      {/* <section className="px-2 sm:px-5 md:px-10 lg:px-14 mb-10">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">My Client!</h3>
        <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
          <div className="overflow-hidden">
            <SlickSlider />
            <div className="slick-slider slick-initialized" dir="ltr">
              <div className="slick-list">
                <div className="slick-track" style={{ width: '2482px', opacity: 1, transform: 'translate3d(-1022px, 0px, 0px)' }}>
                  <div data-index="-5" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="-4" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="-3" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="-2" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="-1" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="0" className="slick-slide" tabIndex={-1} aria-hidden="true" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="1" className="slick-slide" tabIndex={-1} aria-hidden="true" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="2" className="slick-slide slick-active slick-current" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="3" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="4" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="5" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false" style={{ outline: 'none', width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="6" tabIndex={-1} className="slick-slide slick-active slick-cloned" aria-hidden="false" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="7" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="8" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="9" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="10" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                  <div data-index="11" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true" style={{ width: '146px' }}>
                    <div><img alt="brand" tabIndex={-1} srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75" width="150" height="50" decoding="async" data-nimg="1" className=" overflow-hidden brand-img" loading="lazy" style={{ color: 'transparent', width: '100%', display: 'inline-block' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>

  )
}

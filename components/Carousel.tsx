import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import AboutBlogDisplay from './AboutBlogDisplay'
import { blogs } from '@/data/blogs'
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const Carousel = () => {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-gray-50 py-20 md:px-10 xl:px-20">
      <div className="px-6 md:px-10 xl:px-20 mt-6 mb-10 md:mb-14 lg:mb-16 flex-center flex-col">
        <p className="font-outfit text-gray-700 font-bold text-[13px] lg:text-md">BLOGS & NEWS</p>

        <h1 className="font-outfit text-2xl md:text-4xl lg:text-5xl mt-2">Explore the observatory</h1>
      </div>

      {/* large screens */}
      <div className='grid grid-cols-2 lg:grid-cols-3 space-x-2 space-y-8 max-md:hidden'>
        {latestBlogs.map(blg => <AboutBlogDisplay key={blg._id} blog={blg} />)}        
      </div>

      <Link 
        href="/blog" 
        className='max-md:hidden mt-10 flex-center font-jsl text-sm text-blue-800 gap-1.5'
      >
        <p>View All</p>
        <FaArrowRight />
      </Link>

      {/* small screens */}
      <div className='md:hidden'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop
          speed={700}
        >
          {blogs.map(blg => {
            return (
              <SwiperSlide>
                <AboutBlogDisplay key={blg._id} blog={blg} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Carousel
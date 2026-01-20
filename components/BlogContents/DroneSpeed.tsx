import BlogSearchBox from "../BlogSearchBox"

const DroneSpeed = () => {
  return (
    <div className='pt-10 bg-gray-50 grid grid-cols-1 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50'>
      <section className="px-6 lg:col-span-2">
        <p className='font-outfit mt-4 text-[17px]'>
          Sometimes, the challenge isn't traffic. It's distance
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
          It's a situation where something small but important is needed urgently. A medical supply for a local clinic. A replacement part for a small business trying to stay open. A document or package that shouldn't wait until "tomorrow".
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
          In moments like these, time stretches. Options feel limited. And people are left adapting to systems that weren't designed for urgency.
        </p>
        
        <p className='font-outfit mt-6 text-[17px]'>
          At Orbitrix, we began thinking differently.
        </p>

        <p className='font-jsl text-gray-600 mt-4 text-[15px] leading-[26px]'>
          What if technology could quietly close that gap?
        </p>

        <p className='font-jsl text-gray-600 mt-2 text-[15px] leading-[26px]'>
          What if delivery wasn’t just about speed, but about <b>access</b>?
        </p>

        <p className='font-jsl text-gray-600 mt-2 text-[15px] leading-[26px]'>
          What if innovation could reach places, people, and moments that traditional logistics often overlook?
        </p>

        <p className='font-outfit mt-6 text-[17px]'>
          This is the perspective shaping the logistics drone we are currently working on.
        </p>

        <p className='font-jsl text-gray-600 mt-2 text-[15px] leading-[26px]'>
          The idea goes beyond movement in the air. It’s about precision, responsibility, and awareness of the environment it operates in. A system designed to understand its surroundings, respect safety boundaries, and function within real-world regulations, while still solving a genuine need.
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
          We are exploring how autonomous delivery can support communities, reduce pressure on existing systems, and offer a smarter way to move essential items when it truly matters.
        </p>

        <img src="/drone5.jpeg" className="mt-8 w-full" />

        <p className='font-jsl text-gray-600 mt-8 text-[15px] leading-[26px]'>
          This isn’t a finished story.
        </p>

        <p className='font-jsl text-gray-600 mt-2 text-[15px] leading-[26px]'>
          It’s an evolving one.
        </p>

        <p className='font-jsl text-gray-600 mt-4 text-[15px] leading-[26px]'>
          And as we continue building, testing, and learning, this space will grow with the project—sharing the thinking, the challenges, and the possibilities behind it.
        </p>

        <p className='font-outfit mt-6 text-[17px]'>
          This is what Orbitrix is looking into.
        </p>

        <p className='font-outfit mt-2 text-[17px]'>
          A different way to move what matters.
        </p>

        <div className='w-20 mx-auto h-[2px] bg-gray-500 mt-12'></div>

        <p className='font-outfit text-gray-600 mt-12 text-center italic font-bold'>
          Orbitrix Nigeria – Pioneering innovation at the intersection of technology & exploration.
        </p>
      </section>

      <section className='max-lg:px-6 max-lg:mt-20'>
        <BlogSearchBox />
      </section>
    </div>
  )
}

export default DroneSpeed
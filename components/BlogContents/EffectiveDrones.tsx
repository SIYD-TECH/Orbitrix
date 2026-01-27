import BlogSearchBox from "../BlogSearchBox"

const EffectiveDrones = () => {
  return (
    <div className='pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50'>
      <section className="px-6 lg:col-span-2">
        <p className='font-outfit mt-4 text-[17px]'>
          When Innovation Meets the Unexpected
        </p>

        <p className='font-jsl text-gray-600 mt-4 text-[15px] leading-6.5'>
          What if a drone could do more than carry packages?
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
          Imagine a rainy Lagos morning. Markets are flooded, streets impassable, and small vendors risk losing their daily earnings. A small cargo drone could deliver critical goods like fresh produce, medicines, or even water filters, right to those who need them, without waiting for roads to clear.
        </p>
      
        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
          Or picture a remote community in the Niger Delta, where healthcare supplies take days to arrive. A drone could transport vaccines or medicines in hours, bridging gaps that traditional logistics can’t reach.
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
          Think about power outages in the city. Could a drone carry essential electronics or emergency batteries to clinics, offices, or homes in real time?
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
         Even in education, drones could bring learning materials like textbooks, devices to students in hard-to-reach areas, or even small experimental kits, keeping communities connected when infrastructure struggles.
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
          At Orbitrix, these possibilities aren’t just ideas. They are the problems we’re aiming to solve. Every design choice, from payload size to stability, sensors, and flight control, is tested against real-life scenarios, both predictable and unimaginable.
        </p>

        <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-6.5'>
          The logistics drone isn’t just a machine. It’s a tool for resilience, creativity, and unexpected solutions.
        </p>

        <img src="/orbitrix-design.png" className="mt-8 w-full" />

        <p className='font-outfit mt-6 text-[17px]'>
          This is what Orbitrix is building toward.
        </p>

        <p className='font-outfit mt-2 text-[17px]'>
          And this is only the beginning.
        </p>

        <div className='w-20 mx-auto h-0.5 bg-gray-500 mt-12'></div>

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

export default EffectiveDrones
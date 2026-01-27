import BlogSearchBox from '../BlogSearchBox'

const SolarDrones = () => {
  return (
    <div className='pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50'>
      <section className="px-6 lg:col-span-2">

      <p className='font-outfit text-[17px]'>
        Did You Know That...
      </p>

      <p className='font-jsl text-gray-600 mt-2 text-[15px] leading-[26px]'>
        Most drones fly for thirty minutes before their batteries die and they have to land. The expensive ones might manage an hour. Then there are the Orbitrix drones that fly for over eighty hours without touching ground.
      </p>

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        Eighty hours. More than three days in the air.
      </p>

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        How does Orbitrix do it? Solar panels integrated into the Orbitrix airframe, charging batteries during the day. Advanced power management systems developed by Orbitrix engineers. Lightweight carbon fiber construction that Orbitrix builds in-house. Every component optimized by the Orbitrix team for maximum efficiency.
      </p>

      <img src="/drone4.jpg" className="mt-8 w-full" />

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        These aren’t hobby drones. Orbitrix drones are atmospheric research platforms collecting weather data, monitoring environmental conditions, conducting aerial surveys across distances that would require multiple drone swaps with any other technology.
      </p>

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        Orbitrix hand-builds each airframe. Carbon fiber sheets cut precisely at the Orbitrix facility, layered carefully, cured in our own equipment. Electronics assembled and tested individually by Orbitrix technicians. Flight control systems programmed by Orbitrix software engineers and refined through countless test flights over Nigerian skies.
      </p>

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        The Orbitrix drones solve real Nigerian problems. Farmers need accurate weather forecasts—Orbitrix drones profile atmospheric conditions that improve rainfall predictions. Researchers need data from remote areas—Orbitrix drones go where ground stations can’t. Industries need aerial monitoring—Orbitrix drones stay up long enough to actually complete the job.
      </p>

      <img src="/drone3.jpg" className="mt-8 w-full" />

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        When people see an Orbitrix drone take off for a multi-day mission, they ask how it’s possible. The answer is simple: Orbitrix engineers refused to accept the limitations everyone else assumed were fixed. We built what we needed because waiting for someone else to build it wasn’t an option.
      </p>

      <p className='font-jsl text-gray-600 mt-6 text-[15px] leading-[26px]'>
        Every Orbitrix drone flight proves what’s possible when Nigerian innovation meets real problems. And Orbitrix is just getting started.
      </p>


      
      </section>

      <section className='max-lg:px-6 max-lg:mt-20'>
        <BlogSearchBox />
      </section>
    </div>
  )
}

export default SolarDrones
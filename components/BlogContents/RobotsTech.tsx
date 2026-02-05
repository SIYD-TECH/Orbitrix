import BlogSearchBox from '../BlogSearchBox'

const RobotTech = () => {
  return (
    <div className='pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50'>
      <section className="px-6 lg:col-span-2">
        <p className='blog-heading mt-4'>
          Building the Future from Where We Stand
        </p>

        <p className='blog-text mt-4'>
          Technology is often discussed as something happening elsewhere
        </p>

        <p className='blog-text mt-1'>
          In distant labs. In advanced economies. In places far removed from our everyday realities.
        </p>

        <p className="blog-text mt-6">
          But the truth is this: the future doesn’t arrive from abroad fully formed.
        </p>

        <p className="blog-text mt-1">
          It is built carefully and intentionally right where people are.
        </p>

        <p className="blog-text mt-6">
          At Orbitrix, we believe Nigeria has a role in shaping the next wave of intelligent systems, not just consuming them. That belief drives our interest in emerging fields such as *humanoids, autonomous systems, and neuro-technology* , not as buzzwords, but as tools that must make sense within our context.
        </p>

        <p className="blog-heading mt-6">
          Humanoids: Designing for Human Spaces
        </p>

        <p className="blog-text mt-4">
          In a country where labor-intensive work, hazardous environments, and accessibility challenges are part of daily life, humanoid technology raises an important question: How can machines support people without replacing human value?
        </p>

        <p className="blog-text mt-4">
          From high-risk operations to research, healthcare, and industrial support, humanoids are not about imitation, they are about collaboration. Their usefulness depends on how well they are designed for real human environments, guided by cultural awareness, ethics, and genuine needs.
        </p>

        <p className="blog-heading mt-6">
          Autonomous & Defense Technologies: Responsibility Before Power
        </p>

        <p className="blog-text mt-4">
          Military and surveillance drones are often framed as symbols of force. In Nigeria, the conversation is wider—border monitoring, disaster response, infrastructure protection, and situational awareness.
        </p>

        <p className="blog-text mt-6">
          The real challenge isn’t capability.
        </p>

        <p className="blog-text mt-1">
          It’s <b>control, accountability, and governance.</b>
        </p>

        <p className="blog-text mt-6">
          Technology that carries power must also carry restraint. Innovation without ethical boundaries can deepen existing problems. Innovation guided by responsibility can help stabilize systems and protect lives.
        </p>

        <p className="blog-heading mt-8">
          Neuroscience & Neuro-Technology: Understanding Ourselves Better
        </p>

        <p className="blog-text mt-4">
          Nigeria’s healthcare and research ecosystem faces unique challenges, from neurological care to rehabilitation and learning development. Neuro-technology offers new ways to understand the brain—supporting recovery, communication, and more meaningful human-machine interaction.
        </p>

        <p className="blog-text mt-4">
          But when technology meets the human mind, the stakes are higher. Issues of data, consent, dignity, and long-term impact must come first. This is not a space for shortcuts. It is a space for caution and care.
        </p>

        <p className="blog-text mt-4">
          Nigeria doesn’t need technology that simply follows global trends. It needs technology that understands local realities—infrastructure gaps, cultural nuance, ethical responsibility, and long-term impact.
        </p>

        <p className="blog-text mt-4">
          At Orbitrix, we’re not rushing to build everything at once. We are studying, questioning, and thinking deeply because meaningful innovation starts with understanding context.
        </p>

        <p className="blog-text mt-6">
          This is the future we’re exploring.
        </p>

        <p className="blog-text mt-1">
          Built from here.
        </p>

        <p className="blog-text mt-1">
          With responsibility.
        </p>

        <div className='w-20 mx-auto h-0.5 bg-gray-500 mt-12'></div>

        <p className='font-outfit text-gray-600 mt-12 text-center italic font-bold'>
          Orbitrix Nigeria – Pioneering innovation at the intersection of technology & exploration.
        </p>
        

        {/* <img src="/robot-dogs2.jpg" className="mt-8 w-full" /> */}
       
      </section>

      <section className='max-lg:px-6 max-lg:mt-20'>
        <BlogSearchBox />
      </section>
    </div>
  )
}

export default RobotTech
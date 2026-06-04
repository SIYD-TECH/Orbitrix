import BlogSearchBox from "../BlogSearchBox";

const SolarDrones = () => {
  return (
    <div className="pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-24">
      <section className="px-6 lg:col-span-2">
        <h1 className="font-outfit text-xl md:text-2xl font-semibold text-gray-900">
          What we build is only part of the story.
        </h1>

        <p className="font-jsl text-gray-500 mt-3 text-[16px] italic leading-relaxed">
          The bigger question is: What becomes possible because of it?
        </p>

        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-7">
          At Orbitrix, innovation is not just about launching ideas into the
          world. It’s about listening, adapting, and building around real
          conversations, real needs, and real people. Every concept explored,
          every system designed, and every direction taken always starts with
          pure curiosity.
        </p>

        <p className="font-jsl text-gray-600 mt-4 text-[15px] leading-7">
          What if technology felt more human? What if access became simpler?
          What if innovation reflected the realities around us?
        </p>

        <div className="mt-8 overflow-hidden rounded-xl bg-gray-200">
          <img
            src="/portrait-ai-robot-urban-area.jpg.jpeg"
            alt="AI robot in an urban environment"
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="font-jsl text-gray-600 mt-8 text-[15px] leading-7">
          The future isn’t built by technology alone. It’s shaped by the people
          who challenge it, question it, and inspire it. What we’ve built,
          what’s coming, and what you’ve shared with us—it's all deeply
          connected.
        </p>

        <p className="font-outfit text-gray-900 font-medium mt-6 text-[16px]">
          Orbitrix: Building the future with people in mind.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl bg-gray-200">
          <img
            src="/scene-with-futuristic-robot-used-construction-industry.jpg.jpeg"
            alt="Futuristic industrial robotics"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="max-lg:px-6 lg:mt-0 max-lg:mt-16">
        <div className="sticky top-10">
          <BlogSearchBox />
        </div>
      </section>
    </div>
  );
};

export default SolarDrones;

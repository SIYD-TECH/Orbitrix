import BlogSearchBox from "../BlogSearchBox";

const SolarDrones = () => {
  return (
    <div className="pt-10 bg-gray-50 grid grid-cols-1 gap-6 lg:grid-cols-3 md:px-6 lg:px-8 xl:px-20 mb-50">
      <section className="px-6 lg:col-span-2">
        <p className="font-outfit text-[17px]">
          What we build is only part of the story.
        </p>

        <p className="font-jsl text-gray-600 mt-2 text-[15px] leading-6.5">
          The bigger question is: What becomes possible because of it?
        </p>
        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          At Orbitrix, innovation is not just about launching ideas into the
          world. It’s about listening, adapting, and building around real
          conversations, real needs, and real people. Every concept explored.
          Every system designed. Every direction taken. Starts with curiosity.
        </p>
        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          What if technology felt more human? What if access became simpler?
          What if innovation reflected the realities around us?
        </p>
        <img src="/drone4.jpg" className="mt-8 w-full" />
        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          The future isn’t built by technology alone. It’s shaped by the people
          who challenge it, question it, and inspire it. What we built. What’s
          coming. What you said. All connected.
        </p>
        <p className="font-jsl text-gray-600 mt-6 text-[15px] leading-6.5">
          Orbitrix: Building the future with people in mind.
        </p>
        <img src="/drone3.jpg" className="mt-8 w-full" />
      </section>

      <section className="max-lg:px-6 max-lg:mt-20">
        <BlogSearchBox />
      </section>
    </div>
  );
};

export default SolarDrones;

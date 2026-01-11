"use client";

import { ghostVariants, slideUpVariants } from "@/animations/contents";
import { heroText } from "@/animations/hero"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import MotionWrapper from "@/components/MotionWrapper";
import { motion } from "framer-motion"

const page = () => {
  return (
    <main>
      <Header theme="dark" />

      {/* HERO SECTION */}
      <section className="relative lg:mt-0 max-md:pt-75 max-md:bg-black">
        <img src="/hero.jpeg" className="w-full lg:object-cover" />

        <div className="hero-section-overlay">
          <MotionWrapper variants={heroText}>
            <p className="text-sm md:text-lg font-outfit mb-2 lg:mb-4">
              INNOVATE. AUTOMATE. ELEVATE
            </p>
          </MotionWrapper>

          <MotionWrapper variants={heroText}>
            <h1 className="lg:mt-0 text-4xl md:text-5xl lg:text-8xl md:text-6xl flex-start">
              <span>WE</span>
              <img src="/astro.png" className="h-15 md:h-18 lg:h-25" />
              <span>BUILD</span>
            </h1>
          </MotionWrapper>   

          <MotionWrapper variants={heroText}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-8xl md:text-6xl">
              WHAT'S
              <span className="sm:hidden cl
              ml-3">NEXT</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper variants={heroText}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-8xl md:text-6xl max-sm:hidden">
              NEXT
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* SPACE SECTION */}
      <section
        className="bg-black max-md:pt-70 max-lg:pt-20 px-6"
      >
        {/* mobile */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          variants={ghostVariants} 
          className="sm:hidden"
        >
          <div className="relative p-2">
            <img src="/guillermo.jpg" className="absolute h-[300px] w-[350px] right-[-10px]" />
            <img src="/history.jpg" className="absolute top-[150px] left-0 h-[400px]" />
          </div>

          <p className="text-gray-300 text-[15px] w-[80%] leading-[25px] font-jsl max-sm:mt-140">
            Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
          </p>

          <p className="text-gray-300 text-[15px] w-[80%] leading-[25px] font-jsl mt-4">
            Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
          </p>
        </motion.div>

        {/* desktop */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={slideUpVariants} 
          className="max-sm:hidden grid grid-cols-2 gap-6 md:w-[80%] mx-auto"
        >
          <div className="flex-center">
            <img src="/guillermo.jpg" className="w-full lg:w-[500px]" />
          </div>

          <div>
            <img src="/history.jpg" className="md:h-[500px]" />

            <p className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-[25px] font-jsl max-sm:mt-160 mt-6">
              Orbitrix is a forward-thinking technology agency specializing in artificial intelligence, robotics, and IoT. We help businesses evolve by designing smart, connected systems that automate processes, improve efficiency, and unlock new possibilities.
            </p>

            <p className="text-gray-300 text-[15px] lg:w-[60%] md:w-[80%] leading-[25px] font-jsl mt-4">
              Driven by innovation and built for impact, we turn complex technology into practical solutions that move businesses forward.
            </p>
          </div>
        </motion.div>
      </section>


      {/* MARQUEE SECTION */}
      <section 
        className="pt-30 bg-black">
        <img src="/space-man.png" className="max-sm:h-60 max-sm:object-center max-sm:object-cover" />

        <div className="marquee">
          <h1 className="marquee-content font-outfit text-5xl lg:text-8xl md:text-7xl mt-6 text-white"
          >
            ROBOTICS, AI & DIGITAL INNOVATION
          </h1>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="comps-img-section">
        <motion.div 
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="space-2.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="space-com.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="space.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="axiom.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants}
          className="flex-center relative"
        >
          <img src="esa.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ghostVariants} 
          className="flex-center relative"
        >
          <img src="nasa.png" className="h-18" />

          <div className="comp-section-box"></div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}

export default page
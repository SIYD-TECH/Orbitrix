import { rotateVariants } from "@/animations/contents";
import { desktopInfo, desktopNav, desktopNavLinks, mobileNav, mobileNavLinks, mobileNavSocials } from "@/animations/nav";
import { hrVariant } from "@/animations/utils";
import { AnimatePresence, hover, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ImFacebook } from "react-icons/im";

interface Props {
  theme: "light" | "dark",
  setNavbarActive: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ theme, setNavbarActive }: Props) => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href;

  const closeNavbar = () => {
    setNavbarActive(false)
  }

  const toX = () => {
    redirect("https://x.com/Orbitrix_")
  }

  const toLinkedIn = () => {
    redirect("https://www.linkedin.com/company/orbitrixng")
  }

  const toInstagram = () => {
    redirect("https://www.instagram.com/orbitrix__")
  }

  return (
    <>
      {/* small screens */}
      <AnimatePresence>
        <motion.div
          key="mobile-nav"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={mobileNav} 
          className="md:hidden z-10 fixed top-0 left-0 right-0 bottom-0 bg-dark py-6 px-5"
        >
          <div className="flex-between">
            <img src="/logo.png" className="h-10" />

            <div className="cursor-pointer" onClick={closeNavbar}>
              <X color="white" size={28} />
            </div>
          </div>

          {/* navs */}
          <div className="mt-15 text-[21px] font-outfit">
            <motion.div 
              variants={mobileNavLinks} 
            >
              <Link
                href="/" 
                className={isActive("/") ? "text-white font-bold" : "text-gray-300"}
              >
                Home
              </Link>
            </motion.div>

            <motion.div
              variants={mobileNavLinks}
            >
              <Link 
                href="/about"
                className={isActive("/about") ? "text-white mt-2 font-bold flex-start gap-6" : "text-gray-300 mt-2 flex-start gap-6"}
              >
                <span>About Us</span>
                <ArrowRight />
              </Link>
            </motion.div>

            <motion.div
              variants={mobileNavLinks}
            >
              <Link 
                href="/services"
                className={isActive("/services") ? "text-white mt-2 font-bold block" : "text-gray-300 mt-2 block"}
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div
              variants={mobileNavLinks}
            >
              <Link
                href="/contact"
                className={isActive("/contact") ? "text-white mt-2 font-bold block" : "text-gray-300 mt-2 block"}
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              variants={mobileNavLinks}
            >
              <Link
                href="/blog" 
                className={isActive("/blog") ? "text-white mt-2 font-bold block" : "text-gray-300 mt-2 block"}
              >
                Blog
              </Link>
            </motion.div>
          </div>

          <motion.hr 
            initial="hidden"
            animate="show"
            variants={hrVariant}
            className="text-gray-700 mt-8" 
          />

            {/* socials */}
          <div className="mt-8 flex-start gap-6">
            <motion.div
              variants={mobileNavSocials} 
              className="text-white hover:text-blue-400 active:text-blue-400"
            >
              <ImFacebook size={13} />
            </motion.div>

            <motion.div
              variants={mobileNavSocials} 
              onClick={toX}
              className="text-white hover:text-gray-400 active:text-gray-400"
            >
              <FaXTwitter size={13} />
            </motion.div>

            <motion.div
              variants={mobileNavSocials} 
              onClick={toLinkedIn} 
              className="text-white hover:text-blue-600 active:text-blue-600"
            >
              <FaLinkedin size={15} />
            </motion.div>

            <motion.div
              variants={mobileNavSocials} 
              onClick={toInstagram} 
              className="text-white hover:text-purple-500 active:text-purple-500"
            >
              <FaInstagram size={15} />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* large screens */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={desktopNav} 
        className="max-md:hidden fixed z-50 top-0 left-0 right-0 bottom-0 "
      >

        <div className="relative h-full w-full">
          <div className={`${theme === "dark" ? "bg-dark" : "bg-white border-l border-l-gray-200"} absolute top-0 bottom-0 right-0 w-[400px] pt-11 px-12`}>

            {/* logo */}
            <div className="flex-between">
              <img src={theme === "dark" ? "logo.png" : "logo2.png"} className="h-10" />

              <div 
                className={`${theme == "dark" ? "bg-gray-900" : "bg-gray-100"} cursor-pointer p-3 rounded-full`} 
                onClick={closeNavbar}
              >
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  variants={rotateVariants}
                >
                  <X color={theme === "dark" ? "white" : "black"} size={25} />
                </motion.div>
              </div>
            </div>

            {/* socials */}
            <div className={`${theme == "dark" ? "text-white" : "text-black"} font-outfit mt-28`}>

              <motion.div
                variants={desktopNavLinks} 
                className="flex-start gap-6 cursor-pointer hover:text-blue-400"
              >
                <ImFacebook />
                <p className="text-xl">Facebook</p>
              </motion.div>

              <motion.div
                variants={desktopNavLinks} 
                onClick={toX} 
                className="flex-start gap-6 mt-8 cursor-pointer hover:text-gray-400"
              >
                <FaXTwitter />
                <p className="text-xl">Twitter</p>
              </motion.div>

              <motion.div
                variants={desktopNavLinks} 
                onClick={toLinkedIn} 
                className="flex-start gap-6 mt-8 cursor-pointer hover:text-blue-600"
              >
                <FaLinkedin size={20} />
                <p className="text-xl">LinkedIn</p>
              </motion.div>

              <motion.div
                variants={desktopNavLinks} 
                onClick={toInstagram} 
                className="flex-start gap-6 mt-8 cursor-pointer hover:text-purple-500"
              >
                <FaInstagram />
                <p className="text-xl">Instagram</p>
              </motion.div>
            </div>

            <motion.hr
              initial="hidden"
              animate="show"
              variants={hrVariant}
              className="mt-28 text-gray-700" 
            />

            <div className="mt-10">
              <motion.p
                variants={desktopInfo} 
                className={`${theme == "dark" ? "text-white" : "text-black"} font-outfit text-2xl`}
              >
                +234 813 750 8176
              </motion.p>

              <motion.p
                variants={desktopInfo} 
                className="text-gray-400 font-outfit mt-2"
              >
                orbitrixng@gmail.com
              </motion.p>
            </div>

          </div>
        </div>

      </motion.div>
    </>
  )
}

export default Navbar
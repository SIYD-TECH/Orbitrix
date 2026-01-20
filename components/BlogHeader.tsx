"use client";

import { Menu } from "lucide-react"
import { useState } from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BlogHeader = ({ theme }: { theme: "light" | "dark" }) => {
  const [navbarActive, setNavbarActive] = useState<boolean>(false)
  const pathname = usePathname()
  
  const isActive = (href: string) => pathname === href;

  const showNavbar = () => {
    setNavbarActive(true)
  }

  return (
    <header className={`${theme == "light" ? "bg-white border-b border-b-gray-100" : "bg-black/50"} p-5 lg:px-18 lg:py-9 flex-between z-20`}>
      {navbarActive && <Navbar theme={theme} setNavbarActive={setNavbarActive} />}

      <div>
        <img src={`${theme == "light" ? "/logo2.png" : "/logo.png"}`} alt="Orbitrix Logo" className="h-8 lg:h-10" />
      </div>

      <div className="flex-between font-outfit gap-20">

        {theme === "dark" ? 
          <div className="max-md:hidden flex-between gap-7">
            <Link
              href={"/"} 
              className={isActive("/") ? "header-nav-dark-active" : "header-nav-dark"}
            >
              Home
            </Link>

            <Link
              href={"/about"} 
              className={isActive("/about") ? "header-nav-dark-active" : "header-nav-dark"}
            >
              About Us
            </Link>

            <Link
              href={"/services"}
              className={isActive("/services") ? "header-nav-dark-active" : "header-nav-dark"}
            >
              Our Services
            </Link>

            <Link
              href={"/contact"}
              className={isActive("/contact") ? "header-nav-dark-active" : "header-nav-dark"}
            >
              Contact Us
            </Link>

            <Link
              href={"/blog"}
              className={isActive("/blog") ? "header-nav-dark-active" : "header-nav-dark"}
            >
              Blog
            </Link>
          </div>
        :
          <div className="max-md:hidden flex-between gap-7">
            <Link
              href={"/"} 
              className={isActive("/") ? "header-nav-light-active" : "header-nav-light"}
            >
              Home
            </Link>

            <Link
              href={"/about"} 
              className={isActive("/about") ? "header-nav-light-active" : "header-nav-light"}
            >
              About Us
            </Link>

            <Link
              href={"/services"}
              className={isActive("/services") ? "header-nav-light-active" : "header-nav-light"}
            >
              Our Services
            </Link>

            <Link
              href={"/contact"}
              className={isActive("/contact") ? "header-nav-light-active" : "header-nav-light"}
            >
              Contact Us
            </Link>

            <Link
              href={"/blog"}
              className={isActive("/blog") ? "header-nav-light-active" : "header-nav-light"}
            >
              Blog
            </Link>
          </div>
        }

        <div className="cursor-pointer" onClick={showNavbar}>
          <Menu color={theme == "dark" ? "white" : "black"} size={27} />
        </div>
      </div>
    </header>
  )
}

export default BlogHeader
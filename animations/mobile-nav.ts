import { Variants } from "framer-motion";

export const mobileNav: Variants = {
  hidden: { clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)", opacity: 0 },
  show: {
    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.05 }
  },
  exit: {
    clipPath: "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
}; 

export const mobileNavLinks: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut"}
  }
}

export const mobileNavSocials: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut"}
  }
}
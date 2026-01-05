import { Variants } from "framer-motion";

export const mobileNav: Variants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.05 }
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.2,
      when: "afterChildren" 
    }
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
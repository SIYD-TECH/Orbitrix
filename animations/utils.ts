import { Variants } from "framer-motion";

export const hrVariant: Variants = {
  hidden: { width: 0, opacity: 0 },
  show: { 
    width: "100%", 
    opacity: 1, 
    transition: { 
      duration: 1.8, 
      ease: "easeInOut"
    }
  }
}
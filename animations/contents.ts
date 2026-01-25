import { Variants } from "framer-motion";

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export const slideUpBlur: Variants = {
  hidden: { opacity: 0, y: 100, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

export const ghostVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

export const rotateVariants: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 100 }
}


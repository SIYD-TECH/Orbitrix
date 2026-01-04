import { motion, Variants } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  children: ReactNode,
  variants: Variants
}

export const MotionWrapper = ({ children, variants }: Props) => {
  return (
    <motion.div
      initial="hidden" 
      animate="show" 
      variants={variants} 
    >
      {children}
    </motion.div>
  )
}

export default MotionWrapper
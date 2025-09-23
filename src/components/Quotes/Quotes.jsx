import React from 'react'
import { motion } from "framer-motion";


export const Quotes = () => {
  return (
    <>
    <div className="container w-full mx-auto py-6 px-4">
        <motion.p initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 20,
    duration: 0.8,
  }}
  viewport={{ once: true, amount: 0.3 }} className="text-2xl sm:text-4xl font-bold max-w-[650px] mx-auto text-center font-parisienne">
            "Virtual reality is the first step in a grand adventure into the landscape of the imagination." - Frank Biocca
        </motion.p>
    </div>
    </>
  )
}

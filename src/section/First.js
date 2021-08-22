import React,{useEffect} from 'react'
import virtual from "../img/virtual.jpg"
import { motion } from "framer-motion"

import "./First.css"
const First = () => {



    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay : 0.1,
            ease : "easeIn"
          }
        }
      }

      const headings = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay : 1,
            ease : "easeIn"
          }
        }
      }


    return (
        <div className="main__Container">
            <div className="main__Holder">
                <motion.header className="section__Description" variants={headings} initial="hidden" animate="show">
                    <motion.h1 variants={headings} initial="hidden" animate="show">Future of <span>VR</span></motion.h1>
                    <motion.p variants={headings}initial="hidden" animate="show">Immerse yourself into a different reality.<br/> Experience virtual reality like never before.</motion.p>
                    <motion.button variants={headings} initial="hidden" animate="show">Learn More</motion.button>
                </motion.header>
                <div className="section__Image">
                <motion.img src={virtual} variants={container} initial="hidden" animate="show"/>

                </div>
            </div>
        </div>
    )
}

export default First

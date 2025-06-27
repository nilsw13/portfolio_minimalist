"use client"
import { useLocale } from "next-intl";
import ContactSection from "../sections/ContactSection";
import HeroSection from "../sections/HeroSection";
import MissionsSection from "../sections/MissionsSection";
import OpenSourceSection from "../sections/OpenSourceSection";
import {motion} from 'framer-motion'

export default function HomePageWrapper() {

    const locale = useLocale()
    return (
        <motion.div
        key={locale}
        initial={{ 
            opacity: 0, 
            y: 20,
            filter: 'blur(4px)' 
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)' 
          }}
          exit={{ 
            opacity: 0, 
            y: -10,
            filter: 'blur(2px)' 
          }}
          transition={{ 
            duration: 0.4,
            ease: [0.25, 0.25, 0.25, 1], // Easing doux
            delay: 0.1 // Petit délai pour que le toggle finisse son animation
          }}
          className="min-h-screen"
        >
                 <HeroSection/>


                <MissionsSection/>

                <OpenSourceSection/>

                <ContactSection/>
        </motion.div>
    )
}
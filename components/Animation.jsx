import Image from 'next/image'
import laptop1 from '../public/laptop1.png'
import laptop2 from '../public/laptop2.jpg'
import Section from './Section'
import { useState } from 'react'
import { motion, AnimatePresence, transition } from 'framer-motion'


function Animation() {

  const [theme, setTheme] = useState('light');

  const headContainerAnimation = {
  initial: { x: -250, opacity: 0, transition: { ...transition, duration: 1.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, duration: 1.5 }  },
  exit: { x: -250, opacity: 0, transition: { ...transition, delay: 0 } },
 
};

  const tailContainerAnimation = {
  initial: { x: 250, opacity: 0, transition: { ...transition, duration: 1.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, duration: 1.5 } },
  exit: { x: 250, opacity: 0, transition: { ...transition, delay: 0 } },
};

 

  
  return (

  <AnimatePresence>
    <div className={`${theme}`}>
      <Section
        theme={'light'}
        setTheme={setTheme}
        >
       <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <motion.div className="flex flex-col gap-8 justify-center"
              {...headContainerAnimation}>
               <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                 Magic Keyboard. Apple Pencil. Endless Possibilties.
               </h1>
              <p className="text-md font-semibold text-zinc-400"> 
               <span className="text-black text-sm font-bold dark:text-white">Pro accessories.</span> Apple Pencil, Magic Keyboard, and the Smart Keyboard folio open up even more ways to use iPad Pro. Draw a masterpiece, take notes, or knock out a business plan. These versatile accessories are designed to take your work and creativity to the next level.
              </p>
            </motion.div>
           <div>
            <motion.div className="relative w-full h-[30rem]"
              {...tailContainerAnimation}
              >
              <Image src={laptop1}  fill-style={{objectFit: 'contain'}} />
            </motion.div>
           </div>
         </div>
       
       </div>
    </Section>

  <Section
     theme={'dark'}
        setTheme={setTheme}
    >
       <div className="flex-1 flex flex-col justify-center lg:max-w-6xl lg:mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-8">
            <motion.div className="flex flex-col gap-8 justify-center"
             initial={{
         y: 200,
         opacity: 0,
       }}
       transition={{
         duration: 1.5,
       }}
       whileInView={{
         y: 0,
         opacity: 1,
       }}
       viewport={{
         once: false
       }}
              >
               <h1 className="text-5xl xl:text-7xl font-bold text-black dark:text-white">
                 Wi-Fi 6E and 5G, Fast friends
               </h1>
              <p className="text-md font-semibold text-zinc-400"> 
               <span className="text-black text-sm font-bold dark:text-white">Blazing-fast connection.</span>{' '}iPad has always been uniquely portable with super-fast Wi-Fi and connection option, with Wi-Fi6E, you've got the fastest wireless connection available , so you'll get faster transfer of photos, document, and large video files.
              </p>
            </motion.div>
           <div>
            <motion.div className="relative w-full h-[30rem]"
              {...tailContainerAnimation}
              >
              <Image src={laptop2}  fill-style={{objectFit: 'contain'}} />
            </motion.div>
           </div>
         </div>
       
       </div>
    </Section>
    
    </div>
  </AnimatePresence>
       
    
   
  
  )
}

export default Animation
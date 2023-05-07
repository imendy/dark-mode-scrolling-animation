 import { useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

function Section({theme, setTheme, children}) {

  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center']
  })

  useMotionValueEvent( scrollYProgress, 'change', (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme)
    }
  })
  
  return (
    <div 
      className="bg-white flex flex-col min-h-screen p-8 dark:bg-black"
      ref={container}
      >
      {children}
    </div>
  )
}

export default Section
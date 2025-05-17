import {motion} from 'framer-motion'
import { FaArrowUp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {

  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <motion.footer className='bg-gray-950 text-white px-6 py-10 mt-20 relative'
    
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:0.6,ease:'easeOut'}}
  
    
    >

<div className='max-w-6xl max-auto flex flex-col md:flex-row justify-between items-center gap-6'>

<div className='text-2xl font-bold'>
<h1 className='text-2xl font-bold text-pink-500 mb-2'>Nahabwe Samuel</h1>
<p className=''>&copy;{ new Date().getFullYear()} All rights reserved </p> 
</div>
<div className='text-center space-y-2'>
  <p className='flex items-center justify-center gap-2 text-sm text-gray-300 ' >
  <FaEnvelope  className='text-pink-500 cursor-pointer' />nahabwesirmuel@gmail.com</p>
  <p className='flex items-center justify-center gap-2 text-sm text-gray-300 '>
  <FaPhoneAlt  className='text-pink-500 cursor-pointer' />+256778271814</p>
</div>
</div>

<motion.button
onClick={scrollToTop}
 whileHover={{scale:1.1}}
 whileTap={{scale:0.9}}
 className='absolute right-6 bottom-6 bg-pink-600 hover:bg-pink-500 text-white p-3 rounded-full shadow-lg transition' aria-label ="Back to top"
>
  <FaArrowUp size={18}/>
</motion.button>


    </motion.footer>
  )
}

export default Footer
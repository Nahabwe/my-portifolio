import {motion} from 'framer-motion'
import { userProfile } from '../data/data'
import { FaArrowDown } from 'react-icons/fa'


const Hero = () => {
    return (
        <section
        className='h-screen bg-white text-gray-900 flex flex-col justify-center items-center text-center dark:bg-gradient-to-br from-gray-900 via-gary-800 to-gray-700  px-6'
        >
        

         <motion.h1 className='text-3xl  md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4'
         initial={{opacity:0,y:-20}}
         animate={{opacity:1,y:0}}
         transition={{duration:1}}

         >Hey, I'm <span>{userProfile.name} </span></motion.h1>

         <motion.h2 
          initial={{opacity:0,y:-10}}
          animate={{opacity:1,y:0}}
          transition={{duration:1.2}}
         className='text-xlmd:text-2xl text-gray-300 mb-6 max-w-2xl'>{userProfile.title}</motion.h2>
         <motion.p 
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.4}}
         className='text-gray-400 max-w-xl leading-relaxed mb-8'>{userProfile.description}</motion.p>

         <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{delay:1.6}}
         className='animate-bounce text-pink-500'>
        <FaArrowDown size={30}/>
         </motion.div>
        </section>
    )
}

export default Hero
import {motion} from 'framer-motion'
const About = () => {
  return (
    <section  className='min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white'>

      <motion.img src="profile.jpg" alt="profile"
      className='w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-pink-500  '
initial={{opacity:0,scale:0.8}}
whileInView={{opacity:1,scale:1}}
transition={{duration:0.6,type:'spring',stiffness:200}}

      />

 <motion.div
  initial={{opacity:0,y:30}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.8,type:'spring',stiffness:200}}
  className='max-w-xl text-center md:text-left'
 >
     
 <motion.h1 className='text-4xl font-bold mb-4 text-pink-600'>About Me</motion.h1>

 <p className='text-lg leading-relaxed'>I'm  <span>Nahabwe Samuel</span> a passionate Fullstack Developer with strong skills in buliding modern web and mobile applications using React, Django, Node.js, and React Native. I have a solid foundation in C++, Python, and backend systems with a security-oriented mindset.
 </p>
 <p className='mt-4 text-lg leading-relaxed'>
I love turning ideas into scalable and elegant digital experience. Weather it's responsive frontend interafces or robust backend APIs, I'm focused on clean code, performance, and practical solutions.
 </p>
 </motion.div> 
    </section>
  )
}

export default About
import { projects } from '../data/data'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt'
const Projects = () => {
  return (
    <section className='min-h-screen px-6 py-16 bg-white dark:bg-gray-900 text-gray dark:text-white '>



      <div className='text-center mt-12'>
 <h2 className='text-4xl font-bold text-pink-500 mb-2'>My Projects</h2>

<p className='mb-5 text-lg text-gray-600 dark:text-gray-400'>Some things i've built recently,</p>

<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
  {projects.map((project,index)=>(
    <Tilt className='rounded-xl' key={index} glareEnable={true} glareMaxOpacity={0.25} scale={1.02} >


<motion.div className='bg-white  dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-white/10 hover:shadow-pink-500/20 transition-all duration-300'
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5, delay: index*0.2}}
viewport={{once:true}}

>
<h3 className='text-xl font-semibold mb-2 text-pink-500'>{project.title}</h3>
<p className='text-gray-700 dark:text-gray-300'>{project.description}</p>
</motion.div>
    </Tilt>
  ))}
</div>
      </div>


    </section>
  )
}

export default Projects
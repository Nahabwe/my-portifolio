import { FaCode, FaLock, FaMobileAlt, FaServer } from 'react-icons/fa'
import {motion} from 'framer-motion'
const Services = () => {
  const services=[
{title:'Web Developer',decription:'Responsive and accessible website using React, Tailwind CSS, and modern frontend stacks',
icon:<FaCode size={32}/>
},
{title:'Mobile App Development',decription:'Cross-platform mobile applications with React Native for Android and iOS',
icon:<FaMobileAlt size={32}/>
},
{title:'Backend APIs',decription:'Scalable and secure APIs using Django and DRF, Node.js, PostgreSQL, and MongoDB',
icon:<FaServer size={32}/>
},
{title:'Sexurity & Optimization',decription:'Secure authentication tuning, and best practices fo deployment',
icon:<FaLock size={32}/>
},
  ]
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 pc-6 py-16 text-gray-900 dark:text-white'>
<div className='text-center mb-12'>
<h2 className='text-4xl font-bold mt-5 text-pink-500'>What I Do </h2>
<p className='mt-2 text-lg text-gray-600 dark:text-gray-400'>I offer a range of fullstack development services to bring your ideas to life</p>
</div>

<div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto'>


{services.map((service,index)=>(
  <motion.div key={index} 
  className='bg-white dark:bg-gray-900 border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg hover:shadow-pink-500/20 transition'

  initial={{opacity:0,y:30}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:0.5,delay:index * 0.2}}
  viewport={{once:true}}
  >
    <div className='text-pink-500 mb-4'>
{service.icon}
    </div>
    <h3 className='text-2xl font-semibold mb-2'>{service.title}</h3>
<p className='text-gray-700 dark:text-gray-300'>{service.decription}</p>
  </motion.div>
))}
</div>

      
    </div>
  )
}

export default Services
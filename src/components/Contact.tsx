import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  const [formData,setFormData]=useState({name:'',email:'',message:''})

  const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
console.log('Form data submited',formData)
  }
  return (
    <section className='min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16'>

<motion.div
 initial={{opacity:0,y:40}}
 whileInView={{opacity:1,y:0}}
 transition={{duration:0.6,ease:'easeOut'}}


className='max-w-3xl mx-auto text-center mt-2'>
  <h2 className='text-4xl font-bold text-pink-500 mt-6'>Let's Connect</h2>

  <p className='mt-3 text-gray-600 dark:text-gray-400'>
    Got a project or an idea? Drop me a message -- I'd love to hear from you
  </p>

</motion.div>

<motion.form className='max-w-3xl mt-4 mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-white/10' 
onSubmit={handleSubmit}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8,type:'spring',stiffness:120}}


>

  <div className='grid gap-6 md:grid-cols-2'>
<input type="text"  placeholder='Your Name'
className='w-full p-3 rounded bg-gray-100 dark:bg-gray-800 outline-none  '
onChange={(e)=>setFormData({...formData,name:e.target.value})}
required
/>
<input type="text"  placeholder='Your Email'
className='w-full p-3  rounded bg-gray-100 dark:bg-gray-800 outline-none  '
onChange={(e)=>setFormData({...formData,email:e.target.value})}
required
/>
  </div>

<textarea  placeholder='Your Message'
className='w-full p-3  h-32 mt-6 rounded bg-gray-100 dark:bg-gray-800 outline-none  '
onChange={(e)=>setFormData({...formData,message:e.target.value})}
required
></textarea>
 
<motion.button
whileTap={{scale:0.95}}
whileHover={{scale:1.03}}
transition={{type:'spring',stiffness:300}}
type='submit' className='bg-pink-600 hover:bg-pink-500 text-white text-lg font-semibold py-3 px-6 rounded     transition w-full '>Send Message</motion.button>

      </motion.form>

    </section>
  )
}

export default Contact
import React, { useState } from 'react';
import { FaBars,  FaTimes } from 'react-icons/fa';
import ToggleThemeButton from './ToggleThemeButton';
import { Link } from 'react-router-dom';
import { FaDownload  } from 'react-icons/fa6';


 



const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
 
 const navLinks=[
  {name:'Home',path:'#home'},
  {name:'About',path:'#about'},
  {name:'Projects',path:'#projects'},
  {name:'Services',path:'#services'},
  {name:'Contact',path:'#contact'},
 ]


  return (
    <nav className='fixed w-full bg-gray-900 dark:bg-black text-white px-6 py-4 flex justify-between items-center z-50 shadow-md'>
<div className='text-2xl font-bold text-pink-500'>NS</div>

<ul className='hidden md:flex gap-8 items-center'>
  {navLinks.map((link)=>(
    <li key={link.name}>
      <a href={link.path} className='hover:text-pink-500 transition'>{link.name}</a>
    </li>
  ))}
  <li>
    <a href="/resume.pdf" download className='bg-pink-600 text-white py-1 px-4 rounded hover:bg-pink-500'>
      Resume
    </a>
  </li>
  <li>
    <ToggleThemeButton/>
  </li>
</ul>

<div className='md:hidden z-50'
onClick={()=>setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}

  {/* mobile nav */}
</div>

  <ul className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 dark:bg-black flex flex-col items-center justify-center gap-8 transition-all duration-300 ${menuOpen ? 'opacity-100 visible': 'opacity-0 invisible'}`}>


{navLinks.map((link)=>(
  <li key={link.name}>
<a href={link.path}
onClick={()=>setMenuOpen(false)}
className='text-2xl hover:text-pink-50 transition'
>{link.name}</a>
  </li>
))}
<li>
  <a href="/resume.pdf" download className='bg-pink-600 tex-white py-2 px-6 rounded hover:bg-pink-500 transition'
  onClick={()=>setMenuOpen(false)}
  >
    Resume
  </a>
  <li className='mt-2 text-center '>
    <ToggleThemeButton />
  </li>
</li>
  </ul>



    </nav>
  )
}

export default Navbar
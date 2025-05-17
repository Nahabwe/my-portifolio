import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Hero from './components/Hero'


const App = () => {

  return (
    < >
    <Navbar/>
    <main  className='scroll-smooth'>

    <section id='home'>
    <Hero /> 
    </section>
    <section id='about'>
    <About /> 
    </section>
    <section id='projects'>
    <Projects /> 
    </section>
    <section id='services'>

    <Services /> 
    </section>

    <section id='contact'>
    <Contact /> 
    </section>
    </main>

      {/* <Route path='/' element={<Hero /> } />
      <Route path='/about' element={<About /> }/>
      <Route path='/projects' element={<Projects /> }/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact' element={ <Contact/>}/> */}
 
      <Footer /> 
    </>
  )
}

export default App
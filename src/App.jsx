import React from 'react'
import Navbar from './Components/Navbar'
import Topse from './Components/Topse'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Brands from './Components/Brands'
import Run from './Components/Run'
import Testimonials from './Components/Testimonials'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='' style={{width:"98.6vw"}}>
     <Navbar/>
     <Topse/>
     <About/>
     <Services/>
     <Brands/>
     <Run/>
     <Form/>
     <Testimonials/>
     <Contact/>
    </div>
  )
}

export default App

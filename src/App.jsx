import React from 'react'
import Navbar from './Components/Navbar'
import Topse from './Components/Topse'
import About from './Components/About'
import Contact from './Components/Contact'
import Brands from './Components/Brands'
import Run from './Components/Run'
import Testimonials from './Components/Testimonials'
import Form from './Components/Form'
import Serv from './Components/Serv'
import Visit from './Components/Visit'

const App = () => {
  return (
    <div className='' style={{width:"99vw"}}>
     <Navbar/>
     <Topse/>
     <About/>
     <Serv/>
     
     <Brands/>
     <Run/>
     <Form/>
     <Testimonials/>
     <Visit/>
     <Contact/>
    </div>
  )
}

export default App

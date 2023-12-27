import { useState } from 'react'   
import './compo/Sty.css'; 
import Folio from './compo/Folio'  
import { BrowserRouter as Router, Routes, Route , Link } from 'react-dom' ; 


//npm create vite@latest

function App() { 
  return (
    <>
      <nav>
          <h3>Ravi's Portfolio</h3> 
      </nav>
      <Folio />
      {/* <Ex /> */}

      {/* <div> 
        <h1>Ravi</h1>
      </div>  */}


      {/* <Router>
        <nav>
          <h3>Ravi's Portfolio</h3> 
          <ul>  
            <li>
              <Link className='li' to="/work">Work Expierence</Link>
            </li>
            <li>
              <Link className='li' to="/project">Projects</Link>   
            </li>
            <li>
              <Link className='li' to="/services" >Services</Link>
            </li>
            <li>
              <Link className='li' to="/about">About</Link>
            </li>  
            <li>
              <Link className='li' to="/">Home</Link>
            </li>
          </ul>
        </nav>   


        <Routes>
          <Route path="/about" element={<Folio />}/> 
          <Route path="/" element={<Folio />}/> 
        </Routes>   
      </Router>  */}
    </>
  )
}

export default App

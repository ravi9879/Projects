import Folio from './compo/Folio'; 
// import './compo/Style.css';

import './compo/Sty.css';

import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom' ; 
 

function App() {
 
  
  return (
    <>
      <Router>
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
      </Router>   
    </>
  ) 
}

export default App ;



// import { BrowserRouter as Router, Routes, Route, Link , useLocation } from 'react-router-dom' ;  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;  
import Portfolio from './files/Portfolio' 
import About from './files/About.js'
import Project from './files/Project.js'
import Work from './files/Work.js'
import Services from './files/Services.js'
import Nav from './files/Nav.js'
import './files/Style.css'  
import Connect from './files/Connect.js'
import * as React from 'react'



function App() {
  
  // React.useEffect(()=> {
  //   console.log(location.pathname) ;
  // } , [location]);

  return (
    <>
      <Router> 
        <Nav />
      
        

        <Routes>
          <Route path="/about" element={<About />}/>  
          <Route path="/services" element={<Services />}/>  
          <Route path="/project" element={<Project />}/>  
          <Route path="/work" element={<Work />}/>  
          <Route path="/connect" element={<Connect />}/>  
          <Route path="/" element={<Portfolio />}/> 
        </Routes>   
      </Router>   
    </>
  );
}

export default App ;
  
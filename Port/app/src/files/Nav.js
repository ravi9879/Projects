import React from 'react'
import {Link , useLocation} from 'react-router-dom'

function Nav() {
   
  let location = useLocation() ;
  // console.log(location);

  return (
    <nav className='container1'>
          <h3>Ravi's Portfolio</h3>   
          <Link className={`${location.pathname==="/" ? "" : "li"}`} to="/">Home</Link> 
          {/* <Link className={`li`} to="/">Home</Link>  */}
          <Link className={`${location.pathname==="/about" ? "" : "li"}`} to="/about">About</Link> 
          <Link className={`${location.pathname==="/services" ? "" : "li"}`} to="/services" >Services</Link> 
          <Link className={`${location.pathname==="/project" ? "" : "li"}`} to="/project">Projects</Link>    
          <Link className={`${location.pathname==="/work" ? "" : "li"}`} to="/work">Work Expierence</Link>   
    </nav>   

  )
}

export default Nav
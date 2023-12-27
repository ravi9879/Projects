import React , { useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';

export default function Lo() {
    const [name , setname] = useState('') ;
    const [id , setid] = useState('') ;
    const [password , setpassword] = useState('') ;
  
    const av = useNavigate() ;
    const se = (event) => {
      event.preventDefault() ;
      axios.post('http://localhost:800/si/', {id : id , name : name , password : password} ) 
      .then(res=> {
        console.log(res) ;
        av('/');
      }) ; 
    }

    const ssid = (event)=> { 
      setid(event.target.value); 
    } 

    const mss = (event)=> { 
      setname(event.target.value); 
    } 
 
    const ssed = (event)=> { 
      setpassword(event.target.value); 
    }  
    
  return (
      <> 
        <form onSubmit={se} className='form' >
          <div>
            <p id="s">EMAIL-ID : <input type="text" name="id" placeholder="enter your email id" onChange={ssid } /></p>
            <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
            <p className="s">PASSWORD : <input type="text" name="password" placeholder="enter your password" onChange={ ssed}  /></p> 
            <button >submit</button>
            <p>Not A User  <Link to="/" >  LOGIN</Link>  </p>
          </div>
        </form>   
      </>
  )
}

import React ,{useState} from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom'; 

export default function Update() {
    const [id , setid] = useState('') ; 
  
    const av = useNavigate() ;
    const se = (event) => {
      event.preventDefault() ;
      axios.post('http://localhost:800/delete/', {id : id } ) 
      .then(res=> {
        console.log(res) ;
        av('/studs');
      }) ; 
    }

    const ssid = (event)=> { 
      setid(event.target.value); 
    }   
    
  return (
      <>
        <nav>
          <ul>
            <li>
              <Link  to="/">Home</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>   
            </li>
            <li>
              <Link to="/studs" >Studs</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>  
          </ul>
        </nav>  
        <form onSubmit={se} >
          <div>
          <p id="s">ID : <input type="text" name="id" placeholder="enter your roll no" onChange={ssid } /></p> 
          <button >submit</button>
          </div>
        </form>   
      </>
  )
}

// onClick={se}
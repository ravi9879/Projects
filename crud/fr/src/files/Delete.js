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
            <Link className='li'  to="/">Home</Link> 
            <Link className='li' to="/delete">Delete</Link> 
            <Link className='li'   to="/update">Update</Link> 
            <Link  className='li' to="/studs" >Studs</Link> 
            <Link className='li'  to="/create">Create</Link> 
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
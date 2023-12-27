import React ,{useState} from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom'; 

export default function Create() {
    const [name , setname] = useState('') ;
    const [id , setid] = useState('') ;
    const [gender , setgender] = useState('') ;
  
    const av = useNavigate() ;

    const se = async (event) => { 
      event.preventDefault() ;
      try{
        await axios.post('http://localhost:800/create/', {id : id , name : name , gender : gender} ) 
          av('/studs');
      }
      catch(err){
        console.log("error") ;
      }
    }


    // const se = (event) => {
    //   event.preventDefault() ;
    //   axios.post('http://localhost:800/create/', {id : id , name : name , sex : sex} ) 
    //   .then(res=> { 
    //     console.log(res) ;
    //     av('/studs');
    //   }) ; 
    // }

    const ssid = (event)=> { 
      setid(event.target.value); 
    } 

    const mss = (event)=> { 
      setname(event.target.value); 
    } 
 
    const ssed = (event)=> { 
      setgender(event.target.value); 
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
        <form onSubmit={se} className='form' >
          <div>
          <p id="s">ID : <input type="text" name="id" placeholder="enter your roll no" onChange={ssid } /></p>
          <p className="s">NAME : <input type="text" name="name" placeholder="enter your name" onChange={ mss} /></p>
          <p className="s">GENDER : <input type="text" name="gender" placeholder="enter your sex" onChange={ ssed}  /></p> 
          <button >submit</button>
          </div>
        </form>   
      </>
  )
}
 
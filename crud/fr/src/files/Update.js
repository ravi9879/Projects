import React ,{useState} from 'react'
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom'; 

export default function Update() {
    const [id , setid] = useState('') ; 
    const [value , setvalue] = useState('') ; 
    const [update , setupdate] = useState('') ; 
    

    const av = useNavigate() ;
    const se = (event) => {
      event.preventDefault() ;
      axios.post('http://localhost:800/update/', {update : update  ,value : value ,id : id } ) 
      .then(res=> {
        console.log(res) ;
        av('/studs');
      }) ; 
    }

    const ssid = (event)=> { 
      setid(event.target.value); 
    }
    
    const ssx = (event)=> { 
      setvalue("sex"); 
    }


    const ssm = (event)=> { 
      setvalue("name"); 
    }

    const ssu = (event)=> { 
      setupdate(event.target.value); 
    }
    

    const c5 = ()=> { 
      let t = document.getElementById('c1'); 
      t.style.display = 'block' ;
    }
 

    const c4 = ()=> { 
      let t = document.getElementById('c2'); 
      t.style.display = 'block' ;
    }
 

    let c3 = {
      display : 'none'  
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
        <form onSubmit={se} className='form'>
          <div>
          <p id="s">ID : <input type="text" name="id" placeholder="enter your roll no" onChange={ssid } /></p>  
          <p> UPDATE : NAME <input type="radio" name="value" onClick={c5}  onChange={ssm }/ > SEX <input type="radio" name="value" onClick={c4}  onChange={ssx }/> </p>
          <p style={c3} id="c1">NAME : <input type="text" name="update" placeholder="enter updated name" onChange={ssu } /></p>  
          <p style={c3} id="c2">SEX : <input type="text"  name="update" placeholder="enter updated sex" onChange={ssu } /></p>  
          <button >submit</button>
          </div>
        </form>   
      </>
  )
}
 
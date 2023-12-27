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
        <form onSubmit={se} className='form' id='form'>
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
 
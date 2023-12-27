import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {  Link } from 'react-router-dom' ;   
export default function Lo() {
    const [id , setid] = useState('') ;
    const [password , setpassword] = useState('') ;
    // axios.defaults.withCredentials = true ;
    

    const av = useNavigate() ;

    const se = async (event) => {
      event.preventDefault() ;
      try{
        await axios.post('http://localhost:800/lo/', {id : id , password : password} ,async (req , res)=> {
          if(res.Status === 'Success'){
             
          } 
        } )
        av('/studs');
        
        
      }
      catch(err){
        console.log("error") ;
      }
    }

    // const se = (event) => {
    //   event.preventDefault() ;
    //   axios.post('http://localhost:800/lo/', {id : id ,  password : password} ) 
    //   .then(res=> {
    //     console.log(res) ;
    //     if(res.data.Status === "Success"){
    //       av('/studs');
    //     }
    //     else{
    //       av('/si');
    //     }
    //   })  
    // }

    const ssid = (event)=> { 
      setid(event.target.value); 
    }  
 
    const ssed = (event)=> { 
      setpassword(event.target.value); 
    }  
    
  return (  
    <>
      <form onSubmit={se} className='form' >
        <div>
          <p id="s">EMAIL-ID : <input type="text" name="id" placeholder="enter your email id" onChange={ssid } /></p> 
          <p className="s">PASSWORD : <input type="text" name="password" placeholder="enter your password" onChange={ ssed}  /></p> 
          <button >submit</button>
          <p>Not A User  <Link to="/si" >  SIGN-UP</Link>  </p>
        </div>
      </form> 
    </>
  )
}
  

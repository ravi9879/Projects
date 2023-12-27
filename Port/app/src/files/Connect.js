import React from 'react'
import { useNavigate } from 'react-router-dom';

function Connect() {

    const av = useNavigate() ;

    const submit = () => {
        av('/') ;
    }

  return (
    <>
    <div className='flex-2'>
        <h1>Enter Your Details </h1> 
        <p>Name : <input type="text" class="i" id="m" /></p>    
        <p>Email ID : <input type="text" class="i" id="y" /></p>
        <p>Mobile No : <input type="text" class="i" id="b" /></p>
        <button onClick={submit}>Submit</button> 
         
    </div>
    </>
  )
}

export default Connect
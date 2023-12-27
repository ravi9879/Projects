import React from 'react'
import Sel from './Sel.jpg' 
// import Typed from 'typed.js';



export default function Folio() {  

//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//     strings: ['Coder.', 'Frontend Developer.' ,'Backend Developer.' ],
//     typeSpeed: 50,
//     startDelay : 1000 , 
//     });

//     return () => { 
//         typed.destroy();
//       };
//   }, []); 

  
  return ( 
    <>   
      <div className='flex-1'>   
        <img src={Sel} alt={Sel} className='sel' />
        <div className='flex-2'>
            <h1>Hi , I am Ravi Prasad Gupta .</h1> 
            <h1>I am a Passionate </h1>  
            <button>Download Resume</button>
            <button>Connect To Me</button>
        </div>    
        
      </div> 
    </>
  )
}

import React from 'react'
import Sel from './images/Sel.jpg'
import insta from './images/insta.png'
import fb from './images/fb.png'
import github1 from './images/github1.png'
import Typed from 'typed.js'; 
import { useNavigate } from 'react-router-dom';

function Portfolio() {

  

  const av = useNavigate() ;
 
  const connect =()=>{ 
    av('/connect')
  }

  
  // const instag =()=>{  
  //   <a href='https://github.com/ravi9879'></a>
  //   av('https://github.com/ravi9879')
  // }

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
    strings: ['Coder.', 'Frontend Developer.' ,'Backend Developer.' ],
    typeSpeed: 50,
    startDelay : 1000 , 
    });

    return () => { 
        typed.destroy();
      };
   }, []);      
  
  



  return (
    <>   
      <div className='flex-1'>   
        <img src={Sel} alt={Sel} className='sel' />
        <div className='flex-2'>
            <h2>Hi , I am <span>Ravi Prasad Gupta </span>.</h2> 
            <h2>I am a Passionate <span ref={el} /> </h2>  
            <button>
              <a href='https://drive.google.com/file/d/1cIZuBQ7z8KKMouWDVmh5AkdabtDro1Mc/view?usp=sharing'>Download Resume</a>
            </button>
            <button onClick={connect} >Connect To Me</button>
            <div className='flex-3'>
              <a href='https://github.com/ravi9879'><img src={insta} alt={Sel} className='all'/></a>
              <a href='https://github.com/ravi9879'><img src={fb} alt={Sel} className='all' /></a>
              <a href='https://github.com/ravi9879'><img src={github1} alt={Sel} className='all' /></a> 
            </div>
        </div>
        
      </div>
       
      
    </>
  )
}

export default Portfolio 



// bkfhhgkj 8448044198 8920761068 8920380116 8368341245
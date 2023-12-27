import React , {useState} from 'react'
 
// we ca use as may state we wat to use 
 
export default function State1() {
   
  let qw =  { 
    backgroundColor : 'red'  ,
    color : 'cyan', 
    width : '100px' ,
    height : '100px',
    transform: 'rotateZ( 45deg )' ,  
    margin : '100px' ,
    boxShadow : '10px 10px grey' , 
  }

  const [pw , tw] = useState( {
    color : 'red'  
  } ); 

  const [ui,ti] = useState( )

  const p = ()=> {
    ti({
      backgroundColor : 'red'
    })
  }

  
  const q = ()=> { 
    document.body.style.backgroundColor = 'cyan' ; 
  }

  
  const r = ()=> { 
    document.body.style.backgroundColor = 'red' ; 
  }


  const tu = ()=> {
    if(pw.color === 'red') {
      tw({
         color : 'cyan'  
      })
    } 
    else {
      tw({
      color : 'red'  
      })
    }
  }
 
    
  const arr =  ['r' ,'a' ,'v' ,'i' ] ;

    


  function s(t1){
    let q = 0 ;
    for(let i = 0 ; i < t1 ; i++ ){
      q = q + i ; 
    }
    return q ;
  } 

  const sum = ()=> {
    let w = s(t1); 
    for(let i = 0 ; i < t1 ; i++ ){
      console.log(i) ;
      t4(arr[i]) ;
    }
    console.log(w) ;
    t4(w);
  }

  const up = ()=> {
    console.log(t3);
    let ew = t3.toUpperCase( ); 
    t2(ew);  

    // document.body.style.display = 'none' ; 
 
    let t = document.getElementById('aw'); 
    if(t.style.display !== 'none' ){
      t.style.display = 'none' ;
    }
    else {
      t.style.display = 'block' ;
    }  

  }

  const cs1 = (event)=> {
    console.log(t1);
    t4(event.target.value);    //t3 will cae t3 ad value eterd
  }
  
  const cs = (event)=> {
    console.log(t3);
    t2(event.target.value);    //t3 will cae t3 ad value eterd
  }


  const [t3 , t2] = useState(' ');
  const [t1 , t4] = useState('0');  
  
  
  return (
    <div>
       {/* <p>mess - {t3} </p>      value i iput is ot eede , if you wat to diplay i messae  */}
       <p>mess : <input type='t3' onChange={cs} className='r' value={t3} placeholder='enter message' /></p>
       <button className='s'  onClick= {up} >UpperCase</button> 
       <p>mess : <input type='t1' onChange={cs1} className='r'  placeholder='enter message' /></p>
       <button className='s' onClick= {sum} >Sum</button>
       <h1 style={ui}>Raj</h1>
       <h3 >Text is {t3}</h3>
       <h3>Answer is {t1}</h3>
       <div  id='aw'  style={qw}>Ravi</div> 
       <button className='s' style={pw} onClick= {tu} >dark</button>
       <button className='s' onClick= {q} >dark</button>
       <button className='s' onClick= {r} >dark</button>
       <button className='s' onClick= {p} >dark</button>
    </div>
  )
  } 
 
import React , {useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' ;   

function Ans() {
    // const [id , setid] = useState('') ;
    // const [password , setpassword] = useState('') ;
    // axios.defaults.withCredentials = true ;
    


    const [stud , setstud] = useState([]) ; 

    const av = useNavigate() ;
    useEffect(()=> {
        axios.get('http://localhost:800/solved').then((res) => { 
        setstud(res.data);
        console.log(res.data) ;
        // av('/')
        })
        .catch(err => console.log('err'));  
    }, [])
 
    

    const new_solve = (event)=> { 
        av('/');
      }  
   
    //   const ssed = (event)=> { 
    //     setpassword(event.target.value); 
    //   } 

  return (
    <> 
      <div id='sec_element'>
          <h1>Solved Suduko is : </h1> 
          <table>
              <thead> 
              </thead>
              <tbody>       
                  { 
                  stud.map((data ,i)=> 
                      <tr> 
                          <td>{data[0]}</td> 
                          <td>{data[1]}</td> 
                          <td>{data[2]}</td> 
                          <td>{data[3]}</td> 
                          <td>{data[4]}</td> 
                          <td>{data[5]}</td> 
                          <td>{data[6]}</td> 
                          <td>{data[7]}</td> 
                          <td>{data[8]}</td> 
                      </tr>
                      )      
                  } 
              </tbody> 
          </table> 
      </div>
      {/* <button >New Suduko</button>  */}
      <button onClick={new_solve} >New Suduko</button> 
    </>
  )
}

export default Ans
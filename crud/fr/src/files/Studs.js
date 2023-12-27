import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {  Link} from 'react-router-dom';


export default function Studs() {
  const [stud , setstud] = useState([]) ;


  // const av = useNavigate() ;
  useEffect(()=> {
    axios.get('http://localhost:800/studs/').then((res) => { 
      setstud(res.data);
      // console.log(stud);
    })
    .catch(err => console.log('err'));  
  }, [])


  // const se = (event) => {
  //   event.preventDefault() ;
  //   axios.get('http://localhost:800/studs/') 
  //   .then(res=> {
  //     setstud(res.data);
  //     av('/');
  //   }) ; 
  // }

  return (
    <> 
      <nav> 
            <Link className='li'  to="/">Home</Link> 
            <Link className='li' to="/delete">Delete</Link> 
            <Link className='li'   to="/update">Update</Link> 
            <Link  className='li' to="/studs" >Studs</Link> 
            <Link className='li'  to="/create">Create</Link> 
      </nav> 
    <div className='fox' >
      <table>
          <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SEX</th> 
                  </tr>
          </thead>
          <tbody>       
              {
                stud.map((data , i ) => ( 
                   
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.sex}</td> 
                      </tr>     
                   
                ))  
              }


          </tbody>
          
      </table>
    </div>  
    </>
  ) 
}
import Studs from './files/Studs' ;
import Create from './files/Create';
import Update from './files/Update';
import Delete from './files/Delete' ;
import './Style.css';
import Lo from './files/Lo'; 
import Si from './files/Si'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;  


//npm create vite@latest

function App() { 
  return (
    <>
    <div>    
      <Router> 
  
        <Routes>
          <Route path='/' element={<Lo />}></Route>
          <Route path='/studs' element={<Studs />}></Route>
          <Route path='/update' element={<Update />}></Route>
          <Route path='/delete' element={<Delete />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/si' element={<Si />}></Route>
        </Routes> 
      </Router>
    </div> 
    </>
  )
}

export default App

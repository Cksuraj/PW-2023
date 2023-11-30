import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';  // Using React router 
import Login from './Componante/login'
import Signup from './Componante/signup'


function App() { 
  return (
    <div className='App  h-[100vh]  flex justify-center items-center'>
    <Router>
      <Routes>
      <Route  path='/login' element={<Login />} />   {/*  Login componante using Router,Routes and Route */}
      <Route path='/signup' element={<Signup />} />  {/* Signup componante */}
    </Routes>
    </Router>
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import Login from './components/Auth/Login'
// import Navbar from './components/Auth/Navbar';
import {  Routes, Route } from "react-router-dom";
// import Contact from './components/Auth/Contact';
// import Signin from './components/Auth/Signin';
import { useState } from 'react';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage,  } from './Utiles/localStorage';
import { useEffect } from 'react';
import { AuthContext } from './Context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null)
  const Authdata =useContext(AuthContext)
  console.log(Authdata)

  const handleLogin=(email,password)=>{
if(email === 'admin@gmail.com' && password === '123'){
  setUser('admin')
  console.log('this is admin')
}
  else if(email ==='user@gmail.com' && password ==='123'){
setUser('employee')
    console.log('this is user')
  }
  else{
    alert('invalid email or password')
  }
}
// handlelogin('admin@gmail.com',123)

  
  useEffect(() => {
    getLocalStorage()
  
  }, )
  
  // <Signin/>
  return (
  <>
  {/* {!user ? <Login handleLogin={handleLogin}/>: '' } */}
  
  {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/> */}
  
  
  
  
   
      {/* <Navbar title="fampage" Home="Home" Login="LOGIN" mode={mode} toggleMode={toggleMode}/> */}
      {/* <Header/> */}
      {/* <Contact/> */}
  <Routes>
   
   <Route exact path="/Login" element={!user ? <Login handleLogin={handleLogin}/>: '' } />

   {/* <Route exact path="/Contact" element={<Contact />} /> */}
   {/* <Route exact path="/Signin" element={< Signin/>} /> */}
   {/* <Route exact path="/Employeedashboard" element={< EmployeeDashboard/>} /> */}
   {/* <Route exact path="/AdminDashboard" element={< AdminDashboard/>} />  */}
   
  
</Routes>
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}

  </>
  )
}

export default App;

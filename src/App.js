import React from 'react'
import Login from './components/Auth/Login'
// import Navbar from './components/Auth/Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from './components/Auth/Contact';
// import Signin from './components/Auth/Signin';
import { useState } from 'react';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage,  } from './Utiles/localStorage';
import { useEffect } from 'react';

const App = () => {
  const [user, setuser] = useState(null)

  const handleLogin=(email,password)=>{
if(email === 'admin@gmail.com' && password === '123'){
  setuser('admin')
  console.log('this is admin')
}
  else if(email ==='user@gmail.com' && password ==='123'){
setuser('user')
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
  {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user === 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
  <Login/>
  {/* <EmployeeDashboard/> */}
  {/* <AdminDashboard/> */}
  
  
  
  
  {/* <BrowserRouter> 
      {/* <Navbar title="fampage" Home="Home" Login="LOGIN" mode={mode} toggleMode={toggleMode}/> */}
      {/* <Header/> */}
      {/* <Contact/> */}
  {/* <Routes>
   
   <Route exact path="/Login" element={<Login />} />

   <Route exact path="/Contact" element={<Contact />} />
   <Route exact path="/Signin" element={< Signin/>} />
   <Route exact path="/Employeedashboard" element={< EmployeeDashboard/>} />
   <Route exact path="/AdminDashboard" element={< AdminDashboard/>} /> */}
   
{/*   
</Routes>
</BrowserRouter> */}
  </>
  )
}

export default App;

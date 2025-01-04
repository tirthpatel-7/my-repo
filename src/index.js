import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
// import AuthContext from './Context/AuthContext.js'
// import TaskContext from './Context/TastContext.js'
import AuthProvider from './Context/AuthProvider.js';
// localStorage.clear()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   
<AuthProvider>
    <App/>
</AuthProvider>
   
    
  </BrowserRouter>
);
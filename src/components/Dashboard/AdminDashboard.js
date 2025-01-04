import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
// import AllTask from '../others/AllTask
const AdminDashboard = () => {
  return (
    <div>
      <Header/>
      <div className=' flex '>
     <CreateTask/>
     <AllTask/>
     </div>

    </div>
  )
}

export default AdminDashboard

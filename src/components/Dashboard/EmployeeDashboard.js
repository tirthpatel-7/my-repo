import React from 'react'
import Header from '../others/Header'
import TaskListnumbers from '../others/TaskListnumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
    {/* <div className=''> */}
      <Header/>
      <TaskListnumbers/>
      <TaskList/>
     {/* </div> */}
    </>
  )
}

export default EmployeeDashboard

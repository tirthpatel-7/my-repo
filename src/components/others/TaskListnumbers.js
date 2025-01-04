import React from 'react'

const TaskListnumbers = () => {
  return (
    <div className='flex mt-10 screen justify-evenly  '>
        <div className='rounded-xl  h-15 w-[20%] py-10 shadow-lg shadow-gray-500 bg-sky-200 '>
            <h2 className='text-3xl font-semibold mx-4'>0</h2>
            <h2 className='text-3xl font-semibold  mx-4 py-2'>New Task</h2>
        </div>
        <div className='rounded-xl h-15 w-[20%] py-10 shadow-lg  shadow-gray-500 bg-yellow-200'>
            <h2 className='text-3xl font-semibold mx-4'>0</h2>
            <h2 className='text-3xl font-semibold mx-4 py-2'>New Task</h2>
        </div>
        <div className='rounded-xl h-15 w-[20%]  py-10 shadow-lg  shadow-gray-500 bg-green-300'>
            <h2 className='text-3xl font-semibold mx-4'>0</h2>
            <h2 className='text-3xl font-semibold mx-4 py-2'>New Task</h2>
        </div>
        <div className='rounded-xl  h-15 w-[20%] py-10 shadow-lg  shadow-gray-500 bg-red-300'>
            <h2 className='text-3xl font-semibold mx-4'>0</h2>
            <h2 className='text-3xl font-semibold mx-4 py-2'>New Task</h2>
        </div>
       
     </div>
  )
}

export default TaskListnumbers

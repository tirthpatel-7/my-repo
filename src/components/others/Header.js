import React from 'react'

const Header = () => {
  return (
    <div className="flex items-end justify-around my-6">
      <h1 className="text-xl font-medium">Hello<br/><span className='text-3xl font-semibold'>Tirth</span></h1>
      <button type="button"   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" > Log Out</button>
      
    </div>
  )
}

export default Header

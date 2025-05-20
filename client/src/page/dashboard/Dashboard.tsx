import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full h-full p-20'>
        <Outlet/>
    </div>
  )
}

export default Dashboard
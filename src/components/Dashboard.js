import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <Link to="users ">Users</Link>
            <Link to="students">Students</Link>
        </nav>
        <Outlet />
    </div>
  )
}

export default Dashboard
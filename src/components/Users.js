import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
        <h1>List of Users</h1>
        <nav>
            <Link to="user1">User One</Link>
            <Link to = "user2">User Two</Link>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Users
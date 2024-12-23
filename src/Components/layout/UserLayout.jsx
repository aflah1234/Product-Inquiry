import React from 'react'
import UserHeader from '../UserHeader'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
    <nav>
        <UserHeader/>
    </nav>
    <Outlet/>
    </>
  )
}

export default UserLayout
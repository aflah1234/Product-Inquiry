import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
    <nav>
        <Header/>
    </nav>
    <Outlet/>
    </>
  )
}

export default HomeLayout
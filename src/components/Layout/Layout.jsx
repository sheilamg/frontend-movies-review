import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


export const Layout = () => {

  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

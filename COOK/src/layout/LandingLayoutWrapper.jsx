import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingFooter from './LandingFooter'
import LandingNav from './LandingNav'

export default function LandingLayoutWrapper() {
  return (
    <>
      <LandingNav />
      <Outlet />
      <LandingFooter />
    </>
  )
}

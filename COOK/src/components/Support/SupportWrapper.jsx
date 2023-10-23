import React from 'react'
import { Outlet } from 'react-router-dom'
import SupportFooter from './SupportFooter'
import SupportNav from './SupportNav'

export default function SupportWrapper() {
  return (
    <>
      <SupportNav />
      <Outlet />
      <SupportFooter />
    </>
  )
}

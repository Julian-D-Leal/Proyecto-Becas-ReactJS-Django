import React, { Fragment } from 'react'
import Navbar from '../Navbar'

export default function Layout({children}) {
  return (
    <Fragment>
      <Navbar/>
      {children}
    </Fragment>
  )
}

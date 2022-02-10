import React, { useState } from 'react'
import Header from '../Header/Head'
import SideBar from '../Header/SideBar'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </>
  )
}

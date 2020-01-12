import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import OverlayMenu from "./OverlayMenu"
import Hamburger from "./Hamburger"
import Footer from "./Footer"

import "./layout.css"
// import "bootstrap/dist/css/bootstrap-grid.css"

const Primary = styled.div`
  padding: 110px;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Hamburger />
    </>
  )
}

export default Layout

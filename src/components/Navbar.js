import React from 'react'
import  { useState } from 'react'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    LogoImg,
  } from "../styles/Navbar.styles"

  import {VscMenu, VscChromeClose, VscAccount, VscSignOut} from "react-icons/vsc"
  import { motion } from 'framer-motion'
  import LOGO from '../assets/LOGO.png'
 

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo to="/" onClick={() => {setExtendNavbar((curr) => !curr)}}><LogoImg src={LOGO} /></Logo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer> 
          {/* Navigation menu */}
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/products" > Products</NavbarLink>
            <NavbarLink to="/contact"> Contact Us</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink>
            {/* Account button components */}
            <NavbarLink to="/signup"> <VscAccount style={{width: "1rem", height: "1rem"}}/></NavbarLink>
            <NavbarLink to="/logout"> <VscSignOut style={{width: "1rem", height: "1rem", marginLeft: "-0.567rem"}}/></NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <VscChromeClose style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}/> : <VscMenu style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}/>} 
            </OpenLinksButton>
          </NavbarLinkContainer>
          
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer as={motion.div} 
        initial={{y: -100, opacity: 0.7}}
        animate={{ y: 100, opacity: 1 }}
        exit={{y: 0, opacity:0}}>
          {/* Navigation */}
          <NavbarLinkExtended to="/" onClick={() => {setExtendNavbar((curr) => !curr)}}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products" onClick={() => {setExtendNavbar((curr) => !curr)}}> Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact" onClick={() => {setExtendNavbar((curr) => !curr)}}> Contact Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/about" onClick={() => {setExtendNavbar((curr) => !curr)}}> About Us</NavbarLinkExtended>
          {/* Account button components */}
          <div>
          <NavbarLinkExtended to="/signup" onClick={() => {setExtendNavbar((curr) => !curr)}}> <VscAccount style={{width: "1.3rem", height: "1.3rem"}}/></NavbarLinkExtended>
            <NavbarLinkExtended to="/logout" onClick={() => {setExtendNavbar((curr) => !curr)}}> <VscSignOut style={{width: "1.3rem", height: "1.3rem"}}/></NavbarLinkExtended>
          </div>
         
          
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar
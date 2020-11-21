import React, {useEffect, useState} from "react"
import "./layout.css"
import Footer from "../sections/common/Footer";
import styled from "styled-components";
import {motion} from "framer-motion";
import {breakPoints} from "../app-config";
import MenuMobile from "../sections/common/MenuMobile";

const Layout = (props) => {
    const [displayMenu, setDisplayMenu] = useState(false)

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    return (
        <>
            <Container>
                <MenuWrapper displayMenu={displayMenu}>
                    <MenuMobile toggleMenu={toggleMenu} />
                </MenuWrapper>
                <MenuLink
                    onClick={() => toggleMenu()}
                    location={props.location.pathname}
                    displayMenu={displayMenu}>
                    {displayMenu && <span>Close</span>}
                    {displayMenu === false && <span>Menu</span>}
                </MenuLink>
                <div>{props.children}</div>
                <Footer/>
            </Container>
        </>
    )
}

const MenuLink = styled(motion.button)`
   font-weight: 600;
   color:  ${props => props.location === "/" || props.displayMenu ? 'white' : 'black'};
   position:absolute;
   z-index: 20;
   top: 50px;
   right: 40px;
   background: none;
   border: none;
   outline: none;
   @media  (min-width:  ${breakPoints.sm}) {
    display: none;
  }
  &:hover{
    cursor: pointer;
  }
`

const MenuWrapper = styled(motion.div)`
    display: ${props => props.displayMenu ? 'grid' : 'none'};
     @media  (min-width:  ${breakPoints.sm}) {
      display: none;
    }
`

const Container = styled(motion.div)`
  overflow: hidden;
`


export default Layout

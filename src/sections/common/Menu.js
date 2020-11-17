import React from "react";
import styled, {withTheme} from "styled-components";
import { Link } from "gatsby"
import {breakPoints} from "../../app-config";
import circleLogo from "../../images/circleLogo.svg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeIn, scale} from "../../animation";
import {useEffect} from "react";


const Menu = (props) => {
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <Container
            ref={contentRef}
            animate={animation}
            initial='initial'
            variants={containerAnim}>
            <LinkWrapper>
                <StyledLink to={'accueil'}>accueil</StyledLink>
                <StyledLink to={'a-propos'}>À propos</StyledLink>
                <StyledLink to={'partenaires'}>Partenaires</StyledLink>
                <StyledLink to={'contact'}>Contact</StyledLink>
            </LinkWrapper>
        </Container>
    )
}

export default withTheme(Menu)

const Container = styled(motion.div)`
  position: relative;
`
const LinkWrapper = styled(motion.div)`
  
`

const Wrapper = styled.div`
  padding-left: 20px;
  width: 1000px;
  margin: 0 auto;
  @media (min-width: ${breakPoints.md}){
      padding-top: 150px;
  }
`

const StyledLink = styled(Link)`

`

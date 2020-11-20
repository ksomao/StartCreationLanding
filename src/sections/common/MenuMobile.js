import React, {useEffect, useState} from "react";
import styled, {withTheme} from "styled-components";
import {Link} from "gatsby"
import {breakPoints} from "../../app-config";
import ScLogo from "../../images/logo.svg";
import {motion, useAnimation} from "framer-motion";
import {default as LinkText} from "../../components/Text";
import {containerAnim, fadeInUp, fadeInUp2} from "../../animation";
import {useInView} from "react-intersection-observer";
import {useMenuState} from "../../helpers";


const MenuMobile = (props) => {
    const animation = useAnimation();
    const [stateRef, setState] = useMenuState(false);

    const [contentRef, inView] = useInView({
        rootMargin: "0px",
    })

    const toggleMenuInternal = () => {
        props.toggleMenu()
    }

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <Container>
            <HomeLink to={"/"}>
                <Logo src={ScLogo}/>
            </HomeLink>
            <ContentWrapper
                ref={contentRef}
                animate={animation}
                initial='initial'
                variants={containerAnim}
            >
                <LinkWrapper variants={fadeInUp2}>
                    <LinkItemWrapper onClick={() => toggleMenuInternal()}>
                        <StyledLink to={"/"}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                            >Accueil</LinkText>
                        </StyledLink>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal()}>
                        <StyledLink to={"/a-propos"}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                            >À propos</LinkText>
                        </StyledLink>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal()}>
                        <StyledLink to={"/partenaires"}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                            >Partenaires</LinkText>
                        </StyledLink>
                    </LinkItemWrapper>
                    <LinkItemWrapper variants={fadeInUp2} onClick={() => toggleMenuInternal()}>
                        <StyledLink to={"/contact"}>
                            <LinkText className={'menu-link'}
                                      size={0.9} fontWeight={700} sizeMd={0.4} color={'white'} noLink
                            >Contact</LinkText>
                        </StyledLink>
                    </LinkItemWrapper>
                </LinkWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(MenuMobile)

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.blue};
  z-index: 10;
  align-content: center;
  padding: 50px;
`

const ContentWrapper = styled(motion.div)`
 display: grid; 
 max-width: 700px;
 grid-template-columns: 1fr 1fr;
 @media  (min-width:  ${breakPoints.md}) {
    padding-left: 70px;
  }
`

const LinkWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: flex-start;
  justify-content: space-between;
  min-width: 400px;
  height: 30vh;
`

const LinkItemWrapper = styled(motion.div)``


const Logo = styled(motion.img)`
  height: 70px;
  align-self: center;
`


const StyledLink = styled(Link)`
text-decoration: none;
margin-left: 16px;
   .menu-link:hover{
    transition: all 250ms ease-out;
  }
     .menu-link:hover{
    cursor:pointer;
    color: ${props => props.theme.orange};
  }
    &:visited{
    cursor:pointer;
  }
`
const HomeLink = styled(Link)``
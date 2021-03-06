import React from "react";
import styled, {withTheme} from "styled-components";
import {Link} from "gatsby"
import {breakPoints} from "../../app-config";
import ScLogo from "../../images/logo.svg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {default as LinkText} from "../../components/Text";


const Menu = (props) => {
    return (
        <Container>
            <ContentWrapper>
                <HomeLink to={"/"}>
                    <Logo src={ScLogo} alt='menu logo'/>
                </HomeLink>
                <LinkWrapper>
                    <StyledLink to={"/"}>
                        <LinkText className={'menu-link'}
                                  size={0.7} fontWeight={700} sizeMd={0.4} color={props.theme.blue} noLink
                        >Accueil</LinkText>
                    </StyledLink>
                    <StyledLink to={"/a-propos"}>
                        <LinkText className={'menu-link'}
                                  size={0.7} fontWeight={700} sizeMd={0.4} color={props.theme.blue} noLink
                        >À propos</LinkText>
                    </StyledLink>
                    <StyledLink to={"/partenaires"}>
                        <LinkText className={'menu-link'}
                                  size={0.7} fontWeight={700} sizeMd={0.4} color={props.theme.blue} noLink
                        >Partenaires</LinkText>
                    </StyledLink>
                    <StyledLink to={"/contact"}>
                        <LinkText className={'menu-link'}
                                  size={0.7} fontWeight={700} sizeMd={0.4} color={props.theme.blue} noLink
                        >Contact</LinkText>
                    </StyledLink>
                </LinkWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(Menu)

const Container = styled(motion.div)`
  position: relative;
  z-index: 5;
  padding-top: 24px;
  padding-bottom: 32px;
  width: 100vw;
   @media  (min-width:  ${breakPoints.sm}) {
      width: 400px;
  }
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
  align-self: center;
  justify-self: flex-start;
  min-width: 400px;
  @media  (max-width:  ${breakPoints.sm}) {
    display: none;
  }
`


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


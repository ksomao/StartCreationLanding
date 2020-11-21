import React,{useEffect} from "react";
import styled, {withTheme} from "styled-components";
import Text, {default as Title,} from "../../components/Text";
import {breakPoints} from "../../app-config";
import circleLogo from "../../images/circleLogo.svg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeIn, scale} from "../../animation";
import Menu from "../common/Menu";

const Header = (props) => {
    return (
        <Container
            animate='animate'
            initial='initial'
            variants={containerAnim}
        >
            <Bg
                variants={scale}
            />
            <ImgWrapper
                variants={fadeIn}>
                <Img
                    src={circleLogo}
                    alt={'circle logo'}/>
            </ImgWrapper>
            <Wrapper>
                <MenuWrapper>
                    <Menu/>
                </MenuWrapper>
                <TitleWrapper>
                    <Title
                        stacked
                        color={props.theme.orange}
                        fontWeight={800}
                        size={2.5}
                        sizeMd={6}
                        lineHeight={1}
                        textTransform={'capitalize'}
                        zIndex={3}
                        className={'mission-main-title'}
                    >
                        <span>Nos</span>
                        <span>Partenaires</span>
                    </Title>
                </TitleWrapper>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Header)

const Container = styled(motion.div)`
  position: relative;
`
const MenuWrapper = styled.div`
  position:absolute;
  top: 0;
  left: 0;
`

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (min-width: ${breakPoints.md}){
      padding-top: 150px;
  }
`

const TitleWrapper = styled.div`
  padding-top: 120px;
  padding-left: 20px;
  @media (min-width: ${breakPoints.md}){
    padding-top: 0;
  }
`

const Bg = styled(motion.div)`
  position:absolute;
  width: 80%;
  height: 180px;
  background: #f1f1f1;
  opacity: 0.2;
   @media (min-width: ${breakPoints.md}){
      height: 300px;
  }
`
const ImgWrapper = styled(motion.div)`
  position: absolute;
  z-index: 2;
  height: 200px;
  width: 200px;
  right: 14%;
  display: none;
  @media (min-width: ${breakPoints.md}){
    display: block;
  }
`

const Img = styled.img`
  width: 100%;
`
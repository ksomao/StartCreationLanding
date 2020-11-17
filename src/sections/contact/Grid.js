import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import circleLogo from "../../images/circleLogo.svg"
import circleBg from "../../images/circlebg.png"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
import Text, {default as Title} from "../../components/Text";
import {breakPoints} from "../../app-config";
import Menu from "../common/Menu";


const Grid = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "0px",
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
            variants={containerAnim}
        >
            <CircleLogo src={circleLogo}/>
            <MenuWrapper>
                <Menu/>
            </MenuWrapper>
            <Wrapper>
                <Left>
                    <LeftTextWrapper>
                        <Title
                            variants={fadeInUp}
                            stacked
                            color={props.theme.orange}
                            fontWeight={800}
                            size={3}
                            zIndex={5}
                            sizeMd={3.5}
                            lineHeight={0.9}
                            textTransform={'capitalize'}>
                            <span>Nous</span>
                            <span>Contacter</span>
                        </Title>
                        <Text
                            variants={fadeInUp}
                            marginTop={32}
                            marginTopSm={40}
                            size={0.7}
                            sizeMd={0.5}
                            fontWeight={400}
                            maxWidthSm={'500px'}
                            color={props.theme.blue}>
                            Découvrez Notre espace situé, à l’avenue émile de béco 83.
                            Venez à la rencontre d’une communauté d’entrepreneurs permanents logés au sein d’un espace
                            de
                            coworking !
                            C’est votre maison, votre outil de travail,
                            Idéalement situé Avenue Emile de Béco.
                        </Text>
                    </LeftTextWrapper>
                </Left>
                <Right>
                    <CircleBg src={circleBg}/>
                    <RightTextWrapper>
                        <Text
                            variants={fadeInUp}
                            size={1}
                            sizeMd={1.7}
                            color={props.theme.blue}
                            lineHeight={1.2}
                            fontWeight={400}
                            maxWidthSm={'560px'}
                        >
                            Pour plus d’informations ou tout autre question, n’hésitez pas à nous contacter :

                        </Text>
                        <Text
                            variants={fadeInUp}
                            noLink
                            size={1}
                            color={props.theme.orange}
                            lineHeight={1.2}
                            fontWeight={800}
                            marginTop={16}
                            textDecoration={'none'}
                        >
                            <a href="mailto:projetstart@gmail.com">projetstart@gmail.com</a>
                        </Text>
                    </RightTextWrapper>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Grid)

const Container = styled(motion.div)`
    min-height: calc(100vh - 200px);
    display: flex;
  @media (min-width: ${breakPoints.md}){
    height: 100%;
  }
`

const MenuWrapper = styled(motion.div)`
  position: absolute;
`

const CircleLogo = styled(motion.img)`
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 1;
  top: 30%;
  transform: translateX(-50%);
`

const CircleBg = styled(motion.img)`
  position: absolute;
  width:800px;
  height: 800px;
  z-index: -4;
  top: 30%;
  right: -600px; 
  transform: translateX(-50%);
`

const Wrapper = styled(motion.div)`
   display: grid;
   width: 100%;
  @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
  }
`

const Left = styled(motion.div)`
  position: relative;
  padding: 20px;   
  background: #F6F6F6;
  display: grid;
  
`
const Right = styled(motion.div)`
  overflow:hidden;
  position:relative;
  z-index: 0;
  padding-left: 20px;
  display: grid;
  @media (min-width: ${breakPoints.md}){
      padding-left: 40px;
  }
`

const LeftTextWrapper = styled(motion.div)`
    align-self: center;
    @media (min-width: ${breakPoints.md}){
    justify-self: center;
  }
`
const RightTextWrapper = styled(motion.div)`
  justify-self: flex-start;
  align-self: center;
  
`






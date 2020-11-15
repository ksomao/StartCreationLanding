import React from "react";
import styled, {withTheme} from "styled-components";
import Text, {
    default as Title,
} from "../../components/Text";
import {breakPoints} from "../../app-config";
import circleLogo from "../../images/circleLogo.svg";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeIn, scale} from "../../animation";
import {useEffect} from "react";




const Header = (props) => {
    const animation = useAnimation();
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
                <Title
                    stacked
                    color={props.theme.orange}
                    fontWeight={800}
                    size={3.5}
                    sizeMd={6}
                    lineHeight={1}
                    textTransform={'capitalize'}
                    zIndex={3}
                    className={'mission-main-title'}
                >
                    <span>Nos</span>
                    <span>Partenaires</span>
                </Title>
            </Wrapper>
        </Container>
    )
}

export default withTheme(Header)

const Container = styled(motion.div)`
`
const Wrapper = styled.div`
  padding-left: 20px;
  padding-top: 150px;
  width: 1000px;
  margin: 0 auto;
  @media (min-width: ${breakPoints.md}){
    .mission-main-title{
      margin-left: -50px;
    }
  }
`

const Bg = styled(motion.div)`
  position:absolute;
  width: 80%;
  height: 150px;
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
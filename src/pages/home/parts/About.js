import React, {useEffect} from "react"
import {motion, useAnimation} from 'framer-motion';
import styled, {withTheme} from "styled-components";
import aboutImage from "../../../images/about-img.png"
import aboutBg from "../../../images/about-decorationabout-bg.svg"
import Button from "../../../components/Button";
import {useInView} from "react-intersection-observer";
import Text from "./Text";
import {breakPoints} from "../../../app-config";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {duration: 0.6, ease: easing}
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delayChildren: 2,
    }
  }
};

const stagger = {
  animate: {
    transition: {
      delayChildren: 2,
      staggerChildren: 0.25
    }
  }
};


const About = (props) => {
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
          variants={{
            initial: {opacity: 0},
            animate: {
              opacity: 1,
              transition: {
                duration: 1.2,
              }
            }
          }}
          className={'about'}>
        <motion.div
            variants={stagger}
            className={'about-animated-wrapper'}>
          <motion.img
              animation={fadeInUp}
              src={aboutBg}
              alt=""
              className="about-decoration-bg"/>
          <AboutContent className="about-content">
            <ImageFigure
                variants={fadeInUp}
                className={'about-wrapper-image'}>
              <motion.img
                  src={aboutImage}
                  className={'about-image'}
                  alt="about us image"/>
            </ImageFigure>
            <motion.div className="about-description">
              <Title
                  variants={fadeInUp}
                  className={'about-description-title'}>
                <Text
                    color={props.theme.orange}
                    size={3.5}
                    sizeLg={6}
                    lineHeight={'110%'}
                    fontWeight={800}
                    textTransform={'uppercase'}
                >
                  <span className={'about-description-title-item'}>À propos</span>
                  <span className={'about-description-title-item'}>de nous</span>
                </Text>
              </Title>
              <Description variants={fadeInUp}>
                <Text
                    as={'span'}
                    color={"white"}
                    maxWidthLg={'500px'}
                    fontWeight={100}
                    size={0.5}
                    className={'about-description-excerpt'}><span className={'bold'}>Start Création and Co</span> est un <span className={'bold'}>laboratoire</span> dédié à
                  l’accompagnement d’idées créatives et innovantes.
                  Start Création and Co est né d’une dynamique commune d’entrepreneurs au sein d’un espace
                  de
                  coworking. <br/>
                  Aujourd’hui ces entrepreneurs veulent <span className={'bold'}>partager</span> à d’autres leur expérience, leur
                  savoir-faire
                  ainsi qu’offrir leurs services.
                </Text>
              </Description>
              <ButtonWrapper
                  variants={fadeInUp}
                  className={'about-cta'}>
                <Button value={'Découvrez notre espace'}/>
              </ButtonWrapper>
            </motion.div>
          </AboutContent>
        </motion.div>
      </Container>
  )
}

export default withTheme(About)

const Container = styled(motion.div)`
    margin-top: 200px;
    background: ${props => props.theme.blue};
    position:relative;
    .about-decoration-bg{
      position:absolute;
      right:0;
    }
    .bold{
      font-weight: 400;
    }
    @media (min-width: 768px) {
      padding-bottom: 50px;
    }

    @media (min-width: 992px) {
      margin-top: 400px;
    }
`
const AboutContent = styled(motion.div)`
  max-width: 1669px;
  margin: 0 auto;
  padding-bottom: 100px;
  .about-description{
    padding: 24px;
  }
  @media (min-width: ${breakPoints.md}) {  
    padding-bottom: 0;
  }
  @media (min-width: ${breakPoints.lg}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position:relative;
    z-index: 6;
  }  
`
// --------------------------------------------

const ImageFigure = styled(motion.figure)`
    width: 100%;
    max-width: 768px;
    overflow: hidden;
   .about-image{
     width: 100%;
     z-index: 10;
    }
@media (min-width: ${breakPoints.lg}){
    max-width: 768px;
    margin-top: -80px;
    margin-bottom: 100px    
`
// --------------------------------------------
const Title = styled(motion.h1)`
    margin-top: 40px;
    .about-description-title-item{
      display: block;
      &:nth-child(2){
        margin-left: 20px;
      }
    }
  @media (min-width: ${breakPoints.lg}){
    margin-top: 100px;
  }
`
// --------------------------------------------
const Description = styled(motion.h1)`
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 32px;
`
// --------------------------------------------
const ButtonWrapper = styled(motion.div)`
    margin-left: 20px;
`




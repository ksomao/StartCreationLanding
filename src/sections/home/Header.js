import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import heroImg from "../../images/hero-xl.webp"
import heroImgMin from "../../images/hero-lg.webp"
import heroBg from "../../images/header-bg.svg"
import Text, {
    default as Title,
} from "../../components/Text";
import {breakPoints} from "../../app-config";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import ButtonLink from "../../components/ButtonLink";
import Menu from "../common/Menu";
import {containerAnim, fadeInUp, fadeInUpScale} from "../../animation";
import {useInView} from "react-intersection-observer";


const Header = (props) => {
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
            className={'hero'}>
            <Menu/>
            <Blob className={'hero-blob'} src={heroBg} alt="start creation decoration background"/>
            <Wrapper
                ref={contentRef}
                animate={animation}
                initial='initial'
                variants={containerAnim}>
                <HeroLeft className="hero-left">
                    <HeroLeftContent className="hero-left-content">
                        <div className="hero-left-content-title-wrapper">
                            <Title
                                variants={fadeInUp}
                                stacked
                                color={props.theme.orange}
                                size={2.6}
                                sizeMd={7}
                                sizeLg={7}
                                sizeXl={9}
                                fontWeight={800}
                                lineHeight={'1'}
                                className={'hero-left-content-title'}>
                                <span>Start</span>
                                <span>Création</span>
                                <span>& Co.</span>
                            </Title>
                        </div>
                        <Text
                            variants={fadeInUp}
                            as={'span'}
                            color={props.theme.blue}
                            maxWidthLg={'430px'}
                            lineHeight={'170%'}
                            fontWeight={400}
                            marginTop={16}
                            marginBottom={32}
                            size={0.7}
                            sizeLg={0.4}
                            sizeXl={0.6}
                            className={'hero-left-content-excerpt'}>Vous avez une idée de projet ou plusieurs ?
                            Vous voulez donner du sens à votre parcours socio-professionnel ?
                            Vous ne savez pas par où ni avec qui commencer ?
                            Démarrez avec Start Création car nous stimulons vos talents !
                        </Text>
                        <ButtonWrapper
                            variants={fadeInUp}>
                            <ButtonLink value={'En savoir plus.'} linkTo={'/a-propos'} />
                        </ButtonWrapper>
                    </HeroLeftContent>
                </HeroLeft>
                <HeroRight>
                    <HeroFigure
                        className={'hero-right-figure'}>
                        <HeroImage
                            variants={fadeInUp}
                            className={'hero-right-image'}
                            src={heroImg}
                            srcset={heroImgMin + " 415w"}
                            alt=""/>
                    </HeroFigure>
                    <Testimonial
                        variants={fadeInUp}
                        className={'hero-testimonial'}>
                        <Text
                            color={'white'}
                            fontWeight={'800'}
                            fontStyle={'italic'}
                            lineHeight={1.5}
                            size={0.5}
                            marginBottom={10}
                            className={'hero-testimonial-excerpt'}>« Là où les idées créatives et innovantes trouvent un
                            accompagnement juste et humain »</Text>
                        <Text
                            color={'#00BCD6'}
                            size={0.7}
                            className={'hero-testimonial-name'}>- Nadine Minampala</Text>
                    </Testimonial>
                </HeroRight>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    position:relative;
    @media  (min-width:  ${breakPoints.md}) {
        min-height: 70vh;
    }
`
const Blob = styled(motion.img)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 40%;
`

const Wrapper = styled(motion.div)`
  position:relative;
  padding: 20px;
  @media  (min-width:  ${breakPoints.lg}){
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 100px;
  }
`

const HeroLeft = styled(motion.div)`
  position:relative;
  @media  (min-width:  ${breakPoints.md}){
      width: 100%;
  }
`

const HeroLeftContent = styled(motion.div)`
@media (min-width:${breakPoints.lg}){
  position:absolute;
  left: 0;
  z-index: 1;
  width: 100%;
}
`

const HeroRight = styled(motion.div)`
  position:relative;
  margin-top: 32px;
  @media (min-width:  ${breakPoints.lg}) {
      width: 120%;
      min-width: 500px;
  }  
  @media (min-width:  ${breakPoints.xl}) {

  }
`
const HeroFigure = styled(motion.figure)`
  overflow: hidden;
  max-width: 780px;
  position:relative;
  @media (min-width:  ${breakPoints.md}) {
      width: 110%;

  }
  
   @media (min-width:  ${breakPoints.lg}) {
       margin-top: 80px;
  }
`
const HeroImage = styled(motion.img)`
 width: 100% ;
`
const Testimonial = styled(motion.div)`
  position:absolute;
  background: ${props => props.theme.blue};
  width: 250px;
  padding: 20px;
  opacity: 0.98;
   @media (max-width:${breakPoints.lg}){
      bottom: -20px;
      left: 0px;
  }

    @media (min-width:${breakPoints.lg}){
      padding: 20px;
      bottom: -50px;
      right: -100px;
      width: 300px;
  }
`

const ButtonWrapper = styled(motion.div)`
`

export default withTheme(Header)

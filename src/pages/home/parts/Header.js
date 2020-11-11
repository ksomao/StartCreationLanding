import React from "react"
import styled, {withTheme} from "styled-components";
import heroImg from "../../../images/hero-img.png"
import heroBg from "../../../images/header-bg.svg"
import Button from "../../../components/Button";
import Text, {
    default as Title,
    default as BodyText,
} from "./Text";
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
            delayChildren: 1,
            staggerChildren: 0.25
        }
    }
};

const Header = (props) => {

    return (
        <Container
            className={'hero'}>
            <Blob className={'hero-blob'} src={heroBg} alt="start creation decoration background"/>
            <Wrapper>
                <HeroLeft className="hero-left">
                    <HeroLeftContent className="hero-left-content">
                        <div className="hero-left-content-title-wrapper">
                            <Title
                                stacked
                                color={props.theme.orange}
                                size={2.5}
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
                            as={'span'}
                            color={props.theme.blue}
                            maxWidthLg={'495px'}
                            lineHeight={'130%'}
                            fontWeight={300}
                            marginTop={16}
                            marginBottom={24}
                            size={0.7}
                            sizeLg={0.4}
                            sizeXl={0.6}
                            className={'hero-left-content-excerpt'}>Vous avez une idée de projet ou plusieurs ?<br/>
                            Vous voulez donner du sens à votre parcours <br/>socio-professionnel ? <br/>
                            Vous ne savez pas par où ni avec qui commencer ? <br/>
                            Démarrez avec Start Création car nous stimulons vos talents !
                        </Text>
                        <Button value={'À propos de Nous'}/>
                    </HeroLeftContent>
                </HeroLeft>
                <HeroRight>
                    <HeroFigure className={'hero-right-figure'}>
                        <HeroImage
                            className={'hero-right-image'}
                            src={heroImg}
                            alt=""/>
                    </HeroFigure>
                    <Testimonial className={'hero-testimonial'}>
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
    margin-top: 100px;
   //  @media  (min-width:  ${breakPoints.sm}) {
   //    background: green;
   //  }
   // 
   //      @media  (min-width:  ${breakPoints.md}) {
   //      background: blueviolet;
   //  }
   //
   //  @media  (min-width:  ${breakPoints.lg}) {
   //  background: orangered;
   // }
`
const Blob = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 25%;
`

const Wrapper = styled.div`
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

const HeroLeft = styled.div`
  position:relative;
  @media  (min-width:  ${breakPoints.md}){
      width: 100%;
  }
`

const HeroLeftContent = styled.div`
@media (min-width:${breakPoints.lg}){
  position:absolute;
  left: 0;
  z-index: 1;
  width: 100%;
}
`

const HeroRight = styled.div`
  position:relative;
  margin-top: 32px;
  @media (min-width:  ${breakPoints.lg}) {
      width: 120%;
      min-width: 500px;
  }  
  @media (min-width:  ${breakPoints.xl}) {

  }
`
const HeroFigure = styled.figure`
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
const HeroImage = styled.img`
 width: 100% ;
`
const Testimonial = styled.div`
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




export default withTheme(Header)

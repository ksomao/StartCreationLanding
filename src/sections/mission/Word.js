import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import MissionTitle from "../../components/MissionTitle";
import wordBg from "../../images/wordDecoration.png"
import {breakPoints} from "../../app-config";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp, fadeInX} from "../../animation";
import ReactCarousel from "react-elastic-carousel";
import Text from "../../components/Text";


const Word = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    const data = [
        {
            name: 'Bea',
            lastname: 'Diallo',
            text: 'En créant START Création je souhaitais que d\'autres parcours sociaux, d\'autres histoires professionnelles puissent devenir sources d\'inspiration. En particulier pour les minorités confrontées à de fortes discriminations sur le marché de l\'emploi à Bruxelles. Nos entrepreneurs questionnent le modèle social, changent la donne. Ils créent, ils se battent et sont déterminés à réussir. \n' +
                'Je soutiens ces créateurs qui participent au développement d\'une société juste et durable. Car ces jeunes participent à la construction d\'un nouveau modèle bruxellois.'
        },
        {
            name: 'Nadine',
            lastname: 'M.',
            text: 'Nous sommes tous confrontés à un moment de notre vie où nous questionnons notre parcours socio-professionnel. La voie de l’entrepreneuriat est une option intéressante pour se renforcer aussi bien sur le plan personnel que professionnel. Nadine Minampala (Décembre 2019)'
        },
    ];

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
            <Bg src={wordBg}/>
            <ReactCarousel itemsToShow={1}>
                {
                    data.map((item,index) => (
                        <CarouselItem>
                            <TitleWrapper>
                                <Text
                                    variants={fadeInUp}
                                    textTransform={'uppercase'}
                                    color={props.theme.blue}
                                    fontWeight={300}
                                    marginLeft={5}
                                >Le Mot De</Text>
                                <Text
                                    variants={fadeInUp}
                                    stacked
                                    lineHeight={1}
                                    color={props.theme.blue}
                                    fontWeight={700}
                                    size={5}
                                    sizeLg={8}
                                >
                                    <span>{item.name}</span>
                                    <span>{item.lastname}</span>
                                </Text>
                            </TitleWrapper>
                            <TextWrapper
                                variants={fadeInUp}
                            >
                                <Text
                                    fontWeight={500}
                                    fontStyle={'italic'}
                                    size={0.5}
                                    lineHeight={1.5}
                                    color={props.theme.blue}
                                >
                                    "{item.text}"
                                </Text>
                            </TextWrapper>
                        </CarouselItem>
                    ))
                }
            </ReactCarousel>
        </Container>
    )
}

export default withTheme(Word)

const Container = styled(motion.div)`
position: relative;
margin-top: 200px;
margin-bottom: 100px;
overflow: hidden;
  .rec-arrow{
    display: none;
    background: white;
    font-size: 20px;
      &:disabled {
        visibility: hidden;
      }
    }
   .rec-dot{
      background: ${props => props.theme.blue};
      height: 10px;
      width: 10px;
      opacity: 0.5;
   }    
`
const CarouselItem = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
    max-width: 1100px;
    &:focus{
      border: none;
      outline: none;
    }
    @media (min-width:  ${breakPoints.lg}){
          grid-template-columns: 1fr 1fr;
    }
`
const TitleWrapper = styled(motion.div)`
  @media (min-width:  ${breakPoints.lg}){
    padding-left: 50px;
  }
`
const TextWrapper = styled(motion.div)`
  width: 100%;
  padding: 0 10px;
  align-self: flex-end;
`

const Bg = styled(motion.img)` 
  position:absolute;
  z-index: 0;
  height: 100%;
  right: 200px;
  top: -50px;
`
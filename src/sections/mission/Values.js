import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import MissionTitle from "../../components/MissionTitle";
import valuesBg from "../../images/ourValuesDecoration.png"
import {breakPoints} from "../../app-config";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";


const Values = (props) => {
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
            <BgValues src={valuesBg}/>
            <ContentWrapper>
                <TitleWrapper variants={fadeInUp}>
                    <MissionTitle leftAlign left={-50}>
                        <span className={'mission-title-item'}>Les valeurs de</span>
                        <span className={'mission-title-item'}>Start Création </span>
                        <span className={'mission-title-item'}>& Co.</span>
                    </MissionTitle>
                </TitleWrapper>
                <ValuesList variants={fadeInUp}>
                    "Accueil, Ecoute, Diversité, Genre, Résilience, Humain, Coopération, Partage, Inclusion,
                    Collectivité, Innovation."
                </ValuesList>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(Values)

const Container = styled(motion.div)`
    position: relative;
`

const ContentWrapper = styled(motion.div)`
    position: relative;
    padding: 50px 20px 150px;
    max-width: 1200px;
    margin: 100px auto 0;
    display: grid;
    @media (min-width: ${breakPoints.md}){
      grid-template-columns: 1fr 0.7fr;
    }
    @media (min-width: ${breakPoints.lg}){
      grid-template-columns: 0.75fr 1fr;
      min-height: 500px;
    }
`

const BgValues = styled(motion.img)`
  position:absolute;
  bottom: 50px;
`
const TitleWrapper = styled(motion.div)`
`

const ValuesList = styled(motion.p)`
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.3;
  margin-top: 32px;
  background: -webkit-linear-gradient(-45deg, #010253, #9078A3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: ${breakPoints.md}){
    margin-top: 100px;
    max-width: 600px;
  }
`

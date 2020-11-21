import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import MissionTitle from "../../components/MissionTitle";
import ServicesImage from "../../images/OurServices.png"
import {breakPoints} from "../../app-config";
import Text, {default as Title} from "../../components/Text";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp, fadeInUp2, imageScale} from "../../animation";


const OurServices = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-200px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <Container>
            <ContentWrapper
                ref={contentRef}
                animate={animation}
                initial='initial'
                variants={containerAnim}
            >
                <Description>
                    <MissionTitleWrapper variants={fadeInUp}>
                        <MissionTitle>
                            <span>Nos</span>
                            <span>Services</span>
                        </MissionTitle>
                    </MissionTitleWrapper>
                    <Wrapper
                        variants={fadeInUp}
                    >
                        <Title
                            size={0.7}
                            color={props.theme.blue}
                            fontWeight={800}
                            marginBottom={8}
                        >
                            Au sein de notre service
                        </Title>
                        <Text
                            color={props.theme.blue}
                        >
                            <ul>
                                <li>- Vous êtes <Bold>accueillis et écoutés</Bold> par des conseillers spécialisés</li>
                                <li>- Vous rencontrez des entrepreneurs <Bold>débutants</Bold> ou <Bold>confirmés</Bold></li>
                                <li>- Vous Challengez votre idée et la transformez en projet réaliste !</li>
                            </ul>
                            A toutes les étapes du développement de votre projet:
                            Nous encourageons votre potentiel comme votre créativité
                            Nous questionons ensemble votre modèle d’affaire
                            Nous vous guidons vers l’expertise dont vous avez besoin
                            <br/>
                            Plus de <Bold>30 personnes</Bold> nous contactent chaque mois.
                            Osez l’aventure entrepreneuriale avec nous !
                        </Text>
                        <Title
                            color={props.theme.blue}
                            size={0.7}
                            fontWeight={800}
                            marginTop={16}
                            marginBottom={8}
                        >
                            Pour Qui ?
                        </Title>
                        <Text
                            color={props.theme.blue}
                        >
                            <Bold>Toute personne</Bold> quel que soit son statut (Chômeur.se, salarié.e, indépendant.e..) ou toute
                            association/ structure bruxelloise.
                        </Text>
                    </Wrapper>
                </Description>
                <ImageWrapper>
                    <Image variants={imageScale} src={ServicesImage}/>
                </ImageWrapper>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(OurServices)

const Container = styled(motion.div)`
  padding: 20px;
`

const ContentWrapper = styled(motion.div)`
    padding-top: 75px;
   max-width: 1400px;
   margin: 0 auto;
   display: grid;
   @media (min-width: ${breakPoints.md}){
    padding-top: 100px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
   }
`

const Description = styled(motion.div)`
   @media (min-width: ${breakPoints.lg}){
        max-width: 500px;
    }
`
const MissionTitleWrapper = styled(motion.div)`
  margin-bottom: 24px;
  @media (max-width: ${breakPoints.lg}){
     margin-top: 32px;
  }
`

const Wrapper = styled(motion.div)`

`

const ImageWrapper = styled(motion.div)`
   width: 100%;
   overflow: hidden;
   @media (max-width: ${breakPoints.md}){
    max-width: 500px;
   }
   @media (min-width: ${breakPoints.lg}){
    max-width: 700px;
    justify-self: flex-end;
   }
`
const Image = styled(motion.img)`
   width: 100%;
   margin-top: 24px;
   object-fit: cover;
`

const Bold = styled.span`
  font-weight: 600;
`
import React, {useEffect} from "react"
import styled, {withTheme} from "styled-components";
import MissionTitle from "../../components/MissionTitle";
import MissionImage from "../../images/OurMission.png"
import {breakPoints} from "../../app-config";
import Text, {default as Title}
    from "../../components/Text";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, containerMissionAnim, fadeIn, fadeInUp, imageScale} from "../../animation";


const OurMission = (props) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-400px",
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
                <ImageWrapper>
                    <Image
                        variants={imageScale}
                           src={MissionImage}/>
                </ImageWrapper>
                <Description>
                    <MissionTitleWrapper variants={fadeInUp}>
                        <MissionTitle>
                            <span>Our</span>
                            <span>Mission</span>
                        </MissionTitle>
                    </MissionTitleWrapper>
                    <Text
                        variants={fadeInUp}
                        color={props.theme.blue}
                        maxWidthSm={'500px'}
                    >
                        Start Création and Co accompagne des personnes ayant le souhait de développer un projet
                        d’entreprise. L’Accompagnement se présente sous diverses formes : Information, conseil,
                        mentorat, mise en réseau, coaching.

                        Notre spécialité est d’outiller les personnes afin qu’elles réfléchissent et modélisent un
                        projet à valeur sociale et/ ou économique.

                        Quel que soit l’état d’avancement de l’idée ou du projet chaque créateur peut nous consulter.
                        Nous travaillons en complémentarité avec différentes structures locales ou régionales d’aide à
                        la création d’entreprise, des personnes ressources et experts. Ceux-ci sont identifiés si
                        nécessaire pour continuer à soutenir le porteur de projet afin qu’il bénéficie d’un apport
                        spécifique pour le développement de son activité.

                        Chez Start création and Co,
                        l’accompagnement se déroule sous forme de rencontres individuelles avec un.e coach/conseille.re
                        L’accompagnement est fixé généralement à 6 mois à raison d’1H30 par mois.
                    </Text>
                </Description>
            </ContentWrapper>
        </Container>
    )
}

export default withTheme(OurMission)

const Container = styled.div`
  padding: 20px;
`

const ContentWrapper = styled(motion.div)`
   padding-top: 150px;
   max-width: 1400px;
   margin: 0 auto;
   display: grid;
   @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
   }
`

const Description = styled(motion.div)`
   margin-bottom: 24px;
`
const MissionTitleWrapper = styled(motion.div)`
  margin-bottom: 24px;
  @media (max-width: ${breakPoints.lg}){
     margin-top: 32px;
  }
`

const ImageWrapper = styled(motion.div)`
   width: 100%;
   overflow: hidden;
   @media (min-width: ${breakPoints.lg}){
    max-width: 500px;
   }
`
const Image = styled(motion.img)`
   width: 100%;
   margin-top: 24px;
   object-fit: cover;
`
import React from "react"
import styled, {withTheme} from "styled-components";
import Button from "../../components/Button";
import Text from "../../components/Text";
import {motion} from "framer-motion";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/spaces-decoration.png";


function SpaceServiceItem(props) {
    return (
        <ServiceListItem className={"space-service-item"}>
            <Text
                size={0.6}
                fontWeight={800}
                color={props => props.theme.orange}
                className={"space-service-item-plus"}>+</Text>
            <Text
                marginLeft={16}
                font-weight={600}
                color={props => props.theme.blue}
                textTransform={'capitalize'}
                size={0.6}
                fontWeight={600}
                className={"space-service-item-text"}>{props.service}</Text>
        </ServiceListItem>
    )
}


const Space = (props) => {
    const servicesLeft = [
        "Accès 24/7",
        "Internet 400 mb/s",
        "Rétroprojecteur/Ecran",
        "Salle de réunion – Salle  événement (capacité de 50 personnes)",
    ]

    const servicesRight = [
        "Cuisine à Votre disposition",
        "Nettoyage",
        "Service courrier",
        "Café, thé et eau filtrée",
    ]

    const listLeft = () => {
        return servicesLeft.map((service, index) => (
            <SpaceServiceItem service={service}/>
        ))
    }

    const listRight = () => {
        return servicesRight.map((service, index) => (
            <SpaceServiceItem service={service}/>
        ))
    }

    return (
        <Container className={'space'}>
            <div className="imgWrapper">
                <motion.img
                    src={aboutBg}
                    alt=""
                    className="about-decoration-bg"/>
            </div>
            <div className="space-content">
                <Title className={'space-title'}>
                    <Text
                        color={props.theme.orange}
                        size={2.5}
                        sizeLg={6}
                        mawLg={"50px"}
                        lineHeight={'110%'}
                        fontWeight={900}
                        textTransform={'uppercase'}>
                        <span className={'space-title-item'}>Découvrez</span>
                        <span className={'space-title-item'}>Notre</span>
                        <span className={'space-title-item'}>Espace</span>
                    </Text>
                </Title>
                <ContentContainer className="space-content-column">
                    <TextWithButton className="space-content-left">
                        <Text
                            as={'p'}
                            color={props.theme.blue}
                            fontWeight={300}
                            size={0.6}
                            className={'space-description'}>
                            Venez à la rencontre d’une <span
                            className={'bold'}>communauté d’entrepreneurs</span> permanents logés au sein d’un espace
                            de coworking !
                            C’est votre maison, votre outil de travail. <span
                            className={'bold'}>10 espaces à louer</span> et à partager dans une
                            <span className={'bold'}> ambiance familiale et décontractée.</span> Idéalement situé Avenue
                            Emile de Béco 83 à 1050 Bruxelles.
                        </Text>
                        <div className={'space-cta'}>
                            <Button value={'Se Renseigner'}/>
                        </div>
                    </TextWithButton>
                    <div className="space-content-right">
                        <ServiceList className="space-service-list-wrapper">
                            <div className="space-service-list left">
                                {listLeft()}
                            </div>
                            <div className="space-service-list right">
                                {listRight()}
                            </div>
                        </ServiceList>
                    </div>
                </ContentContainer>
            </div>
        </Container>
    )
}

export default withTheme(Space)

//-------------------------------------------
const Container = styled.div`
  overflow-x: hidden;
  padding-top: 100px;
  position:relative;
  padding-bottom: 100px;
  .imgWrapper{
    overflow: hidden;
  }
  .about-decoration-bg{
    width: 1500px;
    position: absolute;
    z-index: -1;
    right: 0;
  }
  .space-content{
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
  }
  .bold{
    font-weight: 500;
  }
`
//-------------------------------------------
const Title = styled(motion.h2)`
  .space-title-item{
    display: block;
  }
  @media (min-width: ${breakPoints.md}){
    .space-title-item{  
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2){
        margin-left: -20px;
      }
      &:nth-child(3){
        margin-left: 10px;
      }    
    }
  }
`
//-------------------------------------------
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakPoints.lg}){
    flex-direction: row; 
  }
`
//-------------------------------------------
const TextWithButton = styled(motion.div)`
  display: flex;
  flex-direction: column;
  .space-description{
    margin-top: 32px;
    margin-bottom: 24px;  
  }
  @media (min-width: ${breakPoints.lg}){
    max-width: 530px;
    margin-right: 20px; 
  }
`
//-------------------------------------------
const ServiceList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  .space-service-list{
    max-width: 300px;
    line-height: 130%;
   }
   @media (min-width: ${breakPoints.md}){
    grid-template-columns: 1fr 1fr;
    .right{
      margin-left: 20px;
      margin-top: 80px;
    }
  }   
  
  @media (min-width: ${breakPoints.lg}){
     transform: translateY(-80px);
  }

`
//-------------------------------------------
const ServiceListItem = styled(motion.li)`
  margin-bottom: 40px;
  display:flex;
`
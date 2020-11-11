import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import Carousel from "../../../components/Carousel";
import Button from "../../../components/Button";
import Text from "./Text";
import {motion} from "framer-motion";
import {breakPoints} from "../../../app-config";
import aboutBg from "../../../images/events-decoration.png";

const Events = (props) => {
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Champs Sacrés - Muriel de Crayencour',
            desc: 'Dans cette exposition, Muriel de Crayencour présente peintures, sculptures, dessins et broderie comme une ode au corps féminin, à sa sacralité et à sa fragilité. Objet de nombreuses projections, ce corps continue aujourd\'hui à susciter des prises de pouvoir.'
        },
        {
            id: 2,
            title: 'Exposition "Qui Dit Mieux ?" sur le thème "INTIME"',
            desc: 'Le concours " Qui Dit Mieux ? " 2020 suit son cours avec la 2e exposition collective et itinérante du 21/09 au 7/10/2020 au See U - bâtiment H (Kinograph) au 1er étage.\n' +
                'Découvrez les oeuvres des 28 lauréats du concours "Qui Dit Mieux ?" 2020.\n' +
                'Les jeunes artistes de 15 à 30 ans vous présentent leurs oeuvres réalisées sur le thème "INTIME"'
        },
        {
            id: 3,
            title: 'Lab Radio pour ado avec Pulse air',
            desc: 'la web radio Pulse Air lance le " Lab Ado ", une nouvelle expérience pour s\'approprier et inventer la radio de demain. pour les 14 -17 ans c\'est une occasion avec l\'aide d\'un animateur pro, tout le long de la saison scolaire pour tester et développer ses compétences, créer des moments d\'antenne, de podcast et de live !'
        },
        {
            id: 4, title: 'Nocturne au Muséum des Sciences naturelles\n', desc: 'Balades contées\n' +
                'Au programme chez nous, des promenades contées "animis mundi" de la compagnie Des Capes et des Mots. Durée :1 h\n' +
                'Dans la nouvelle Galerie "Planète Vivante", assistez à la performance à multidiffusion sonore basée sur le son de nos rêves, elle nous transporte hors de tout contrôle dans une atmosphère émouvante\n' +
                'Durée : 40 min'
        },
        {
            id: 5,
            title: 'Champs Sacrés - Muriel de Crayencour',
            desc: 'Dans cette exposition, Muriel de Crayencour présente peintures, sculptures, dessins et broderie comme une ode au corps féminin, à sa sacralité et à sa fragilité. Objet de nombreuses projections, ce corps continue aujourd\'hui à susciter des prises de pouvoir.\n'
        }
    ]);

    return (
        <Container>
            <EventTitleWrapper
                className={'events-title-wrapper'}>
                <Title>
                    <Text
                        color={props.theme.orange}
                        size={2.5}
                        sizeLg={6}
                        lineHeight={'110%'}
                        fontWeight={900}
                        textTransform={'uppercase'}
                        className={'events-title'}>
                        <span className={'events-title-item'}>Notre</span>
                        <span className={'events-title-item'}>Agenda</span>
                        <ButtonWrapper>
                            <Button value={"Voir Tout"} v2/>
                        </ButtonWrapper>
                    </Text>
                </Title>
            </EventTitleWrapper>
            <SubContainer className={'events'}>
                <ContentWrapper>
                    <ImageWrapper>
                        <motion.img
                            src={aboutBg}
                            alt=""
                            className="events-decoration-bg"/>
                    </ImageWrapper>
                    <CarouselWrapper className="carousel-wrapper">
                        <Carousel data={data}/>
                    </CarouselWrapper>
                </ContentWrapper>
            </SubContainer>
        </Container>
    )
}

export default withTheme(Events)

const Container = styled.div`
  position: relative;
    @media (min-width: ${breakPoints.md}){
      height: 100vh;
      background: ${props => props.theme.blue};
  }
`

const EventTitleWrapper = styled.div`
  position:absolute;
  display: flex;
  flex-direction: column;
`

const Title = styled(motion.h2)`
   position:relative;
   margin-top: -30px;
   margin-left: 60px;
   z-index: 4;
  .events-title-item{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  @media (min-width: ${breakPoints.md}){
     margin-top: -50px;
    .events-title-item{  
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2){
          margin-left: 15px;
      }
    }
  }
`

const ButtonWrapper = styled.div`
  margin-left: 25px;
  @media (min-width: ${breakPoints.md}){
    margin-top: -20px;
  }
`

const SubContainer = styled.div`
    position:relative;
    padding-top: 150px;
    background: ${props => props.theme.blue};
    padding-bottom: 100px;
    overflow: hidden;
    .img-wrapper{
         overflow: hidden;
        width: 200px;
   }
   
  @media (min-width: ${breakPoints.md}){
     padding-top: 260px;
  }
      

`
const ContentWrapper = styled.div`
      position:relative;
      z-index: 2;
      height: 100%;
`

const ImageWrapper = styled.figure`
  overflow: hidden;
  width: 200px;
  .events-decoration-bg{
    position:absolute;  
    z-index: -1;
    width: 1500px;
    top: -100px;
    right: -200px;
}
`

const CarouselWrapper = styled.div`
  @media (min-width: ${breakPoints.md}){
    margin-top: 60px;
  }
`
import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
import Carousel from "../../components/Carousel";
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/events-decoration.png";
import {motion} from "framer-motion";
import {useQuery} from "@apollo/client";
import {GET_EVENTS} from "../../queries";


const Events = (props) => {
    const { loading, error, data } = useQuery(GET_EVENTS);
    let [dataObject,setDataObject] = useState([])

    useEffect(() => {
        if(loading === false && data){
            setDataObject(data)
        }
    }, [loading, data])

    return (
        <Container>
            <EventTitleWrapper
                className={'events-title-wrapper'}>
                <Title>
                    <Text
                        stacked
                        color={props.theme.orange}
                        size={2.5}
                        sizeLg={6}
                        lineHeight={'110%'}
                        fontWeight={900}
                        textTransform={'uppercase'}
                        className={'events-title'}>
                        <span className={'events-title-item'}>Notre</span>
                        <span className={'events-title-item'}>Agenda</span>
                    </Text>
                </Title>
            </EventTitleWrapper>
            <SubContainer className={'events'}>
                <ContentWrapper>
                    <ImageWrapper>
                        <motion.img
                            src={aboutBg}
                            alt="event background image"
                            className="events-decoration-bg"/>
                    </ImageWrapper>
                    <CarouselWrapper className="carousel-wrapper">
                        <Carousel events={dataObject.events}/>
                    </CarouselWrapper>
                </ContentWrapper>
            </SubContainer>
        </Container>
    )
}

export default withTheme(Events)

const Container = styled.div`
  position: relative;
  background: ${props => props.theme.blue};
`

const EventTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(motion.h2)`
   position:relative;
   margin-top: -30px;
   margin-left: 20px;
   z-index: 4;
   @media (min-width: ${breakPoints.md}){
      margin-left: 60px;
     .events-title-item{
        &:nth-child(2){
          margin-left: 50px;
       }
   }
  }
`

const ImageWrapper = styled.div``

const CarouselWrapper = styled.div``

const SubContainer = styled.div`
    .img-wrapper{
         overflow: hidden;
        width: 200px;
   }
  @media (min-width: ${breakPoints.md}){
  }
`
const ContentWrapper = styled.div`
      position:relative;
      z-index: 2;
      height: 100%;
`
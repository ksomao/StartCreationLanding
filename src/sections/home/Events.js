import React, { useState} from "react"
import styled, {withTheme} from "styled-components";
import Carousel from "../../components/Carousel";
import Button from "../../components/Button";
import Text from "../../components/Text";
import {breakPoints} from "../../app-config";
import aboutBg from "../../images/events-decoration.png";
import {motion} from "framer-motion";
import ButtonLink from "../../components/ButtonLink";
import data from "../../data/events.json"

const Events = (props) => {


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
                            alt=""
                            className="events-decoration-bg"/>
                    </ImageWrapper>
                    <CarouselWrapper className="carousel-wrapper">
                        <Carousel data={Object.entries(data)[0][1]}/>
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
   margin-left: 60px;
   z-index: 4;
   .events-title-item{
        &:nth-child(2){
          margin-left: 50px;
       }
   }
`

const ButtonWrapper = styled.div`
  margin-left: 25px;
  @media (min-width: ${breakPoints.md}){
    margin-top: 15px;
    margin-left: 50px;
  }
`

const SubContainer = styled.div`
    // position:relative;
    // padding-top: 150px;
    // background: ${props => props.theme.blue};
    // padding-bottom: 100px;
    // overflow: hidden;
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
      @media (min-width: ${breakPoints.md}){
        padding-bottom: 100px;
      }
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
  @media (min-width: ${breakPoints.sm}){
    margin-top: 50px;
  }
`
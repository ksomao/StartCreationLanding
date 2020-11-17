import React, {useEffect, useState} from "react"
import styled from "styled-components";
import ReactCarousel from 'react-elastic-carousel'
import ButtonV2 from "./ButtonV2";
import Text from "./Text";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarouselCont = ({data}) => {

    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })


    const getItems = () => {
        return data.map((item, index) => (
            <CarouselItem
                className={'carousel-item'}
                key={item.title + index}>
                <Text
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.5}
                    size={0.8}
                    marginBottom={24}
                    className={'carousel-item-title'}>{item.title}</Text>
                <Text
                    color={'white'}
                    font-weight={200}
                    size={0.6}
                    opacity={'80%'}
                    lineHeight={'170%'}
                    className={'carousel-item-description'}>{item.desc}</Text>
                <ButtonV2 value={'en savoir plus'}/>
            </CarouselItem>))
    }

    return (
        <Container>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}>
                {getItems()}
            </Carousel>
        </Container>
    )
}

export default CarouselCont


const Container = styled.div`
position:relative;
  
  .test{
    position:absolute;
    right: 0;
    top: -200px;
    button{
      background: white;
      border-radius: 200%;
      padding: 20px;
      height: 40px;
      width: 40px;
      border: none;    
    }
  }
  
`

const CarouselItem = styled(motion.div)`
         width: 85%;
         &:focus{
          border: none;
          outline: none;
         }
`

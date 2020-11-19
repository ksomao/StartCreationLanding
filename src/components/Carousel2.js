import React, {useEffect, useState} from "react"
import styled, {css} from "styled-components";
import ButtonV2 from "./ButtonV2";
import Text from "./Text";
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from "./CarouselItem";

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 1280},
        items: 4
    },
    desktop: {
        breakpoint: {max: 1280, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 640},
        items: 2
    },
    mobile: {
        breakpoint: {max: 640, min: 0},
        items: 1
    }
};


const EventsCarousel = ({data}) => {
    const events = data?.allEvent

    return (
        <Container data={data}>
            {events === false && <Text
                size={2}
                marginLeft={32}
                marginBottom={32}
                color={'white'}
                fontWeight={700}
            >
                Pas d'évenements disponible
            </Text>}
            {events && <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}>
                {events.map((item, index) => (
                    <CarouselItem
                        item={item}
                        className={'carousel-item'}
                        key={item.title + index}>
                    </CarouselItem>
                ))}
            </Carousel>}
        </Container>
    )
}

export default EventsCarousel


const Container = styled.div`
  position:relative; 
  padding-bottom: 32px;
  ${({data}) => !!data && css`
      min-height: 30vh;
      display: grid;
      align-content: center;
  `}
`


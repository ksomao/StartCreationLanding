import Text from "./Text";
import ButtonV2 from "./ButtonV2";
import React from "react";
import styled from "styled-components";
import parse from "html-react-parser"


const CarouselItem = ({item}) =>  {
    console.log(item);
    return <Container
        className={"carousel-item"}
    >
        <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.5}
            size={0.8}
            marginBottom={24}
            className={"carousel-item-title"}>{item.title}</Text>
        <Text
            maxLines={10}
            color={"white"}
            font-weight={200}
            size={0.6}
            opacity={"80%"}
            lineHeight={"170%"}
            className={"carousel-item-description"}>{parse(item.description.html)}</Text>
        <ButtonV2 value={"en savoir plus"} url={item.url}/>
    </Container>;
}

const Container = styled.div`
  padding: 0 20px;
`

export default CarouselItem
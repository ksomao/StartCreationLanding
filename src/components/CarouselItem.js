import Text from "./Text";
import ButtonV2 from "./ButtonV2";
import React from "react";


function CarouselItem({item}) {
    return <div
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
            color={"white"}
            font-weight={200}
            size={0.6}
            opacity={"80%"}
            lineHeight={"170%"}
            className={"carousel-item-description"}>{item.desc}</Text>
        <ButtonV2 value={"en savoir plus"}/>
    </div>;
}
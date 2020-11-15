import React, {useEffect, useState} from "react"
import styled, {withTheme} from "styled-components";
// import MissionTitle from "../../components/MissionTitle";
// import valuesBg from "../../images/ourValuesDecoration.png"
// import {breakPoints} from "../../app-config";
import PartnersList from "../../data/partenaires.json"
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {containerAnim, fadeInUp} from "../../animation";
import _ from "lodash"
import Text from "../../components/Text";


const Grid = (props) => {
    const animation = useAnimation();
    const [partners, setPartner] = useState(null);
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    useEffect(() => {
        setPartner(PartnersList);
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])


    console.log(partners);
    return (
        <Container
            ref={contentRef}
            animate={animation}
            initial='initial'
            variants={containerAnim}
        >
            {_.map(partners, partner => (
                <PartnerItem>
                    <WrapperImage>
                        <Image size={partner.size} src={require("../..//images/logos/" + partner.image + ".png")} alt=""/>
                    </WrapperImage>
                    <Text
                        size={0.4}
                    >{partner.text}</Text>
                </PartnerItem>
            ))}
        </Container>
    )
}

export default withTheme(Grid)

const Container = styled(motion.div)`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const PartnerItem = styled(motion.div)`
    max-width: 250px;
`
const WrapperImage = styled(motion.div)`
  height: 200px;
  width: 200px;
  display: grid;
  overflow: hidden;
`
const Image = styled(motion.img)`
  width: ${props => props.size ? props.size : '50%' };
  align-self: flex-end;
`

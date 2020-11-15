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
import {breakPoints} from "../../app-config";


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
            <Wrapper>
                {_.map(partners, partner => (
                    <PartnerItem variants={fadeInUp}>
                        <WrapperImage>
                            <Image size={partner.size} src={require("../..//images/logos/" + partner.image + ".png")}
                                   alt=""/>
                        </WrapperImage>
                        <Text
                            marginTop={16}
                            fontWeight={300}
                            size={0.4}
                            color={props.theme.blue}
                        >{partner.text}</Text>

                        <LinkWrapper>
                            <BgLink/>
                            <Link data-content={'visiter le site'} className={'partner-link'} href="">visiter le site</Link>
                        </LinkWrapper>
                    </PartnerItem>
                ))}
            </Wrapper>
        </Container>
    )
}

export default withTheme(Grid)

const Container = styled(motion.div)`
      padding: 20px 0 100px;
      
`

const Wrapper = styled(motion.div)`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: ${breakPoints.md}){
        margin: 0 auto;
        max-width: 1000px;
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${breakPoints.lg}){
        max-width: 1200px;
        grid-template-columns: 1fr 1fr 1fr;
    }
`

const PartnerItem = styled(motion.div)`
    max-width: 320px;
`
const WrapperImage = styled(motion.div)`
  height: 100px;
  width: 200px;
  display: grid;
  overflow: hidden;
`
const Image = styled(motion.img)`
  width: ${props => props.size ? props.size : '50%'};
  align-self: flex-end;
`

const LinkWrapper = styled(motion.div)`
   position: relative;
   height: 30px;
   padding-top: 8px;
   margin-top: 16px;
`

const Link = styled(motion.a)`
   position: relative;
  display: inline-block;
  font-size: 1em;
  margin-left: 12px;
  color: ${props => props.theme.orange};
  font-weight: 800;
  text-decoration: underline;
  // text-decoration: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: attr(data-content);
    top: 0;
    left: 0;
    width: 0;
    color: #00286e;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    transition: width 275ms ease;
  }
  &:hover::before {
    width: 100%;
  }
`

const BgLink = styled(motion.div)`
   position:absolute;
   height: 28px;
   width: 28px;
   border-radius: 100px;
   top: 2px;
   background: #FDD9C6;
   z-index: -1;
`

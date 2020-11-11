import React, {useState} from "react"
import styled, {withTheme} from "styled-components";
import partnerLogos from "../../../images/partner-image.png";
import Button from "../../../components/Button";
import Text from "./Text";
import {motion} from "framer-motion";
import {breakPoints} from "../../../app-config";

const Partners = (props) => {
    return (
        <Container className={'partner'}>
            <Title className="partner-title-wrapper">
                <Text
                    stacked
                    color={props.theme.orange}
                    size={3.5}
                    sizeLg={5}
                    mawLg={"50px"}
                    lineHeight={'110%'}
                    fontWeight={900}
                    marginTop={100}
                    textTransform={'uppercase'}
                    className={'partner-title'}>
                    <span className={'partner-title-item'}>Les partenaires</span>
                    <span className={'partner-title-item'}>de start création </span>
                    <span className={'partner-title-item'}>& co.</span>
                </Text>
            </Title>
            <PartnersContent className="partner-content">
                <div className={'partner-description'}>
                    <Text
                        as={'p'}
                        color={props.theme.blue}
                        fontWeight={300}
                        maxWidthSm={'550px'}
                        size={0.5}
                        className={'partner-description-text'}>Toujours plus de ressources et de possibilités au niveau local et régional pour éclairer le parcours du
                    créateur. Si notre approche est généraliste nous avons développé depuis 10 ans des collaborations avec
                    certaines structures afin d’affiner une expertise sectorielle, agrandir notre communauté d’entrepreneurs
                    et de ressources que nous mettons désormais au service de chaque porteur de fond.</Text>
                    <Button className={'cta-partner'} value={'Voir tous nos partenaires'}/>
                </div>
               <PartnersLogoWrapper className={'partner-logos-wrapper'} >
                   <PartnerLogos className={'partner-logos'} src={partnerLogos} alt=""/>
               </PartnersLogoWrapper>
            </PartnersContent>
        </Container>
    )
}

export default withTheme(Partners)

const Container = styled.div`
max-width: 1400px;
margin: 0 auto ;
padding-bottom: 100px;

.partner-content{
  display: grid;
  grid-template-columns: 1fr; 
  padding: 20px;
  .partner-description{
    max-width:612px ;
    font-weight: 300;
    line-height: 150%;
    color: ${props => props.theme.blue};
    .partner-description-text{
      margin-bottom: 24px;
    }
  }

 }

 @media only screen and (min-width: 768px) {
      .partner-title-wrapper{
         .partner-title{
              margin-left: 0;
          }
      }
    .partner-content{
        grid-template-columns: 1fr 1fr; 
    }
 }
`

const PartnersContent = styled(motion.h2)`
  display: flex;
  align-items: center;
`
const PartnersLogoWrapper = styled.div`
 margin-top: 32px;
  max-width: 600px;

`
const PartnerLogos = styled.img`
 width: 100%;
`


const Title = styled(motion.h2)`
   margin-top: -30px;
   margin-left: 20px;
  @media (min-width: ${breakPoints.lg}){
    transform: translateY(80px);
       margin-left: 60px;
    .partner-title-item{  
      &:nth-child(1){
        margin-left: 0;
      }
      &:nth-child(2){
          margin-left: -32px;
      }
    }
  }
`

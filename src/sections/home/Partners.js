import React from "react"
import styled, {withTheme} from "styled-components";
import partnerLogos from "../../images/partner-image.png";
import bgdeco from "../../images/spaces-decoration.png";
import Text from "../../components/Text";
import {motion} from "framer-motion";
import {breakPoints} from "../../app-config";
import ButtonLink from "../../components/ButtonLink";

const Partners = (props) => {
    return (
        <Container className={'partner'}>
            <Bg  src={bgdeco} alt=""/>
            <Title className="partner-title-wrapper">
                <Text
                    stacked
                    color={props.theme.orange}
                    size={2.5}
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
                        size={0.6}
                        className={'partner-description-text'}><Bold>Toujours plus de ressources</Bold> et de possibilités au niveau local et régional pour éclairer  <Bold>le parcours du
                        créateur.</Bold> Si notre approche est généraliste nous avons développé depuis 10 ans des collaborations avec
                    certaines structures afin d’affiner une <Bold>expertise sectorielle,</Bold> agrandir notre communauté d’entrepreneurs
                    et de ressources que nous mettons désormais au service de chaque porteur de projet.</Text>
                    <ButtonLink className={'cta-partner'} value={'Voir tous nos partenaires.'} linkTo={'/partenaires'}/>
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
position: relative;
max-width: 1400px;
margin: 0 auto ;
padding-bottom: 100px;
overflow-x: hidden;

   @media (min-width: ${breakPoints.lg}){
     margin-top: 100px;
  }
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

const Bg = styled(motion.img)`
  position:absolute;
  z-index: -2;
  bottom: 0;
`


const PartnersContent = styled(motion.h2)`
  display: flex;
  align-items: center;

`
const PartnersLogoWrapper = styled.div`
 max-width: 400px;
 margin: 50px auto;
 @media (min-width: ${breakPoints.md}){
    margin-left: 20px;
    max-width: 600px;
  }
`
const PartnerLogos = styled.img`
 width: 100%;
 @media (min-width: ${breakPoints.md}){
     width: 100%;
  }
`

const Bold = styled.span`
  font-weight: 600;
`

const Title = styled(motion.h2)`
   margin-top: -30px;
   margin-left: 20px;
  @media (min-width: ${breakPoints.lg}){
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

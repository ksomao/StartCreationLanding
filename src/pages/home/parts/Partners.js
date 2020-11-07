import React, {useState} from "react"
import styled from "styled-components";
import partnerLogos from "../../../images/partner-image.png";
import Button from "../../../components/Button";

const Partners = () => {
    return (
        <Container className={'partner'}>
            <div className="partner-title-wrapper">
                <h3 className={'partner-title'}>
                    <span className={'partner-title-item'}>Les partenaires</span>
                    <span className={'partner-title-item'}>de start création </span>
                    <span className={'partner-title-item'}>& co.</span>
                </h3>
            </div>
            <div className="partner-content">
                <div className={'partner-description'}>
                    <p className={'partner-description-text'}>Toujours plus de ressources et de possibilités au niveau local et régional pour éclairer le parcours du
                    créateur.Si notre approche est généraliste nous avons développé depuis 10 ans des collaborations avec
                    certaines structures afin d’affiner une expertise sectorielle, agrandir notre communauté d’entrepreneurs
                    et de ressources que nous mettons désormais au service de chaque porteur de fond.</p>
                    <Button className={'cta-partner'} value={'Voir tous nos partenaires'}/>
                </div>
               <figure className={'partner-logos-wrapper'} >
                   <img className={'partner-logos'} src={partnerLogos} alt=""/>
               </figure>
            </div>
        </Container>
    )
}

export default Partners

const Container = styled.div`
max-width: 1500px;
margin: 0 auto;

.partner-title-wrapper{
      position:relative;
     .partner-title{
           margin-top: 100px;
           font-size: ${props => props.theme.fontSizeMobile};
           font-weight: 800;
           color: ${props => props.theme.orange};
           text-transform: uppercase;
           margin-left: 20px;
           .partner-title-item{
              display: block;
           }
      }
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
  .partner-logos-wrapper{
      margin-top: 32px;
       max-width: 719px;
       .partner-logos{
       width: 100%;
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

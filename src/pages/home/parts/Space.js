import React, {useEffect} from "react"
import styled from "styled-components";
import Button from "../../../components/Button";
import * as PropTypes from "prop-types";


function SpaceServiceItem(props) {
    return <div className={"space-service-item"}>
        <span className={"space-service-item-plus"}>+</span>
        <p className={"space-service-item-text"}>{props.service}</p>
    </div>
}


const Space = () => {
    const servicesLeft = [
        "Accès 24/7",
        "Internet 400 mb/s",
        "Rétroprojecteur/Ecran",
        "Salle de réunion – Salle  événement (capacité de 50 personnes)",
    ]

    const servicesRight = [
        "Cuisine à Votre disposition",
        "Nettoyage",
        "Service courrier",
        "Café, thé et eau filtrée",
    ]

    const listLeft = () => {
        return servicesLeft.map((service, index) => (
            <SpaceServiceItem service={service}/>
        ))
    }

    const listRight = () => {
        return servicesRight.map((service, index) => (
            <SpaceServiceItem service={service}/>
        ))
    }

    return (
        <Container className={'space'}>
            <div className="space-content">
                <h2 className={'space-title'}>
                    <span>Découvrez</span>
                    <span>Notre</span>
                    <span>Espace</span>
                </h2>
                <div className="space-content-column">
                    <div className="space-content-left">
                        <p className={'space-description'}>
                            Venez à la rencontre d’une communauté d’entrepreneurs permanents logés au sein d’un espace de
                            coworking !
                            C’est votre maison, votre outil de travail. 10 espaces à louer et à partager dans une ambiance
                            familiale et décontractée.
                            Idéalement situé Avenue Emile de Béco 83 à 1050 Bruxelles.
                        </p>
                        <div className={'space-cta'}>
                            <Button value={'Se Renseigner'}/>
                        </div>
                    </div>
                    <div className="space-content-right">
                        <div className="space-service-list-wrapper">
                            <div className="space-service-list left">
                                {listLeft()}
                            </div>
                            <div className="space-service-list right">
                                {listRight()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default Space

const Container = styled.div`
    padding-top: 100px;
    .space-content{
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 32px;
       .space-title{
              font-size: ${props => props.theme.fontSizeMobile};
              font-weight: 800;
              color: ${props => props.theme.orange};
              text-transform: uppercase;
            span{
              display: block;
            }
          }
          .space-content-column{
            display: flex;
            flex-direction: column;
      .space-content-left{
          .space-description{
            margin-top: 32px;
            font-weight: 300;
            font-size: 1em;
            line-height: 150%;
            color: ${props => props.theme.blue};
            margin-bottom: 24px;
          }
      }
      .space-content-right{
       .space-service-list-wrapper{
          padding-top: 50px;
          display: grid;
          grid-template-columns: 1fr;
          .space-service-list{
             max-width: 300px;
             line-height: 130%;
             margin-top: 20px;
             .space-service-item{
                margin-bottom: 30px;
                display:flex;
                .space-service-item-plus{
                  font-weight: bold;
                  color: ${props => props.theme.orange};
                }
                .space-service-item-text{
                  margin-left: 16px;
                  font-weight: 700;
                  color: ${props => props.theme.blue};
                }
             }
          }
          .space-service-list.right{
                margin-top: 0;
          }
       }
      }
      }
    }    
    @media only screen and (max-width: 768px) {
        .space-content{
         .space-content-left{
              .space-description{
                max-width: 600px;
              }
          }
          }
        }
    @media only screen and (min-width: 768px) {
        padding-bottom: 150px;
       .space-content{  
          display: grid;
          grid-template-columns: 1fr ;
           .space-content-column{
            flex-direction: column;
          .space-content-right{
           .space-service-list-wrapper{
              grid-template-columns: 1fr 1fr;
              max-width: 823px;
              .space-service-list.right{
                    margin-top: 90px;
              }
           }
          }
        }    
      }
    }
    @media only screen and (min-width: 1200px){
        .space-content{  
          display: grid;
          grid-template-columns: 1fr ;
           .space-content-column{
            flex-direction: row;
          .space-content-right{
           .space-service-list-wrapper{
              grid-template-columns: 1fr 1fr;
              max-width: 823px;
              .space-service-list.right{
                    margin-top: 90px;
              }
           }
          }
        }    
      }
    }
    }
`

import React from "react"
import parse from "html-react-parser"
import styled from "styled-components";
import {Link} from "gatsby"
import arrowIcon from "../../../images/arrowIcon.svg"
import heroImg from "../../../images/hero-img.png"
import heroBg from "../../../images/header-bg.svg"
import Button from "../../../components/Button";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: {duration: 0.6, ease: easing}
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing,
            delayChildren: 2,
        }
    }
};

const stagger = {
    animate: {
        transition: {
            delayChildren: 1,
            staggerChildren: 0.25
        }
    }
};

const Header = (props) => {

    // console.log(data);
    // const hero = data.elements[0]
    // const heroUrl = hero.illustrationImage.asset.url
    // const testimonial = data.elements[1]

    console.log(arrowIcon);
    return (
        <Container
            className={'hero'}>
            <img className={'hero-blob'} src={heroBg} alt="start creation decoration background"/>
            <div className="hero-left">
                <div className="hero-left-content">
                    <div className="hero-left-content-title-wrapper">
                        <h1 className={'hero-left-content-title'}>start <br/> création <br/> & co.</h1>
                    </div>
                    <p className={'hero-left-content-excerpt'}>Vous avez une idée de projet ou plusieurs ? <br/>
                        Vous voulez donner du sens à votre parcours socio-professionnel ? <br/>
                        Vous ne savez pas par où ni avec qui commencer ? <br/>
                        Démarrez avec Start Création car nous stimulons vos talents !
                    </p>
                    <Button value={'À propos de Nous'}/>
                </div>
            </div>
            <div className={'hero-right'}>
                <figure className={'hero-right-figure'}>
                    <img className={'hero-right-image'}
                         src={heroImg}
                         alt=""/>
                </figure>
                <div className={'hero-testimonial'}>
                    <p className={'hero-testimonial-excerpt'}>« Là où les idées créatives et innovantes trouvent un
                        accompagnement juste et humain »</p>
                    <p className={'hero-testimonial-name'}>- Nadine Minampala</p>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  font-weight: 300;
  color : ${props => props.theme.blue};
   .hero-blob{
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 25%;
  }
  .hero-left{
     margin: 20px;
     position:relative;
    .hero-left-content{
      .hero-left-content-title{
        font-weight: 800;
        font-size: 5em;
        line-height: 95.7%;
        text-transform: capitalize;
        color: ${props => props.theme.orange};
      }
      .hero-left-content-excerpt{
        line-height: 140%;
        font-size: 1em;
        margin-top: 30px;
        margin-bottom: 24px;
      }
    }
  }
  .hero-right{
      position:relative;
    .hero-right-figure{
      width: 100%;
      overflow: hidden;
      padding: 20px;
      .hero-right-image{
        width: 100% ;
      }
    }
    .hero-testimonial{
        position:absolute;
        background: ${props => props.theme.blue};
        font-size: 1em;
        line-height: 150%;
        padding: 20px;
        bottom: 0;
        right: 0;
        width: 300px;
        opacity: 0.98;
      .hero-testimonial-excerpt{
        font-weight: bold;
        color: white;
        font-style: italic;
      }
      .hero-testimonial-name{
         color: #00BCD6;
      }
    }
  }
  
    @media (min-width: 576px) {}
    @media (min-width: 768px) {}
    @media (min-width: 992px) {
       display: grid;
       grid-template-columns: 1fr 1fr;
       max-width: 1000px;
       margin: 150px auto 0;
       .hero-left{
          .hero-left-content{
              position:absolute;
              z-index: 20;
              .hero-left-content-title{
                 font-size: 5em;                     
              }
             .hero-left-content-excerpt{
                  font-size: 0.8em;
                  width: 380px;
                  margin-left: 5px;
             }
          }
       }
        
    .hero-right{
        width: 100%;
        margin-left: -50px;
    .hero-right-figure{
      width: 110%;
      margin-left: -60px;
      .hero-right-image{
        width: 100%;
      }
    }
        .hero-testimonial{
          width: 300px;
          right: -20px;
          bottom: -50px;
          .hero-testimonial-excerpt{
             font-size: 0.8em;
          }
          .hero-testimonial-name{
            font-size: 0.8em;
          }
        }
      }
    }
    
    
    @media (min-width: 1200px){
       max-width: 1400px;
       .hero-left{
          .hero-left-content{
              .hero-left-content-title{
                 font-size: 7em;                     
              }
             .hero-left-content-excerpt{
                  font-size: 1em;
                  width: 492px;
                  margin-left: 20px;
             }
          }
       }
        
    .hero-right{
        width: 105%;
        margin-left: -70px;
    .hero-right-figure{
      .hero-right-image{
        width: 100%;
      }
    }
        .hero-testimonial{
          width: 400px;
          right: -20px;
          bottom: -50px;
          .hero-testimonial-excerpt{
             font-size: 1em;
          }
          .hero-testimonial-name{
            margin-top: 20px;
            font-size: 1em;
          }
        }
      }
    }
`

export default Header

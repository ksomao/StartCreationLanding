import React, {useEffect} from "react"
import {motion, useAnimation} from 'framer-motion';
import styled from "styled-components";
import aboutImage from "../../../images/about-img.png"
import aboutBg from "../../../images/about-decorationabout-bg.svg"
import Button from "../../../components/Button";
import {useInView} from "react-intersection-observer";

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
            delayChildren: 2,
            staggerChildren: 0.25
        }
    }
};


const About = ({data}) => {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        rootMargin: "-100px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("animate")
        }
    }, [animation, inView])

    return (
        <Container
            ref={contentRef}
            animate={animation}
            initial='initial'
            variants={{
                initial: {opacity: 0},
                animate: {
                    opacity: 1,
                    transition: {
                        duration: 1.2,
                    }
                }
            }}
            className={'about'}>
            <motion.div
                variants={stagger}
                className={'about-animated-wrapper'}>
                <motion.img
                    variants={fadeInUp}
                    src={aboutBg}
                    alt=""
                    className="about-decoration-bg"/>
                <div className="about-content">
                    <motion.figure
                        variants={fadeInUp}
                        className={'about-wrapper-image'}>
                        <motion.img
                            src={aboutImage}
                            className={'about-image'}
                            alt="about us image"/>
                    </motion.figure>
                    <motion.div className="about-description">
                        <motion.h1
                            variants={fadeInUp}
                            className={'about-description-title'}>À propos <p
                            className={'about-description-title-bottom'}>de nous</p></motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className={'about-description-excerpt'}>Start Création and Co est un laboratoire dédié à
                            l’accompagnement d’idées créatives et innovantes.
                            Start Création and Co est né d’une dynamique commune d’entrepreneurs au sein d’un espace de
                            coworking. <br/>
                            Aujourd’hui ces entrepreneurs veulent partager à d’autres leur expérience, leur savoir-faire
                            ainsi qu’offrir leurs services.
                        </motion.p>
                        <motion.div
                            variants={fadeInUp}
                            className={'about-cta'}>
                            <Button value={'Découvrez notre espace'}/>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </Container>
    )
}

export default About

const Container = styled(motion.div)`
    margin-top: 200px;
    background: ${props => props.theme.blue};
    position:relative;
     .about-decoration-bg{
        position:absolute;
        right:0;
     }
    .about-content{
          max-width: 1669px;
          margin: 0 auto;
          padding-bottom: 100px;
      .about-wrapper-image{
        width: 100%;
        max-width: 768px;
        overflow: hidden;
        .about-image{
          width: 100%;
          z-index: 10;
        }
      }
      .about-description{
          padding: 24px;
        .about-description-title{
              margin-top: 60px;
              font-size: ${props => props.theme.fontSize.mobile};;
              font-weight: 800;
              color: ${props => props.theme.orange};
              text-transform: uppercase;
            .about-description-title-bottom{
              margin-left: 20px;
            }
        }
         .about-description-excerpt{
                margin-top: 40px;
                margin-left: 20px;
                color: white;
                font-size: 1em;
                font-weight: 200;
                line-height: 150%;
                max-width: 550px;
                margin-bottom: 24px;
            }
            .about-cta{
                margin-left: 20px;
            }
      }
      }
      
    @media (min-width: 768px) {
        padding-bottom: 50px;
       .about-content{
       padding-bottom: 0;
          .about-description{
              .about-description-title{
                 font-size: ${props => props.theme.fontSize.lDesktop};
              }
               .about-description-excerpt{
                  max-width: none;
               }
          }
      }
    }
    
    @media (min-width: 992px) {
      margin-top: 400px;
      .about-content{
         display: grid;
         grid-template-columns: 1fr 1fr;
         position:relative;
         z-index: 6;
          .about-wrapper-image{
            width: 100%;
            max-width: 768px;
            margin-top: -80px;
            margin-bottom: 100px;
            .about-image{
              width: 100%;
            }
          }
          .about-description{
            .about-description-title{
                font-size: ${props => props.theme.fontSize.sDesktop};
                 margin-top: 150px;
                .about-description-title-bottom{
                }
            }
             .about-description-excerpt{
                  max-width: 500px;
                }
                .about-cta{
                    margin-left: 20px;
                }
          }
      }

    }
    
    @media (min-width: 1200px){
            .about-content{
                .about-description{
                    .about-description-title{
                        font-size: ${props => props.theme.fontSize.lDesktop};
                    }
               }
            }
    }
`

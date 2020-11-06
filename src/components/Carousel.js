import React from "react"
import styled from "styled-components";
import ReactCarousel from 'react-elastic-carousel'
import ButtonV2 from "./ButtonV2";

const Carousel = ({data}) => {
    return (
        <Container>
            <ReactCarousel
                autoTabIndexVisibleItems={true}
                className={"carousel"}
                breakPoints={
                    [{width: 1, itemsToShow: 1},
                        {width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false},
                        {width: 850, itemsToShow: 3},
                        {width: 1150, itemsToShow: 4, itemsToScroll: 2}]
                }
                itemsToShow={4}>
                {data.map((item, index) => (
                    <div
                        className={'carousel-item'}
                        key={item.id}>
                        <p className={'carousel-item-title'}>{item.title}</p>
                        <br/>
                        <p className={'carousel-item-description'}>{item.desc}</p>
                        <ButtonV2 value={'en savoir plus'}/>
                    </div>)
                )
                }
            </ReactCarousel>
        </Container>
    )
}

export default Carousel

const Container = styled.div`
  .carousel{
      .carousel-item{
         width: 95%;
         &:focus{
          border: none;
          outline: none;
         }
         .carousel-item-title{
            font-weight: 700;
            color: white;
            font-size: 1.2em;
         }  
         .carousel-item-description{
            color: white;
            opacity: 80%;
            font-weight: 200;
            font-size: 0.9em;
            line-height: 150%;
         }  
      }
  }
    .rec{
          .rec-arrow {
            background: white;
            font-size: 20px;
              &:disabled {
                visibility: hidden;
              }
        }    
        .rec-dot{
          display: none;
        }
    }
`

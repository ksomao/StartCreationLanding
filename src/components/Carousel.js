import React from "react"
import styled from "styled-components";
import ReactCarousel from 'react-elastic-carousel'
import ButtonV2 from "./ButtonV2";
import Text from "./Text";

const Carousel = ({data}) => {
    let $thisCarousel = React.createRef();


    return (
        <Container>
            <ReactCarousel
                ref={ref => ($thisCarousel = ref)}
                autoTabIndexVisibleItems={true}
                className={"carousel"}
                breakPoints={
                    [{width: 1, itemsToShow: 1},
                        {width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false},
                        {width: 850, itemsToShow: 2},
                        {width: 1150, itemsToShow: 3, itemsToScroll: 2},
                        {width: 1280, itemsToShow: 4, itemsToScroll: 2}]
                }
                itemsToShow={4}>
                {data.map((item, index) => (
                    <div
                        className={'carousel-item'}
                        key={item.id}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.5}
                            size={0.8}
                            marginBottom={24}
                            className={'carousel-item-title'}>{item.title}</Text>
                        <Text
                            color={'white'}
                            font-weight={200}
                            size={0.6}
                            opacity={'80%'}
                            lineHeight={'170%'}
                            className={'carousel-item-description'}>{item.desc}</Text>
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
position:relative;
  .carousel{
      .carousel-item{
         width: 85%;
         &:focus{
          border: none;
          outline: none;
         }

      }
  }
  
  .test{
    position:absolute;
    right: 0;
    top: -200px;
    button{
      background: white;
      border-radius: 200%;
      padding: 20px;
      height: 40px;
      width: 40px;
      border: none;    
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

import React, {useEffect, useState} from "react"
import styled from "styled-components";
import Carousel from "../../../components/Carousel";
import Button from "../../../components/Button";

const Events = () => {
    const [data, setData] = useState([
        {id: 1, title: 'item #1', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasirem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasirem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasi.'},
        {id: 2, title: 'item #2', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesrem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasiciunt provident quasi.'},
        {id: 3, title: 'item #3', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nescirem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasirem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasiunt provident quasi.'},
        {id: 4, title: 'item #4', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt providentrem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasirem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasi quasi.'},
        {id: 5, title: 'item #5', desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt providerem ipsum dolor sit amet, consectetur adipisicing elit. A atque esse, est labore nesciunt provident quasint quasi.'}
    ]);
    return (
        <Container className={'events'}>
            <div className={'events-title-wrapper'}>
                <h3 className={'events-title'}>
                    <span className={'events-title-item'}>Nos</span>
                    <span className={'events-title-item'}>événements</span>
                    <div className="btn-wrapper">
                        <Button value={"Voir Tout"} v2 />
                    </div>
                </h3>
            </div>
            <div className="carousel-wrapper">
                <Carousel data={data}/>
            </div>
        </Container>
    )
}

export default Events

const Container = styled.div`
    background: ${props => props.theme.blue};
    padding-bottom: 100px;
    .events-title-wrapper{
      position:relative;
      height: 200px;
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
      padding-top: 50px;
        .events-title{
           font-size: ${props => props.theme.fontSize.mobile};
           font-weight: 800;
           color: ${props => props.theme.orange};
           text-transform: uppercase;
           margin-left: 20px;
           margin-bottom: 32px;
          .events-title-item{
            display: block;
            text-transform: uppercase;
            &:nth-child(2){
              margin-top:16px ;
              margin-left: 15px;
              margin-bottom: 24px;
            }
          }
          .btn-wrapper{
            margin-left: 30px;
            margin-bottom: 64px;
          }
      }
    }

`

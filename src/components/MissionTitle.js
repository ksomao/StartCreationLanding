import React from "react"
import styled, {css, withTheme} from "styled-components";
import Text, {
    default as Title,
    default as StoryText,
} from "./Text";


const Header = (props) => {
    return (
        <Container {...props}
            className={'mission-title'}>
            <Circle left={props.left} top={props.top}/>
            <Title
                stacked
                color={props.theme.blue}
                size={2.5}
                sizeSm={3}
                fontWeight={800}
                zIndex={2}
                lineHeight={1.1}
                className={'mission-title-wrapper'}>
                {props.children}
            </Title>
        </Container>
    )
}

export default withTheme(Header)

const Container = styled.div`
  position:relative;

${({leftAlign}) => !leftAlign && css`
  .mission-title-wrapper{
    margin-left: 20px;
  }
  .mission-title-item:nth-child(2){
    margin-left: 20px;
  }
`}; 
`

const Circle = styled.div`
  position:absolute;
  z-index: 1;
  background: #E6E6EE;
  height: 90px;
  width: 90px;
  border-radius: 50px;
  ${({top}) => top && css`
      top: ${top}px;
  `}; 
  
   ${({left}) => left && css`
       left: ${left}px;
  `};    
   
  ${({leftAlign}) => !leftAlign && css`
  .mission-title-wrapper{
    margin-left: 20px;
  }
  .mission-title-item:nth-child(2){
    margin-left: 20px;
  }
`}; 
`

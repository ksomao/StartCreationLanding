import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";


const ButtonLink = ({value, v2, size,...props}) => {

    return (
        <Container size={size}>
            <button className="btn">
            <span className="circle">
                <span className="icon arrow"/>
            </span>
                <span className="button-text">{value}</span>
            </button>
        </Container>
    )
}
export default ButtonLink

const Container = styled(Link)`
 grid-area: main;
    align-self: center;
    justify-self: center;
    
button {
  position: relative;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}
button.btn {
  width: ${({size}) => size + "rem"};
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
button.btn .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  margin: 0;
  width: 2rem;
  height: 2rem;
  background: #F78240;
  border-radius: 1.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button.btn .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  
}
button.btn .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.2rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}
button.btn .circle .icon.arrow::before {
  position: absolute;
  content: '';
  top: -2px;
  left: 7px;
  width: 0.4rem;
  height: 0.4rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
button.btn .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  margin: 0.2rem 0 0 2.5rem;
  color: #F78240;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
}
button:hover .circle {
  width: 100%;
}

button:hover .button-text {
  color: #fff;
}

`
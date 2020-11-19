import {Link} from "gatsby";
import React from "react";
import styled from "styled-components";



const ButtonLink = ({value,linkTo, ...props}) => {
    return (
        <div>
            <StyledLink {...props} data-content={value} className={'button-link'} to={linkTo}>{value}</StyledLink>
        </div>
    )
}
export default ButtonLink

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  font-size: 1.5em;
  color: ${props => props.theme.orange};
  font-weight: 800;
  text-decoration: underline;
  // text-decoration: none;
  overflow: hidden;
  &::before {
    position: absolute;
    content: attr(data-content);
    top: 0;
    left: 0;
    width: 0;
    color: ${props => props.version=== 'light' ? 'white' : '#020388'};
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    transition: width 275ms ease;
  }
  &:hover::before {
    width: 100%;
  }
`
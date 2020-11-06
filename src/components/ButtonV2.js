import {Link} from "gatsby";
import arrowIcon from "../images/cirlcleWhite.svg";
import React from "react";
import styled from "styled-components";


const ButtonSlider = ({value}) => {

    return (
        <StyledLink className={'cta'} to={""}>
            <span className={'cta-text'}>{value}</span>
            <img className={'cta-icon'} src={arrowIcon} alt=""/>
        </StyledLink>
    )
}
export default ButtonSlider

const StyledLink = styled(Link)`
        display: flex;
        align-items: center;
        font-weight: 600;
        text-transform: capitalize;
        text-decoration: none;
        margin-top: 24px;
        .cta-icon{
           height: 20px;
           margin-left: 16px;
        }
        .cta-text{
            font-size: 1em;
            color: ${props => props.theme.orange};
        }
        &:visited{
            text-transform: none;
        }
`


import {Link} from "gatsby";
import arrowIcon from "../images/cirlcleWhite.svg";
import React from "react";
import styled from "styled-components";
import Text from "../pages/home/parts/Text";


const ButtonSlider = ({value}) => {

    return (
        <StyledLink className={'cta'} to={""}>
            <Text
                size={0.5}
                color={props => props.theme.orange}
                className={'cta-text'}>{value}</Text>
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

        &:visited{
            text-transform: none;
        }
`


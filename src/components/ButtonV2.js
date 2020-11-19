import {Link} from "gatsby";
import arrowIcon from "../images/cirlcleWhite.svg";
import React from "react";
import styled, {withTheme} from "styled-components";
import Text from "./Text";


const ButtonSlider = (props) => {

    return (
        <StyledLink className={'cta'} to={""}>
            <Text
                size={0.6}
                color={props.theme.orange}
                className={'cta-text'}>{props.value}</Text>
            <img className={'cta-icon'} src={arrowIcon} alt=""/>
        </StyledLink>
    )
}
export default withTheme(ButtonSlider)

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


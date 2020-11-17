import {Link} from "gatsby";
import arrowIcon from "../images/orangeCircle.png";
import arrowIconWhite from "../images/cirlcleWhite.svg";

import React from "react";
import styled from "styled-components";
import Text from "./Text";


const Button = ({value, v2, ...props}) => {

    return (
        <StyledLink className={'cta'} to={""} v2={v2}>
            <Text
                size={0.6}
                color={props => props.theme.orange}
                className={'cta-text'}>{value}</Text>
        </StyledLink>
    )
}
export default Button

const StyledLink = styled(Link)`
        display: flex;
        align-items: center;
        font-weight: 600;
        text-transform: capitalize;
        text-decoration: none;
        .cta-icon{
           height: 20px;
        }
        .cta-text{
            font-size: 1rem;
            color: ${props => props.v2 ? 'white' : props.theme.orange };
            margin-left: 16px;
        }
        &:visited{
            text-transform: none;
        }
`


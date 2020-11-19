import React from "react"
import styled, {css, withTheme} from "styled-components";
import {breakPoints} from "../app-config";
import {mixinFontScalableSize} from "../helpers";
import {motion} from "framer-motion";

const Text = (props) => {
    if(props.debug){
        console.log("TEXT COMPONENTS LOG",props);
    }

    return (
        <TextContainer {...props} variants={props.variants}>
            {props.children}
        </TextContainer>
    )
}

export default withTheme(Text)

const TextContainer = styled(motion.span)`
font-size: calc(${props => props.size + "rem"} + 1vmin);
line-height: ${props => props.lineHeight ? props.lineHeight : '170%'};
font-weight: ${props => props.fontWeight ? props.fontWeight : 300};
color: ${props => props.color};
display: block;

${({zIndex}) => zIndex && css`
    position: relative;
    z-index: ${zIndex};
`};

${({stacked}) => stacked && css`
    & > * { display: block};
`};

${({debug}) => debug && css`
    border: 0.5px solid red;
    display: block;
    background: #ffc0c0;
    & > * { 
      border: 0.5px solid red;
      display: block;
      background: #ffc0c0;
    };
`};

${({noLink}) => noLink && css`
    & > a, & > a:visited { 
      color: ${props => props.theme.orange};
      text-decoration: none;
    };
`};

${({maxLines}) => maxLines && css`
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: ${maxLines};
   -webkit-box-orient: vertical;
`};



${({linkHoverColor}) => linkHoverColor && css`
    & > a:hover { 
      color: ${props => props.theme.orange};
    };
`};

${({opacity}) => opacity && css`
  opacity : ${opacity};
`};

${({marginTop}) => marginTop && css`
    margin-top:  ${marginTop}px;
`};
${({marginBottom}) => marginBottom && css`
    margin-bottom:  ${marginBottom}px;
`};
${({marginLeft}) => marginLeft && css`
    margin-left:  ${marginLeft}px;
`};
${({marginRight}) => marginRight && css`
    margin-right:   ${marginRight}px;
`};

${({fontStyle}) => fontStyle && css`
    font-style:  ${fontStyle};
`};

${({textTransform}) => textTransform && css`
    text-transform:  ${textTransform};
`};

${({textDecoration}) => textDecoration && css`
    text-decoration:  ${textDecoration};
`};



@media (min-width: ${breakPoints.sm}){
${({sizeSm}) => sizeSm && css`
    font-size: ${mixinFontScalableSize(sizeSm)};
`};

${({maxWidthSm}) => maxWidthSm && css`
    max-width: ${maxWidthSm};
`};

//Margin
${({marginTopSm}) => marginTopSm && css`
    margin-top:  ${marginTopSm}px;
`};
${({marginBottomSm}) => marginBottomSm && css`
    margin-bottom:  ${marginBottomSm}px;
`};
${({marginLeftSm}) => marginLeftSm && css`
    margin-left:  ${marginLeftSm}px;
`};
${({marginRightSm}) => marginRightSm && css`
    margin-right:   ${marginRightSm}px;
`};
}



@media (min-width: ${breakPoints.md}){
${({maxWidthMd}) => maxWidthMd && css`
    max-width: ${maxWidthMd};
`};

${({sizeMd}) => sizeMd && css`
    font-size: ${mixinFontScalableSize(sizeMd)};
`};

//Margin
${({marginTopMd}) => marginTopMd && css`
    margin-top:  ${marginTopMd}px;
`};
${({marginBottomMd}) => marginBottomMd && css`
    margin-bottom:  ${marginBottomMd}px;
`};
${({marginLeftMd}) => marginLeftMd && css`
    margin-left:  ${marginLeftMd}px;
`};
${({marginRightMd}) => marginRightMd && css`
    margin-right:   ${marginRightMd}px;
`};
}


@media (min-width: ${breakPoints.lg}){
${({maxWidthLg}) => maxWidthLg && css`
    max-width: ${maxWidthLg};
`};

${({sizeLg}) => sizeLg && css`
    font-size: ${mixinFontScalableSize(sizeLg)};
`};

//Margin
${({marginTopLg}) => marginTopLg && css`
    margin-top:  ${marginTopLg}px;
`};
${({marginBottomLg}) => marginBottomLg && css`
    margin-bottom:  ${marginBottomLg}px;
`};
${({marginLeftLg}) => marginLeftLg && css`
    margin-left:  ${marginLeftLg}px;
`};
${({marginRightLg}) => marginRightLg && css`
    margin-right:   ${marginRightLg}px;
`};
}



@media (min-width: ${breakPoints.xl}){
${({maxWidthXl}) => maxWidthXl && css`
    max-width: ${maxWidthXl};
`};
${({sizeXl}) => sizeXl && css`
    font-size: ${mixinFontScalableSize(sizeXl)};
`};

//Margin
${({marginTopXl}) => marginTopXl && css`
    margin-top:  ${marginTopXl}px;
`};
${({marginBottomXl}) => marginBottomXl && css`
    margin-bottom:  ${marginBottomXl}px;
`};
${({marginLeftXl}) => marginLeftXl && css`
    margin-left:  ${marginLeftXl}px;
`};
${({marginRightXl}) => marginRightXl && css`
    margin-right:   ${marginRightXl}px;
`};
}
`

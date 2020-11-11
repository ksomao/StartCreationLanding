import {css} from "styled-components";

export const mixinFontScalableSize= (size) => {
    return css`calc(${size + "rem"} + 1vmin)`
}
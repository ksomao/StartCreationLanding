import {css} from "styled-components";
import {useEffect, useRef, useState} from "react";

export const mixinFontScalableSize= (size) => {
    return css`calc(${size + "rem"} + 1vmin)`
}

export const useMenuState = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const stateRef = useRef(state);
    useEffect(
        () => {
            stateRef.current = state;
        },
        [state],
    );
    return [stateRef, setState];
};
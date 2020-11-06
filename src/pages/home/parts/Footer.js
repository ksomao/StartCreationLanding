import React, {useEffect, useState} from "react"
import styled from "styled-components";
import Carousel from "../../../components/Carousel";
import Button from "../../../components/Button";

const Footer = () => {
    return (
        <Container className={'footer'}>

        </Container>
    )
}

export default Footer

const Container = styled.div`
    background: ${props => props.theme.blue};
    padding-bottom: 200px;
`

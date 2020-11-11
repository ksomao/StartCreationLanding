import React from "react"
import styled from "styled-components";
import Header from "./parts/Header";
import Space from "./parts/Space";
import Events from "./parts/Events";
import About from "./parts/About";
import Partners from "./parts/Partners";
import Footer from "./parts/Footer";
import {Links} from "../../app-config"


const IndexPage = () => {
    return (
        <>
            <Header />
            <About />
            <Space />
            <Events />
            <Partners />
            <Footer links={Links} />
        </>
    )
}

export default IndexPage

const Span = styled.span`
font-weight: bold;
color: orange;
  &:nth-child(1){
    margin-left: 50px;
    font-size: 2em;
    display: block;
  }
  &:nth-child(2){
    font-size: 2em;
    display: block;
    margin-left: 20px;
  }
  &:nth-child(3){
    margin-left: 50px;
    font-size: 2em;
    display: block;
  }
`


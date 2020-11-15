import React from "react"
import styled, {withTheme} from "styled-components";
import Header from "../sections/home/Header";
import About from "../sections/home/About";
import Space from "../sections/home/Space";
import Events from "../sections/home/Events";
import Partners from "../sections/home/Partners";
import Footer from "../sections/home/Footer";
import {Links} from "../app-config";
import Word from "../sections/mission/Word";



const IndexPage = () => {
    return (
        <>
            <Header />
            <About />
            <Space />
            <Events />
            <Partners />
        </>
    )
}

export default withTheme(IndexPage)




import React from "react"
import styled, {withTheme} from "styled-components";
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

export default withTheme(IndexPage)




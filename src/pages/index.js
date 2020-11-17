import React from "react"
import styled, {withTheme} from "styled-components";
import Header from "../sections/home/Header";
import About from "../sections/home/About";
import Space from "../sections/home/Space";
import Events from "../sections/home/Events";
import Partners from "../sections/home/Partners";
import {Links} from "../app-config";
import Word from "../sections/mission/Word";
import Menu from "../sections/common/Menu";
import SEO from "../components/seo";


const IndexPage = () => {
    return (
        <Container>
            <SEO title="Accueil" />
            <Header/>
            <About/>
            <Space/>
            <Events/>
            <Partners/>
        </Container>
    )
}
const Container = styled.div`
  overflow: hidden;
`
export default withTheme(IndexPage)




import React from "react"
import Header from "./parts/Header";
import Space from "./parts/Space";
import Events from "./parts/Events";
import About from "./parts/About";
import Partners from "./parts/Partners";
import {gql, useQuery} from '@apollo/client';
import styled from "styled-components";
import SEO from "../../components/seo.js"
import _ from "lodash"


const IndexPage = () => {
    return (
        <Div>
            <Header />
            <About />
            <Space />
            <Events />
            <Partners />
        </Div>
    )
}

export default IndexPage

const Div = styled.div`

`
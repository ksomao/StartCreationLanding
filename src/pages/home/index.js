import React from "react"
import Header from "./parts/Header";
import Space from "./parts/Space";
import Events from "./parts/Events";
import About from "./parts/About";
import Partners from "./parts/Partners";
import {gql, useQuery} from '@apollo/client';
import styled from "styled-components";
import {GET_HOMEPAGE} from "../../graphQl";
import SEO from "../../components/seo.js"
import _ from "lodash"


const IndexPage = () => {
    const { loading, error, data } = useQuery(GET_HOMEPAGE);

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const allPages = data?.allPage.filter(page => !page._id.includes('drafts'))
    const sections  = allPages.shift().sections
    const headerData = _.find(sections, { title : 'Header'} )
    const aboutData = _.find(sections, { title : 'About'} )

    return (
        <Div>
            <Header data={headerData}/>
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
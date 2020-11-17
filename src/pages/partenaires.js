import React from "react";
import Header from "../sections/partenaires/Header";
import Grid from "../sections/partenaires/Grid";
import styled, {withTheme} from "styled-components";
import SEO from "../components/seo";

const Partenaires = () => {
    return (
        <Container>
            <Header/>
            <Grid/>
        </Container>
    )
}

const Container = styled.div`
  overflow: hidden;
`
export default Partenaires
import React from "react";
import Grid from "../sections/contact/Grid";
import SEO from "../components/seo";
import {motion} from "framer-motion";
import styled from "styled-components";


const Contact = () => {
    return (
        <Container>
            <Grid/>
        </Container>
    )
}

const Container = styled(motion.div)``

export default Contact
import React, {useEffect} from "react"
import Header from "../sections/mission/Header";
import History from "../sections/mission/History";
import Values from "../sections/mission/Values";
import OurMission from "../sections/mission/OurMission";
import OurServices from "../sections/mission/OurServices";
import {Links} from "../app-config";
import Word from "../sections/mission/Word";
import styled from "styled-components";


const APropos = () => {
    useEffect(() => window.scrollTo(0, 0), [])
    return (
        <Container>
            <Header/>
            <History/>
            <Values />
            <OurMission/>
            <OurServices />
            <Word/>
        </Container>
    )
}

const Container = styled.div`
  overflow: hidden;
`

export default APropos




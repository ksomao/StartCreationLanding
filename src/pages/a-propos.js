import React, {useEffect} from "react"
import Header from "../sections/mission/Header";
import History from "../sections/mission/History";
import Values from "../sections/mission/Values";
import OurMission from "../sections/mission/OurMission";
import OurServices from "../sections/mission/OurServices";
import Word from "../sections/mission/Word";
import styled, {withTheme} from "styled-components";
import SEO from "../components/seo";


const APropos = () => {

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

export default withTheme(APropos)




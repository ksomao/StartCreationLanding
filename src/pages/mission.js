import React from "react"
import Header from "../sections/mission/Header";
import History from "../sections/mission/History";
import Values from "../sections/mission/Values";
import OurMission from "../sections/mission/OurMission";
import OurServices from "../sections/mission/OurServices";
import Footer from "../sections/home/Footer";
import {Links} from "../app-config";
import Word from "../sections/mission/Word";


const Mission = () => {
    return (
        <>
            <Header/>
            <History/>
            <Values />
            <OurMission/>
            <OurServices />
            <Word/>
        </>
    )
}

export default Mission




import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../sections/common/Footer";

const Layout = ({children}) => {

    return (
        <>
            <div>
                <div>{children}</div>
                <Footer/>
            </div>
        </>
    )
}


export default Layout

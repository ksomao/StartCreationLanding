import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../sections/common/Menu";

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
    return (
        browser && (
            <div>
                <Menu/>
                <SEO title="404 Page not found" />
                <h1>404 Error content...</h1>
            </div>
        )
    );
};

export default NotFoundPage

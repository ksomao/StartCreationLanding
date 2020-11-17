import React from 'react'
import Layout from './src/components/layout'
import {ThemeProvider} from "styled-components";
import {apolloClient, Links, theme} from "./src/app-config";
import {globalHistory} from "@reach/router";

export const onInitialClientRender = () => {
    /**
     * This is a workaround for a bug in Gatsby
     *
     * See https://github.com/gatsbyjs/gatsby/issues/8357 for more details
     */
    globalHistory._onTransitionComplete();
}

const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
            {element}
    </Layout>
)

const wrapRootElement = ({ element }) => (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
)

export { wrapPageElement, wrapRootElement }
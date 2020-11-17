import React from 'react'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache,} from '@apollo/client'
import fetch from 'isomorphic-fetch'
import Layout from './src/components/layout'
import {ThemeProvider} from "styled-components";
import {globalHistory} from "@reach/router";
import {theme} from "./src/app-config";




export const onInitialClientRenderr = () => {
    window.addEventListener('popstate', () =>
        window.location.href = window.location.href
    )
}

const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
)

export { wrapPageElement, wrapRootElement }
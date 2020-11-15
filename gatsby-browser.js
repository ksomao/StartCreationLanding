import React from 'react'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache,} from '@apollo/client'
import fetch from 'isomorphic-fetch'
import Layout from './src/components/layout'
import {ThemeProvider} from "styled-components";
import {apolloClient, Links, theme} from "./src/app-config";
import Footer from "./src/sections/home/Footer";


const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>
            {element}
            {/*<Footer links={Links}/>*/}
    </Layout>
)

const wrapRootElement = ({ element }) => (
        <ThemeProvider theme={theme}>
            {element}
        </ThemeProvider>
)

export { wrapPageElement, wrapRootElement }


//OLD WRAPPER
// const wrapRootElement = ({ element }) => (
//     <ApolloProvider client={apolloClient}>
//         <ThemeProvider theme={theme}>
//             {element}
//         </ThemeProvider>
//     </ApolloProvider>
// )
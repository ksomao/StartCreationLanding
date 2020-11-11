// import React from 'react'
// import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache,} from '@apollo/client'
// import fetch from 'isomorphic-fetch'
// import Layout from './src/components/layout'
// import {ThemeProvider} from "styled-components";
//
//
//
// const httpLink = new HttpLink({
//     uri:  'https://rur4iyav.api.sanity.io/v1/graphql/production/default',
//     fetch,
//     headers: {
//         Authorization: `Bearer skUQmzney3HURlL4YxVjkBWhdL5fQVLHSfv68EHgkpD8JQ3pXk4lFRb4yv31qLLGSomzg75EWmnd3IjpeNZVOFnZhfVSImXj7t9VeOH72mu6GyyBsJQlezBvWCwoEWB3uhfPqjGPlAXCQ4vxw9GhW74ST16Dt5Vkdoc0wsT3Qml1lyGdZOyO`,
//     },
// })
//
// const theme = {
//     orange: '#F78240',
//     blue: '#010253',
//     fontSizeMobile: "3rem",
//     fontSizeTablet: "4rem",
//     fontSizeDesktop: "5rem",
//     fontSizeLDesktop: "6rem",
//     fontSizeXlDesktop: "7rem"
// };
//
// const apolloClient = new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
// })
//
//
//
// const wrapPageElement = ({ element, props }) => (
//     <Layout {...props}>{element}</Layout>
// )
//
// const wrapRootElement = ({ element }) => (
//     <ApolloProvider client={apolloClient}>
//         <ThemeProvider theme={theme}>
//             {element}
//         </ThemeProvider>
//     </ApolloProvider>
// )
//
// export { wrapPageElement, wrapRootElement }
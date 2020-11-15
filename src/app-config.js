import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import fetch from "isomorphic-fetch";

//APOLLO-CLIENT-CONFIG
//--------------------------------------------------------------------------
export const httpLink = new HttpLink({
    uri: 'https://rur4iyav.api.sanity.io/v1/graphql/production/default',
    fetch,
    headers: {
        Authorization: `Bearer skUQmzney3HURlL4YxVjkBWhdL5fQVLHSfv68EHgkpD8JQ3pXk4lFRb4yv31qLLGSomzg75EWmnd3IjpeNZVOFnZhfVSImXj7t9VeOH72mu6GyyBsJQlezBvWCwoEWB3uhfPqjGPlAXCQ4vxw9GhW74ST16Dt5Vkdoc0wsT3Qml1lyGdZOyO`,
    },
})
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

//STYLED-COMPONENTS
//--------------------------------------------------------------------------
export const theme = {
    orange: '#F78240',
    blue: '#010253',
    fontSizeMobile: "0.75rem",
    fontSizeTablet: "4rem",
    fontSizeDesktop: "5rem",
    fontSizeLDesktop: "6rem",
    fontSizeXlDesktop: "7rem"
};

//BREAKPOINTS
//--------------------------------------------------------------------------
export const breakPoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
}

//NAVLINKS
//--------------------------------------------------------------------------
export const Links = {
    home: {
        name: 'Accueil',
        to: '/',
    },
    about: {
        name: 'À propos',
        to: '/mission',
    },
    space: {
        name: 'Spaces',
        to: '/',
    },
    events: {
        name: 'Events',
        to: '/',
    },
    contact: {
        name: 'Contact',
        to: '/',
    },
}

import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import fetch from "isomorphic-fetch";

//APOLLO-CLIENT-CONFIG
//--------------------------------------------------------------------------
export const httpLink = new HttpLink({
    uri: 'https://api-eu-central-1.graphcms.com/v2/ckg3cdnb1xg0601xogt91bgc8/master',
    fetch,
    headers: {
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MDIzMjQ0NjksImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrZzNjZG5iMXhnMDYwMXhvZ3Q5MWJnYzgvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDA3NWE4MDktODFlNC00OWRjLTkzZWItMjJjZTFhYmFlNGMyIiwianRpIjoiY2tnM2ltOWlzeWV6NTAxejQ5N2dmZTlqZSJ9.PqSdHs3b8MCt6ZVmRVt7pMGz61FWdmYiDurzjODF1GBb2nLtwN9TEV9UfMBkCrPJWCkZIeErcqMXRZeu0WklWqiU5YS7uxKQnnplJoJjhk2cykyIvnnP3NJnjmYgAGuESXKONKDVMlKoQd0TSiOkmnxTy7URgyhRfvjlgf-ZKmik3uOF8gEGBe7vKvQWABtcFsf1VnE8ReV-NNXiBh5CuYxTklgLFj2lPNhRm6OOErk34Hw2GSdkmk4eg2Fgebg2rPypwxSsRiWJZvQOnS5w88Wo28k4htHhu88ZJtV-a1JZtvy-chQ-WFupSzXRndyxlWYhPQndk2r48RNHoxyqSxZKtMMKJYdlZmRtPsYEi3gy4YRdN4yG213tob4VWmbiFJ6w_U3WC-0t_0e1w0GNUwTa7hRiD-UkCSdHaWc3jvFXUPWgZkNF3n3L6rIFhpKkcSWYJIqRishW-1_FM0g_z1XyuT40_EliNdq2_b7raPnwX5PN6upnc83efb3JHN2hru_GWyRkA__wX3QGMZ9d2YQmd5j1oqNDI_5FObpZ6KZFwUXwUMewU6OfAhKV5TaKxdL4y_DDdKbjAqwixIwuZHUx00rHjtNYKZqwSQp_3JavNtaQkIS3qGAJOqHwKgTqEA15m3mp3Uxl2ppv2Bs-OC3YgeaEQ1sZ9i3CqL9KJLo`,
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

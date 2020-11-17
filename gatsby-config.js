module.exports = {
    siteMetadata: {
        title: `Start Création & Co.`,
        description: `Vous avez une idée de projet ou plusieurs ? Vous voulez donner du sens à votre parcours socio-professionnel ? Vous ne savez pas par où ni avec qui commencer ? Démarrez avec Start Création car nous stimulons vos talents !
`,
        author: `@greenbetech.com`,
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `poppins\:100,200,300,400,500,600,700,800,900`,
                ],
                display: 'swap'
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Start Création & Co.`,
                short_name: `Sc & Co`,
                start_url: `/`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

import {gql} from "@apollo/client";

export const GET_HOMEPAGE = gql`
    query MyQuery {
        allPage(
            where: {title: {eq: "HomePage"}
            }
        ) {
            _id
            title
            sections{
                title
                elements{
                    ... on Hero{
                        heading
                        tagline
                        heroImage{
                            asset{
                                url
                            }
                        }
                        button{
                            linkText
                        }
                    }
                    ... on TextWithIllustration{
                        heading
                        tagline
                        excerpt
                        illustrationImage
                        {
                            asset{
                                url
                            }
                        }
                    }
                    ... on CallToAction {
                        linkText
                    }

                    ... on List{
                        item{
                            text
                        }
                    }

                    ... on Testimonial{
                        excerpt
                        name
                    }
                }
            }
        }
    }
`;


export const GET_EVENTS = gql`
    query MyQuery {
        events {
            title
            url
            dateDebut
            description {
                text
                html
            }
        }
    }
`;

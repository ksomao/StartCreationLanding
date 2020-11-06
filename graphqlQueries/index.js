import {useStaticQuery,graphql} from "gatsby"

export const useBlogPosts = () => {
    const { allSanityBlogPost } = useStaticQuery(
        graphql`
            query BlogPosts {
                allSanityBlogPost {
                    nodes {
                        name
                        sponsor {
                            name
                            url
                        }
                    }
                }
            }
        `
    )
    return allSanityBlogPost.nodes
}




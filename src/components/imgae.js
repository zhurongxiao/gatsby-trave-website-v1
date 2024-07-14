import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
const Image = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(png)|(jeeg)/"}, name: {nin: ["background", "background2"]}}
        ) {
          edges {
            node {
              base
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
          }
        }
      }
        `)

    return (
        <div className="image-container">
            <h1>View our Destinations</h1>
            <div className="image-grid">
                {data.allFile.edges.map((image, key) => (
                    <GatsbyImage className="image-item" image={image.node.childImageSharp.gatsbyImageData} alt={image.node.base.split('.')[0]} key={key} />
                ))}
            </div>
        </div>
    )
}

export default Image



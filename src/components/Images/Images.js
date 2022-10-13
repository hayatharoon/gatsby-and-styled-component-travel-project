import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { ImageContainer, ImageGrid, ImageHeading } from "./ImageElement"
import Img from "gatsby-image"
import "./image.css"

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)|(jpg)|(jpeg)/" }
          name: { nin: ["background", "example"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ImageContainer>
      <ImageHeading>View our Destination</ImageHeading>
      <ImageGrid>
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </ImageGrid>
    </ImageContainer>
  )
}

export default Images

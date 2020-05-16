import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
              color
            }
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />

      <Products products={data.allStripeSku.edges}></Products>
      <Link to="./"></Link>
      <Jumbo description={data.allSite.edges[0].description}></Jumbo>
    </>
  )
}

export default IndexPage

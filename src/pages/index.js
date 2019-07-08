import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Products } from '../components'
// import styled from 'styled-components'

export const query = graphql`
  query GET_DATA {
    allSite{
      edges{
        node{
          siteMetadata{
            description
          }
        }
      }
    }
    allStripeSku{
    edges{
      node{
        id
        price
        product{
          name
          metadata {
            description
            img
          }
        }
      }
    }
  }
  }
`
// const Button = styled.button`
//   width: 8rem;
//   background-color:#98ca3f; 
//   border: none;
//   border-radius: 10px;
//   color: ${props => props.color};
//   &:hover{
//     transform: scale(1.4);
//   }
// `

const IndexPage = ({data}) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Products products={data.allStripeSku.edges}/>
  </>
)

export default IndexPage

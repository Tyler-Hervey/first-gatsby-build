import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
  return (
    <div>
      <h2>{data.product.title}</h2>
      <span>{data.product.price}</span>
    </div>
  )
}

export const query = graphql`
  {
    product: contentfulProduct(slug: { eq: "sectional-sofa" }) {
      title
      price
    }
  }
`

export default ComponentName

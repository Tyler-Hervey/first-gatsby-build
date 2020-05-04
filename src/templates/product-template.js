import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import styles from "../components/product.module.css"

const productTemplate = ({
  data: {
    product: {
      title,
      price,
      info: { info },
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div>
        <Link to="/products">Back to Products</Link>
      </div>
      <section className={styles.singleProduct}>
        <h1>{title}</h1>
        <Image fixed={fixed} />
        <p>{info}</p>
        <span>${price}</span>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      info {
        info
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
        title
      }
      title
      price
    }
  }
`
export default productTemplate

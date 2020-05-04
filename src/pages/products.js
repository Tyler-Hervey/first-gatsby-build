import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article className={styles.product} key={product.id}>
              <div className="content-wrapper">
                <h2>{product.title}</h2>
                <Image fluid={product.image.fluid} />
                {/* <p>{product.description.description}</p> */}
                <span>{product.price}</span>
                <Link to={`/products/${product.slug}`}>{product.title}</Link>
              </div>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default Products

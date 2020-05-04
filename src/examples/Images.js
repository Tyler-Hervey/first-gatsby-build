import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "./Images.module.css"

const getImages = graphql`
  {
    image: file(relativePath: { eq: "beautiful-nature.jpg" }) {
      id
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className={styles.container}>
      <article className={styles.singleImage}>
        <h3>basic image</h3>
        <Image fluid={data.image.childImageSharp.fluid} />
      </article>
      <article className={styles.singleImage}>
        <h3>fixed image/ blur</h3>
        <Image fluid={data.image.childImageSharp.fluid} />
      </article>
      <article className={styles.singleImage}>
        <h3>Fluid Image/svg</h3>
        <Image fluid={data.image.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images

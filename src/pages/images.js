import React from "react"
import Images from "../examples/Images"
import Layout from "../components/Layout"

const images = () => {
  return (
    <div>
      <Layout>
        <Images>
          <article className="single-image">
            <h3>basic image</h3>
          </article>
          <article className="single-image">
            <h3>fixed image/ blur</h3>
          </article>
          <article className="single-image">
            <h3>Fluid Image/svg</h3>
          </article>
        </Images>
      </Layout>
    </div>
  )
}

export default images

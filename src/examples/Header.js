import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        person {
          age
          name
        }
        description
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        description,
        author,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{author}</h2>
      <div>
        <h3>
          {name} {age}
        </h3>
      </div>
    </div>
  )
}

export default Header

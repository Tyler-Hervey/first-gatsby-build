import React from "react"
import { Link } from "gatsby"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="site-logo"></div>
      <div className="main-nav">
        <ul id="site-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <Link to="/examples/">Examples</Link>
          </li>
          <li>
            <Link to="/images/">Images</Link>
          </li>
          <li>
            <a href="https://www.gatsbyjs.org">Gatsby Docs</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

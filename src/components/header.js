import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img src="https://i.postimg.cc/cJRTvSDR/Logo.png" alt="logoBlunt"></img>
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">PRODUCTOS</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="#">CARRITO</a>
        </MenuItem>
        <MenuItem margin>
          <span>
            <img
              src="https://i.postimg.cc/L6wpMxLt/cart.png"
              alt="cartlogo"
            ></img>
          </span>
        </MenuItem>
      </ul>
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

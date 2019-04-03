import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const Navigation = styled.nav`
border-right:1px solid;
height:100vh;
position: sticky;
top:0;

small {
  display: block;
  font-size:.7em;
  margin-bottom:2em;
}

@media screen and (max-width: 800px) {
  border-right:none;
  border-bottom:none;
  height:auto;
  z-index:1000;
  background:white;
  }

.navbar-brand {
    text-align: center;
    top: 45%;
    position: sticky;
    margin: 0 auto;
    border-top:1px solid;
    border-bottom:1px solid;

    @media screen and (max-width: 800px) {
      grid-gap:1em;
  }
}
 
`

const Title = styled.h1`
  margin: 1em 0 0;
  font-size:2em;
  font-weight:900;
  text-transform:uppercase;

`

const NavLinks = styled.div`
    justify-self: end;
    margin: 1em 0;

    a {
      margin: 10px;
      position: relative;
      transition: .3s;
      &:after {
        position: absolute;
        transition: .3s;
        content: '';
        width: 0;
        left: 50%;
        bottom: 0;
        top:26px;
        height: 1px;
        background: #000;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
        }
      }
    }
      
`
const Navbar = () => (

  <Navigation>
      <div className="navbar-brand">
        <Title>
          <Link to="/" >
            Peter Hironaka
          </Link>
        </Title>

      <NavLinks>
        <Link to="/projects" itemprop="url">
          Projects
        </Link>
        <Link to="/blog" itemprop="url">
          Notes
        </Link>
        <Link to="/about" itemprop="url">
          About
        </Link>
      
  
      </NavLinks>
      <small> © {new Date().getFullYear()}  </small>
      </div>
      
  </Navigation>
)

export default Navbar

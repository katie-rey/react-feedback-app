import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <Link className="container" to="/">
            Feedback App
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header

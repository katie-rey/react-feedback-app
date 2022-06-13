import React from 'react'
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

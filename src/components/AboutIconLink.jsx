import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div class="about-link">
      <Link
        to={{
          pathname: '/about',
          search: '?sort=name',
        }}
      >
        <FaQuestion size={25} />
      </Link>
    </div>
  )
}

export default AboutIconLink

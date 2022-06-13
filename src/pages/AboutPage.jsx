import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is an example of a react app using the following libraries: </p>
      <ul>
        {/* {''} */}
        <li>react</li>
        <li>reat-router-dom</li>
        <li>react-icons</li>
        <li>uuid</li>
        <li>framer-motion</li>
        <li>{''}</li>
      </ul>
      {''}
      <Link to="/">Back to home page</Link>
    </Card>
  )
}

export default AboutPage

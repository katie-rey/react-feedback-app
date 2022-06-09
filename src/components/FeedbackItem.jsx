import React, { useContext } from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext)

  const handleClick = (id) => {}

  return (
    <Card
    // reverse={true}
    >
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

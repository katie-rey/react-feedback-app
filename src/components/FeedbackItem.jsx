import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {
  const handleClick = (id) => {}

  return (
    <Card
    // reverse={true}
    >
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

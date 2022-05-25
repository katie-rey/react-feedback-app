import { useState } from 'react'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
    // (+e.currentTarget.value)
  }

  return (
    <>
      <ul className="rating">
        <li>
          <label htmlFor="">4</label>
          <input
            type="radio"
            id="num4"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
          />
        </li>
      </ul>
    </>
  )
}

export default RatingSelect

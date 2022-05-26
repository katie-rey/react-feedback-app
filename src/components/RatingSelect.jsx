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
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>

      {/* <ul className="rating">
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
      </ul> */}
    </>
  )
}

export default RatingSelect

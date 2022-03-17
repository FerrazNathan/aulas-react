import React from 'react'

export default function Card({ fruit }) {
  return (
    <div>
      <p>{fruit.fruit}</p>
      <p>{fruit.mixture}</p>
    </div>
  )
}

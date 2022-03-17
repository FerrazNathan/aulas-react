import React from 'react'

export default function Card({ fruit }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
          <p>{fruit.fruit}</p>
          <p>{fruit.mixture}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

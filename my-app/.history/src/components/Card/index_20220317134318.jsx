import React from 'react'

export default function Card({ data }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
          <p>{data.fruit ? data.fruti : data.player}</p>
          <p>{data.mixture}</p>
          <p>{data.drink}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

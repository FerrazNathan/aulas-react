import React from 'react'

export default function Card({ data }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
          <p>{data.fruit ? data.fruit : data.name}</p>
          <p>{data.mixture ? data.mixture : data.team}</p>
          <p>{data.drink? data.drink : data.age}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

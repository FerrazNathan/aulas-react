import React from 'react'
import { familia } from './mock';

export default function Card() {
  return (
    <div>
      {
        familia.map(item => (
          <ListData key={item.name} item={item} />
        ))
      }
      <h1>{item.title}</h1>
    </div>
  )
}

import React from 'react'

export default function PresentProp({ title, flag, text }) {

  return (
    <div>
      <p>{title}</p>
      {flag &&
        <p>{text}</p>
      }
    </div>
  )
}
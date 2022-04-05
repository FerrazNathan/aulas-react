import React from 'react'
import * as S from './styles'

export default function Link({ active }) {
  return (
    <>
      {
        active &&
        <S.TextLink onClick={(e) => { window.location.href = 'https://google.com' }}>
          Link
        </S.TextLink>
      }
    </>
  )
}

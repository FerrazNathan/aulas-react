import React from 'react'
import styles from './styles.module.css'

export default function Card({ fruit }) {
  return (
    <div className='App-card'>
      <div className='Card-header'>
        <div className='Card-text'>
          <div className='App-map'>
          <p>{fruit.fruit}</p>
          <p>{fruit.mixture}</p>
          <p className={styles['teste']}>{fruit.drink}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

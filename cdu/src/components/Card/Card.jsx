import React from 'react'
import styles from "./Card.module.css"
function Card({datosguardados}) {
  return (
    <div className={styles.container}>
        <span>{datosguardados}</span>
        <button>x</button>
        
    </div>
  )
}

export default Card
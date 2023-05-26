import React from 'react'
import styles from "./Card.module.css"
function Card({numero}) {

console.log("NUMERO DE CARD:", numero)

  return (
    <div className={styles.container}>
        <p>{numero}</p>
        <button>x</button>
        
        
    </div>
  )
}

export default Card
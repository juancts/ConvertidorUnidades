import React from 'react'
import styles from "./Card.module.css"
function Card(props) {

  return (
    <div className={styles.container}>
        <p>{props.tipo}</p><p>{props.numero}</p>
        <button>x</button>
        
        
    </div>
  )
}

export default Card
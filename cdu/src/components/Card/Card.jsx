import React from 'react'
import styles from "./Card.module.css"
function Card(props) {
  return (
    <div className={styles.container}>
        <p key={props.key} >{props.datosguardados}</p>
        <button>x</button>
        
        
    </div>
  )
}

export default Card
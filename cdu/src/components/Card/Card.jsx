import React from 'react'
import styles from "./Card.module.css"
function Card({datosguardados}) {
  return (
    <div >
        <span>{datosguardados.map(e=><div className={styles.container}>{e}<button>x</button></div>)}</span>
        
        
    </div>
  )
}

export default Card
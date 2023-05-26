import React from 'react'
import styles from "./Vistas.module.css"
function Footer() {
  return (
    <div className= {styles.container}>
        <footer className={styles.footer}>
        <p>Terms of service</p><p>Privacy policy</p>
            </footer>
        </div>
  )
}

export default Footer
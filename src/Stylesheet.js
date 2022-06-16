import React from 'react'
import './myStyles.css'
import styles from './mystyle.module.css'
function Stylesheet(props) {
 let className=props.primary ? 'primary':''
  return (
    <div>
      <h1 className={className}>StyleSheet</h1>
      <h2 style= {{color:"gray"}}>hello</h2>
      <p className={styles.bigBlue}>Welcome to React js</p>
    </div>
  )
}

export default Stylesheet

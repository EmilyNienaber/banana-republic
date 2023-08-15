import React from "react";
import styles from "./SidePanel.module.css";
import { ReactComponent as Face } from '../../assets/face.svg'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

const SidePanel = ({ slidePanelOpen, setSlidePanelOpen }) => {


  return (
    <div className={styles.main} >
      <Face className={styles.image} />

      <h1>Front-end Challenge!</h1>
      <p>This is a design that you will need to code up and impress us.</p>
      <button
        className={slidePanelOpen ? styles.arrowButtonOpen : styles.arrowButton}
        onClick={setSlidePanelOpen}
      >
        <Arrow className={styles.arrow} />
      </button>

      {/* <img src={face.src} alt="face image" /> */}
    </div>
  )
}

export default SidePanel
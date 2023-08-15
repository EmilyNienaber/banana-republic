import React from "react";
import styles from "./ExtraContent.module.css"

const ExtraContent = ({ open }) => (
  <div className={open ? styles.open : styles.main}>
    Extra Content Panel
  </div>
)

export default ExtraContent
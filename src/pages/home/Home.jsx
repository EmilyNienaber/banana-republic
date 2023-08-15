import React from "react";
import styles from "./home.module.css";
import Form from "../../components/form/Form";
import SidePanel from "../../components/sidePanel/SidePanel";

const Home = () => {

  return (
    <div className={styles.main}>
      <SidePanel />
      <Form />
    </div>
  )
}

export default Home
import React, { useState } from "react";
import styles from "./home.module.css";
import Form from "../../components/form/Form";
import SidePanel from "../../components/sidePanel/SidePanel";

const Home = () => {
  const [extraContentOpen, setExtraContentOpen] = useState(true)

  return (
    <div className={styles.main}>
      <SidePanel slidePanelOpen={extraContentOpen} setSlidePanelOpen={() => setExtraContentOpen(!extraContentOpen)} />
      <Form extraContentOpen={extraContentOpen} />
    </div>
  )
}

export default Home
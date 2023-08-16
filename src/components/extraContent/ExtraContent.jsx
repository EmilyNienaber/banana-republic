import React from "react";
import styles from "./ExtraContent.module.css"


// The state of this component should ideally be done in a global state controller if it would be needed for more than one page.
// But since this is a one-page project, passing the state down from the Home page should be fine

const ExtraContent = ({ open }) => (
  <div className={open ? styles.open : styles.main}>
    <h1>My world today</h1>
    <p>
      Sed arcu ex, imperdiet quis lacus vitae, cursus facilisis enim. Integer ipsum sem, dignissim sed mauris ut, vehicula placerat nibh. Aenean volutpat, nisi sit amet mattis tempus, justo neque fringilla sem, id tempus massa elit luctus elit. Nam vel ligula ut arcu rutrum varius sed at metus. Etiam vestibulum mauris ut enim faucibus, ut elementum <span>View all days</span> arcu viverra. Nunc risus erat, convallis in pulvinar ac, fringilla ac odio. Curabitur convallis erat vel risus egestas scelerisque. Aenean vestibulum, urna ac ullamcorper pellentesque, odio ipsum porta lectus, sed suscipit est felis quis risus. Sed ipsum diam, tincidunt ac justo at, pharetra ullamcorper est. Fusce velit orci, rhoncus eget tincidunt id, venenatis sed sem. Sed finibus purus ut ipsum mollis, efficitur ullamcorper quam iaculis. Aenean id lobortis erat. Praesent euismod metus non tempor pellentesque.
    </p>
  </div>
)

export default ExtraContent
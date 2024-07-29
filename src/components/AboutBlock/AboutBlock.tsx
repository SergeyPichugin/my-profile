import styles from "./AbloutBlock.module.scss";
import Ava from "../../assets/screen.png";
const AboutBlock = () => {
  return (
    <div>
      <div className={styles.ava}>
        <img src={Ava} />
      </div>
      <h2>me</h2>
      <p>Web developer</p>
    </div>
  );
};

export default AboutBlock;

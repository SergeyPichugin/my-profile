import styles from "./SkillBlock.module.scss";
import { SKILL } from "../../constants/skill";
import ItemSkill from "./components/ItemSkill/ItemSkill";
const SkillBlock = () => {
  return (
    <div>
      <h2>my skil</h2>
      <div className={styles.skillGradient}>
        <div className={styles.skillGradientCenterName}>noraml</div>
      </div>
      <div className={styles.skillBlocks}>
        {SKILL.map((skill) => (
          <ItemSkill
            id={skill.id}
            name={skill.name}
            category={skill.category}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBlock;

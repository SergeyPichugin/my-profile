import styles from "./ItemSkill.module.scss";

import {
  IPropsSkill,
  CATEGORY_SKILLS,
  LEVEL_SKILL,
} from "../../../../constants/skill";

const ItemSkill = ({ id, name, category, level }: IPropsSkill) => {
  const categoryRender = (catName: CATEGORY_SKILLS | CATEGORY_SKILLS[]) => {
    if (Array.isArray(catName)) {
      return catName.map((item) => (
        <div className={styles.catLabel}>{item}</div>
      ));
    } else {
      return <div className={styles.catLabel}>{catName}</div>;
    }
  };
  const levelRender = (levelName: LEVEL_SKILL | LEVEL_SKILL[]) => {
    if (Array.isArray(levelName)) {
      return levelName.map((item, index) => {
        return index === 0 ? `${item}` : `, ${item}`;
      });
    } else {
      return levelName;
    }
  };
  const levelLabelRender = (levelName: LEVEL_SKILL | LEVEL_SKILL[]) => {
    if (Array.isArray(levelName)) {
      levelName.map((item) => {
        switch (item) {
          case LEVEL_SKILL.BAD:
            return "var(--skill-gradient-bad)";
          case LEVEL_SKILL.NORAML:
            return "var(--skill-gradient-normal)";
          case LEVEL_SKILL.GOOD:
            return "var(--skill-gradient-good)";
          default:
            return "var(--skill-gradient-good)";
        }
      });
    } else {
      switch (levelName) {
        case LEVEL_SKILL.BAD:
          return "var(--skill-gradient-bad)";
        case LEVEL_SKILL.NORAML:
          return "var(--skill-gradient-normal)";
        case LEVEL_SKILL.GOOD:
          return "var(--skill-gradient-good)";
        default:
          return "var(--skill-gradient-good)";
      }
    }
  };
  return (
    <div key={id} className={styles.item}>
      <div
        className={styles.levelLabel}
        style={{ background: levelLabelRender(level) }}
      ></div>
      &nbsp; {name}
      <div>
        category:{" "}
        <div className={styles.catLabelWrapper}>{categoryRender(category)}</div>
      </div>
      <div>level: {levelRender(level)} </div>
    </div>
  );
};

export default ItemSkill;

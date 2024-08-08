import { VFX } from "@vfx-js/core";
import styles from "./SkillBlock.module.scss";
import { SKILL } from "../../constants/skill";
import ItemSkill from "./components/ItemSkill/ItemSkill";
import { useEffect, useRef } from "react";
const SkillBlock = () => {
  const itemRef = useRef<HTMLDivElement>(null);
  const vfx = new VFX();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return vfx.add(itemRef.current, { shader: "warpTransition" });
  }, [vfx]);

  return (
    <div>
      <h2>skil</h2>

      <div className={styles.skillGradient}>
        <div className={styles.skillGradientCenterName}>noraml</div>
      </div>

      <div className={styles.skillBlocks} ref={itemRef}>
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

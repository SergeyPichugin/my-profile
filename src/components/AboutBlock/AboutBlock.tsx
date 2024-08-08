import styles from "./AbloutBlock.module.scss";
import Ava from "../../assets/screen.png";
import { VFX } from "@vfx-js/core";
import { useEffect, useRef } from "react";
const AboutBlock = () => {
  const avaRef = useRef<HTMLDivElement>(null);
  const vfx = new VFX();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return vfx.add(avaRef.current, { shader: "rgbShift" });
  }, [vfx]);

  return (
    <div>
      <div ref={avaRef} className={styles.ava}>
        <img src={Ava} />
      </div>
      <h2>about me</h2>
      <p>Hi i'am web developer, my name is Sergey Pichugin</p>
    </div>
  );
};

export default AboutBlock;

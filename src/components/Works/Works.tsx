import { VFX } from "@vfx-js/core";
import { useEffect, useRef } from "react";
const Works = () => {
  const iconRef = useRef<HTMLImageElement>(null);
  const vfx = new VFX();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return vfx.add(iconRef.current, { shader: "glitch", overflow: 1000 });
  }, [vfx]);
  return (
    <>
      <div ref={iconRef} style={{ height: "100px" }}>
        <h2>works</h2>
      </div>
      <div style={{ color: "#FFF" }}>loading...</div>
    </>
  );
};

export default Works;

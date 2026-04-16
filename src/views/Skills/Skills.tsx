import { useAnimate } from "motion/react";
import type { AnimationSequence } from "motion";
import { useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { randomNumber } from "../../Utils/randomNumber";
import { useViewportLookUp } from "../../hooks/useViewPort";
import SkillInfoBox from "./Partials/SkillInfoBox";
import { SKILLS } from "../../data/skills.data";
import { shuffle } from "../../Utils/shuffle";

export default function Skills() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [infoBox, setInfoBox] = useState<{ x: number; y: number; obj: (typeof SKILLS)[number] } | null>(null);
  const { sm, md, lg, viewPortWidth } = useViewportLookUp();
  const infoBoxRef = useRef<HTMLElement | null>(null);
  const basePos = useRef<Map<string, { x: number; y: number }>>(new Map());

  const arr = useMemo(() => {
    const innerArr = [];

    let count = 0;
    if (viewPortWidth < sm) count = 2;
    else if (viewPortWidth < md) count = 5;
    else if (viewPortWidth < lg) count = 8;
    else count = 10;

    for (let i = 0; i < count; i++) {
      innerArr.push([...shuffle(SKILLS)]);
    }

    return innerArr.flat().map((item) => ({
      ...item,
      top: randomNumber(0, 95),
      right: randomNumber(-15, 100),
      rotation: randomNumber(-25, 25),
      z: randomNumber(1, 50),
    }));
  }, [viewPortWidth, sm, md, lg]);

  function handleClick(e: MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLElement).nodeName === "DIV") return;
    console.log("E: ", e);
    const label = e.target.id.replace(".", " ").split("-")[0];
    const obj = SKILLS.find((item) => item.label === label);
    const rect = scope.current.getBoundingClientRect();
    const click = { x: e.clientX, y: e.clientY };

    const placeX = click.x - rect.left - 672 / 2 + 30;
    const placeY = click.y - rect.top - 320 / 2 + 30;
    const maxLeft = rect.width - infoBoxRef.current.clientWidth;
    setInfoBox({
      x: placeX < 0 ? 0 : placeX > maxLeft ? maxLeft : placeX,
      y: placeY,
      obj,
    });

    const children = Array.from(scope.current.children) as HTMLElement[];
    const sequences: AnimationSequence = [];
    for (const child of children) {
      if (child.tagName !== "IMG") continue;
      const id = child.getAttribute("id")!;

      if (!basePos.current.has(id)) {
        const rect = child.getBoundingClientRect();
        basePos.current.set(id, { x: rect.x, y: rect.y });
      }

      const base = basePos.current.get(id)!;

      const { moveX, moveY } = calculatePush(click.x, click.y, base.x, base.y);
      const rotation = Math.max(-120, Math.min(120, moveX * 0.15));

      sequences.push([
        child,
        { x: moveX, y: moveY, rotate: rotation },
        { type: "spring", stiffness: 150, damping: 20, at: "<" },
      ]);
    }

    animate(sequences);
  }

  function calculatePush(clickX: number, clickY: number, iconX: number, iconY) {
    const dx = iconX - clickX;
    const dy = iconY - clickY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    const power = 50;
    const rectNormalizedDist = Math.pow(Math.pow(absDx, power) + Math.pow(absDy, power), 1 / power);

    const force = 5000 / (rectNormalizedDist || 1);

    const moveX = (dx / distance) * force * 8; // 4 will expand on x-axis
    const moveY = (dy / distance) * force * 1.5; // 0.9 will lower the expand on Y-axis
    // creating a rectangle instead of a circle

    return {
      dx,
      dy,
      distance,
      force,
      moveX,
      moveY,
    };
  }

  return (
    <div className="space-y-24 ">
      <div className="pl-4">
        <h2 className="text-9xl font-extrabold ">Skills</h2>
        <p className="pl-2 text-zinc-400 font-Rubik font-light">
          A mix of technologies I use daily, frameworks I’ve mastered, and tools I’ve explored throughout my journey as
          a developer.
        </p>
      </div>

      <div
        ref={scope}
        className={`relative w-full h-96 flex flex-wrap items-center justify-center gap-2 `}
        onClick={(e) => handleClick(e)}
      >
        {arr.map((item, i) => (
          <img
            id={`${item.label.replace(" ", ".")}-${i}`}
            key={`${item.label}-${i}`}
            src={item.svg}
            alt={`${item.label}-icon`}
            className={`absolute w-16 h-16 shadow-lg rounded-md cursor-pointer bg-slate-50 border-4 border-slate-300`}
            style={{
              willChange: "transform",
              top: `${item.top}%`,
              right: `${item.right}%`,
              bottom: `${item.bottom}%`,
              transform: `rotate(${item.rotation}deg)`,
              zIndex: item.z,
            }}
          />
        ))}
        <SkillInfoBox ref={infoBoxRef} skill={infoBox} />
      </div>
    </div>
  );
}

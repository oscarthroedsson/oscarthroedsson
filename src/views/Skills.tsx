import { type AnimationScope, useAnimate } from "motion/react";
import type { AnimationSequence } from "motion";
import { useMemo } from "react";
import type { MouseEvent } from "react";

import { randomNumber } from "../Utils/randomNumber";
import { SKILLS } from "../data/skills.data";
import { shuffle } from "../Utils/shuffle";

export default function Skills() {
  const [scope, animate] = useAnimate();
  const arr = useMemo(() => {
    const innerArr = [];

    for (let i = 0; i < 10; i++) innerArr.push([...shuffle(SKILLS)]);

    return innerArr.flat().map((item) => {
      return {
        ...item,
        top: randomNumber(0, 100),
        right: randomNumber(-5, 100),
        rotation: randomNumber(-25, 25),
        z: randomNumber(1, 50),
      };
    });
  }, []);

  function handleClick(e: MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("Event: ", e);
    const click = { x: e.clientX, y: e.clientY };
    const children = Array.from(scope.current.children) as HTMLElement[];
    const rects = children.map((child) => child.getBoundingClientRect());

    const sequences = children.map((child, i) => {
      const rect = rects[i]; // Använd den lagrade mätningen
      const { moveX, moveY } = calculatePush(click.x, click.y, rect.x, rect.y);

      return [child, { x: moveX, y: moveY }, { type: "tween", duration: 0.3, at: "<" }];
    }) as AnimationSequence;

    // execute
    animate(sequences);
  }

  function calculatePush(clickX: number, clickY: number, iconX: number, iconY) {
    const dx = iconX - clickX;
    const dy = iconY - clickY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const force = 15000 / distance;

    const moveX = (dx / distance) * force * 4; // 4 will expand on x-axis
    const moveY = (dy / distance) * force * 0.9; // 0.9 will lower the expand on Y-axis
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
    <div
      ref={scope}
      className={`relative w-full h-1/2 flex flex-wrap items-center justify-center gap-2 mx-auto`}
      onClick={(e) => handleClick(e)}
    >
      {arr.map((item, i) => (
        <img
          id={`${item.label}-${i}`}
          key={`${item.label}-${i}`}
          src={item.svg}
          alt={`${item.label}-icon`}
          className={`absolute w-16 h-16 shadow-lg rounded-md cursor-pointer`}
          style={{
            top: `${item.top}%`,
            right: `${item.right}%`,
            bottom: `${item.bottom}%`,
            transform: `rotate(${item.rotation}deg)`,
            zIndex: item.z,
          }}
        />
      ))}
    </div>
  );
}

import { forwardRef } from "react";

import type { SKILLS } from "../../../data/skills.data";

interface SkillInfoBoxProps {
  skill: { x: number; y: number; obj: (typeof SKILLS)[number] } | null;
}

const SkillInfoBox = forwardRef<HTMLElement, SkillInfoBoxProps>(({ skill }, ref) => {
  return (
    <article
      ref={ref}
      className={`absolute h-80 max-w-4 min-w-2xl z-1  flex items-center p-6`}
      style={{
        left: skill?.x ?? 0,
        top: skill?.y ?? 0,
        rotate: "0px",
      }}
    >
      {skill?.obj ? (
        <div className="flex justify-start gap-2 mx-auto">
          <img src={skill.obj.svg} alt={skill.obj.label} className="w-28 h-fit" />
          <div className="">
            <h3 className="text-8xl font-bold font-mono text-balance">{skill.obj.label}</h3>
            <span className="p-1 bg-lime-500 rounded-sm">{skill.obj.category}</span>
            <ul>
              {skill.obj.projects.map((item) => (
                <li>{skill.obj.projects.length < 1 ? "No projects" : item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </article>
  );
});

SkillInfoBox.displayName = "SkillInfoBox"; // name for dev tools 🛠️
export default SkillInfoBox;

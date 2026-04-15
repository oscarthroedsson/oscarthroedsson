import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import ContentWrapper from "../components/ContentWrapper";

const experiences = [
  {
    title: "LEADERSHIP",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aspernatur? Odio nostrum aut perferendis officiis. Minima velit praesentium assumenda officiis amet quas laborum cum, eligendi impedit omnis quibusdam, necessitatibus minus.`,
  },
  {
    title: "OWNERSHIP",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aspernatur? Odio nostrum aut perferendis officiis. Minima velit praesentium assumenda officiis amet quas laborum cum, eligendi impedit omnis quibusdam, necessitatibus minus.`,
  },
  {
    title: "ANALYSIS",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aspernatur? Odio nostrum aut perferendis officiis. Minima velit praesentium assumenda officiis amet quas laborum cum, eligendi impedit omnis quibusdam, necessitatibus minus.`,
  },
  {
    title: "EXPERIENCE//",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aspernatur? Odio nostrum aut perferendis officiis. Minima velit praesentium assumenda officiis amet quas laborum cum, eligendi impedit omnis quibusdam, necessitatibus minus.`,
  },
  {
    title: "EXPERIENCE 05",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, aspernatur? Odio nostrum aut perferendis officiis. Minima velit praesentium assumenda officiis amet quas laborum cum, eligendi impedit omnis quibusdam, necessitatibus minus.`,
  },
];

// reversed + rotated letters
const headerText = "EXPERIENCE".split("");
const randomOffsets = headerText.map(() => Math.random() * 400 - 200);

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const headingRefs = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(headingRefs, { once: true, amount: 0.9 });

  return (
    <ContentWrapper className="h-full w-screen flex flex-col justify-between -mx-4">
      {/* RIGHT ALIGNED HEADER AREA */}
      <div className="w-full flex flex-col items-end text-right px-8 py-10">
        {/* BACKWARDS ANIMATED HEADER */}
        <h2 ref={headingRefs} className="text-9xl font-extrabold flex gap-1">
          {headerText.map((char, i) => (
            <motion.span
              key={i}
              initial={{ x: -2000, y: randomOffsets[i] }}
              animate={isInView ? { x: 0, y: 0 } : { x: -2000 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
              }}
              className=""
            >
              {char}
            </motion.span>
          ))}
        </h2>
      </div>

      {/* EXPERIENCE GRID */}
      <div className="flex flex-col md:flex-row w-full h-[80vh] md:h-96">
        {experiences.map((exp, i) => {
          const isActive = activeIndex === i;
          const flex = isActive ? 3 : activeIndex !== null ? 1 : 1;

          return (
            <motion.article
              key={i}
              layout
              className="overflow-hidden relative flex cursor-default"
              animate={{ flex }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <motion.div
                layout
                className={`
                  w-full h-full relative flex flex-col
                  ${
                    isActive
                      ? "bg-slate-50 items-start justify-start p-2 shadow-[inset_0_0px_50px_rgba(203, 213, 225, 1)]"
                      : "items-center justify-center"
                  }
                `}
              >
                <motion.h4 layout className={`${isActive ? "text-2xl font-bold" : "text-xl"}`}>
                  {exp.title}
                </motion.h4>

                <motion.p
                  className="text-sm"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{
                    opacity: {
                      duration: 0.2,
                      delay: isActive ? 0.15 : 0,
                    },
                  }}
                >
                  {exp.content}
                </motion.p>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </ContentWrapper>
  );
}

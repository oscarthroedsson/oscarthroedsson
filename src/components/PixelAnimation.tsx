import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";

import useRouting from "../hooks/context/useRouting";

const anim = {
  initial: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.03 * i },
  }),
  hidden: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.03 * i },
  }),
};

export default function PixelAnimation() {
  const { isRouting } = useRouting();

  useEffect(() => {
    console.log("🚧🚧🚧 IS ROUTING: ", isRouting);
  }, [isRouting]);

  //Fisher–Yates shuffle | https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  const shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const columns = useMemo(() => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(innerHeight / blockSize);

    return [...Array(20)].map((_, colIndex) => {
      const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
      return { colIndex, shuffledIndexes };
    });
  }, []);

  return (
    <div className="absolute inset-0 z-10 flex pointer-events-none overflow-hidden">
      {columns.map(({ colIndex, shuffledIndexes }) => (
        <div key={colIndex} className="w-[10vw] h-screen flex flex-col">
          {shuffledIndexes.map((randomIndex, index) => (
            <motion.div
              key={index}
              className="h-[10vw] w-full bg-green-600"
              variants={anim}
              initial="initial"
              animate={isRouting ? "visible" : "hidden"}
              custom={randomIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

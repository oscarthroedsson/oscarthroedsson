import { AnimatePresence, motion } from "framer-motion";

import useNavigation from "../../hooks/useNavigation";
import NavItems from "./NavItems";

const BLOBS = [
  {
    style: { top: 0, left: 0, transformOrigin: "top left" },
    borderRadius: "0 80% 60% 0 / 0 60% 80% 0",
    delay: 0,
  },
  {
    style: { top: 0, right: 0, transformOrigin: "top right" },
    borderRadius: "80% 0 0 60% / 60% 0 80% 0",
    delay: 0.12,
  },
  {
    style: { bottom: 0, left: 0, transformOrigin: "bottom left" },
    borderRadius: "0 60% 0 80% / 80% 0 60% 0",
    delay: 0.22,
  },
  {
    style: { bottom: 0, right: 0, transformOrigin: "bottom right" },
    borderRadius: "60% 0 80% 0 / 0 80% 0 60%",
    delay: 0.08,
  },
];

export default function Navigation() {
  const { isOpen } = useNavigation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav className="absolute z-50 inset-0 m-4 rounded-lg overflow-hidden border border-slate-200">
          {BLOBS.map(({ style, borderRadius, delay }, i) => (
            <motion.div
              key={i}
              className="absolute w-[200%] h-[200%] bg-slate-100"
              style={{ ...style, borderRadius }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, transition: { duration: 0.45, delay: delay * 0.3 } }}
              transition={{
                delay,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}

          <motion.div
            className="relative z-10"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <NavItems />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

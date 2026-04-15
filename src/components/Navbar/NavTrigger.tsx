import { AnimatePresence, motion } from "framer-motion";

import useNavigation from "../../hooks/useNavigation";

export default function NavTrigger() {
  const { toggleOpen, isOpen } = useNavigation();

  return (
    <button
      className="absolute top-8 right-8 z-99999 cursor-pointer flex items-center gap-1 text-xl text-black font-medium"
      onClick={toggleOpen}
    >
      <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>[ </span>

      <span className="relative overflow-hidden" style={{ minWidth: "3.5rem", textAlign: "center" }}>
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.span
              key="x"
              className="absolute inset-0 top-1 flex items-center justify-center"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              X
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              className="absolute inset-0 top-1 flex items-center justify-center font-light leading-0"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              MENU
            </motion.span>
          )}
        </AnimatePresence>

        {/* Invisible placeholder to keep button width stable */}
        <span className="invisible">MENU</span>
      </span>

      <span style={{ fontSize: "1.6rem", lineHeight: 1 }}> ]</span>
    </button>
  );
}

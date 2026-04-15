import { motion } from "framer-motion";
import { Link } from "react-router";

import Typewriter from "../components/Animation/TypeWriter";
import ContentWrapper from "../components/ContentWrapper";
import meeTo from "../assets/mee2.png";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

export default function LandingPage() {
  return (
    <ContentWrapper className="h-full w-full">
      <header className="relative flex flex-col h-full rounded-lg p-4">
        {/* NAME */}
        <motion.div {...fadeUp(0.1)} className="relative z-10">
          <p className="text-2xl md:text-4xl font-extralight tracking-tight">Oscar Throedsson</p>
        </motion.div>

        <div className="absolute top-[10vh] left-0 right-0 flex items-center justify-center">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full rounded-full blur-3xl opacity-60 bg-white z-0" />
          <img
            src={meeTo}
            alt="Oscar Petersson"
            className="relative z-10"
            style={{
              width: "clamp(350px, 40vw, 600px)",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </div>

        {/* BOTTOM LEFT — typewriter */}
        <motion.div {...fadeUp(0.3)} className="absolute bottom-10 left-0 pb-2 md:pb-0">
          <p className="text-lg pl-3 font-light">Hey I´m a</p>
          <Typewriter
            words={["Developer", "Animator", "Thinker", "Problem Solver"]}
            className="text-[45px] pl-3 leading-none font-extrabold tracking-tight text-black"
          />
        </motion.div>

        {/* BOTTOM RIGHT — CTA */}
        <motion.div {...fadeUp(0.4)} className="absolute bottom-0 md:bottom-10 right-4 pb-2 md:pb-0">
          <Link
            to="/work"
            className="flex items-center gap-1 text-sm md:text-base font-medium hover:opacity-60 transition-opacity"
          >
            <span>[</span>
            <span>SEE MY WORK ↓</span>
            <span>]</span>
          </Link>
        </motion.div>
      </header>
    </ContentWrapper>
  );
}

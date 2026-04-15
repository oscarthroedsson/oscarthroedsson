import { useEffect, useState } from "react";

const CHAR_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

interface TypewriterProps {
  words: string[];
  className?: string;
  startDelay?: number;
}

type State = {
  wordIndex: number;
  charIndex: number;
  deleting: boolean;
  started: boolean;
};

export default function Typewriter({ words, className, startDelay = 0 }: TypewriterProps) {
  const [state, setState] = useState<State>({
    wordIndex: 0,
    charIndex: 0,
    deleting: false,
    started: false,
  });

  useEffect(() => {
    const { wordIndex, charIndex, deleting, started } = state;

    if (!started) {
      const t = setTimeout(() => setState((s) => ({ ...s, started: true })), startDelay);
      return () => clearTimeout(t);
    }

    const word = words[wordIndex];
    const isComplete = !deleting && charIndex === word.length;
    const isEmpty = deleting && charIndex === 0;

    let timeout = CHAR_SPEED;

    if (isComplete) {
      timeout = PAUSE_AFTER_TYPE;
    } else if (isEmpty) {
      timeout = PAUSE_AFTER_DELETE;
    } else {
      timeout = deleting ? DELETE_SPEED : CHAR_SPEED;
    }

    const t = setTimeout(() => {
      setState((s) => {
        const { wordIndex, charIndex, deleting } = s;
        const word = words[wordIndex];

        if (!deleting && charIndex === word.length) {
          return { ...s, deleting: true };
        }

        if (deleting && charIndex === 0) {
          return {
            ...s,
            deleting: false,
            wordIndex: (wordIndex + 1) % words.length,
          };
        }

        return {
          ...s,
          charIndex: charIndex + (deleting ? -1 : 1),
        };
      });
    }, timeout);

    return () => clearTimeout(t);
  }, [state, words, startDelay]);

  return (
    <span className={className}>
      {words[state.wordIndex].slice(0, state.charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

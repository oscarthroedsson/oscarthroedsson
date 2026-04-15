import { Link } from "react-router";
import { useEffect, useState } from "react";

import { navigationData } from "../../data/navigation.data";
import P from "../P";

const CHAR_SPEED = 70;
const ITEM_PAUSE = 300;

export default function NavItems() {
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const currentLabel = navigationData[itemIndex].label;

    if (charIndex < currentLabel.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_SPEED);
      return () => clearTimeout(t);
    }

    if (itemIndex < navigationData.length - 1) {
      const t = setTimeout(() => {
        setItemIndex((i) => i + 1);
        setCharIndex(0);
      }, ITEM_PAUSE);
      return () => clearTimeout(t);
    }

    setFinished(true);
  }, [itemIndex, charIndex, finished]);

  return (
    <ul className="px-4 pt-10 flex flex-col gap-0 justify-center">
      {navigationData.map((item, i) => {
        const isFuture = i > itemIndex && !finished;
        if (isFuture) return null;

        const isActive = i === itemIndex && !finished;
        const displayText = isActive ? item.label.slice(0, charIndex) : item.label;

        return (
          <li key={item.label}>
            <Link to={item.href} className="flex items-center gap-1">
              <P className="font-light overflow-clip" style={{ fontSize: "clamp(48px, 10vw, 150px)" }}>
                {displayText}
              </P>
              {isActive && (
                <span className="animate-pulse select-none" style={{ fontSize: "clamp(48px, 10vw, 150px)" }}>
                  |
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

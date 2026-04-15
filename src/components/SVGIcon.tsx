import { useAnimate } from "framer-motion";
import type { AnimationOptions, DOMKeyframesDefinition } from "framer-motion";

type SVGAnimationDefinition = {
  keyframes: DOMKeyframesDefinition;
  options?: AnimationOptions;
};

export type SVGAnimations = Record<string, SVGAnimationDefinition>;

type SVGIconProps = {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  animations: SVGAnimations;
  reverseOnLeave?: boolean;
};

export default function SVGIcon({ SVG, animations, reverseOnLeave = true }: SVGIconProps) {
  const [scope, animate] = useAnimate();

  const getSelector = (key: string) => `[data-anim="${key}"]`;

  const reverseKeyframes = (keyframes: DOMKeyframesDefinition) => {
    return Object.fromEntries(
      Object.entries(keyframes).map(([key, value]) => [key, Array.isArray(value) ? [...value].reverse() : value]),
    );
  };

  const runAnimations = (reverse = false) => {
    Object.entries(animations).forEach(([key, { keyframes, options }]) => {
      const selector = getSelector(key);
      const frames = reverse ? reverseKeyframes(keyframes) : keyframes;

      animate(selector, frames, options);
    });
  };

  return (
    <div
      ref={scope}
      onMouseEnter={() => runAnimations(false)}
      onMouseLeave={() => reverseOnLeave && runAnimations(true)}
    >
      <SVG />
    </div>
  );
}

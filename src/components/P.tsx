export default function P({
  children,
  className,
  ...props
}: {
  children: string;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const letters = children.split("");

  return (
    <span
      className={`group inline-flex overflow-y-hidden relative  ${className ?? ""}`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
      {...props}
    >
      <span className="flex" aria-hidden="true">
        {letters.map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-400 ease-in-out group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      <span className="flex absolute inset-0" aria-label={children}>
        {letters.map((char, i) => (
          <span
            key={i}
            className="inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-lime-400 font-semibold"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}

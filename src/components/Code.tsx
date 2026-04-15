import { useEffect, useState } from "react";

const codeTokens = [
  { text: "export ", className: "text-[#7C3AED]" },
  { text: "const ", className: "text-[#7C3AED]" },

  { text: "developer", className: "text-[#E5E7EB]" },

  { text: " = ", className: "text-[#9CA3AF]" },
  { text: "{\n", className: "text-[#9CA3AF]" },

  { text: "  name: ", className: "text-[#7C3AED]" },
  { text: '"Oscar Throedsson"', className: "text-[#34D399]" },
  { text: ",\n", className: "text-[#9CA3AF]" },

  { text: "  Focus: ", className: "text-[#7C3AED]" },
  { text: '"Fullstack JavaScript"', className: "text-[#34D399]" },
  { text: ",\n", className: "text-[#9CA3AF]" },

  { text: "  skills: ", className: "text-[#7C3AED]" },
  {
    text: '["JS", "React", "Node", "SOMETHING"]',
    className: "text-[#34D399]",
  },

  { text: ",\n", className: "text-[#9CA3AF]" },

  { text: "  passionate: ", className: "text-[#7C3AED]" },
  { text: "true", className: "text-[#FBBF24]" },

  { text: ",\n", className: "text-[#9CA3AF]" },
  { text: "};", className: "text-[#9CA3AF]" },
];

export default function CodeTypewriter() {
  const fullText = codeTokens.map((t) => t.text).join("");

  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > fullText.length) return;

    const timeout = setTimeout(() => {
      setTypedText(fullText.slice(0, index));
      setIndex((prev) => prev + 1);
    }, 45);

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-140 px-10 py-8">
        <pre className="font-mono text-sm leading-7 whitespace-pre text-left">
          {codeTokens.map((token, i) => {
            const startIndex = codeTokens.slice(0, i).reduce((acc, t) => acc + t.text.length, 0);
            const endIndex = startIndex + token.text.length;
            const visible = typedText.slice(startIndex, endIndex);

            return (
              <span key={i} className={token.className}>
                {visible}
              </span>
            );
          })}

          <span className="text-gray-400 animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
}

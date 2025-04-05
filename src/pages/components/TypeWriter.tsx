import { useState, useEffect } from "react";

function useTypewriter(text: string, speed = 50): string {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const typingEffect = () => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
        setTimeout(typingEffect, speed); 
      }
    };

    typingEffect();
    return () => {
      i = text.length; 
    };
  }, [text, speed]);

  return displayText;
}

interface TypewriterProps {
  text: string;
  className: string;
  speed?: number;
}

export function Typewriter({ text, speed = 60, className }: TypewriterProps) {
  const displayText = useTypewriter(text, speed);
  return <p className={className}>{displayText}</p>;
}

export default Typewriter;

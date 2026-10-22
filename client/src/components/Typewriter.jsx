import { useEffect, useState } from 'react';

// Types and deletes a list of words in a loop.
export default function Typewriter({ words, speed = 90, pause = 1400 }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? speed / 2 : speed;

    if (!deleting && text === word) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, pause]);

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-blink text-accent-400">|</span>
    </span>
  );
}

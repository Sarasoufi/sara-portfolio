import { useState, useEffect } from 'react';

const TypewriterText = ({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span>{displayText}</span>
      <span 
        style={{ 
          display: 'inline-block',
          width: '2px',
          height: '1em',
          marginLeft: '4px',
          background: 'linear-gradient(135deg, hsl(186 100% 50%), hsl(280 100% 60%))',
          animation: 'blink 0.75s step-end infinite'
        }} 
      />
    </span>
  );
};

export default TypewriterText;
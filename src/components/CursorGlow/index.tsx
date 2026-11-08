// Libraries
import { useEffect, useRef } from 'react';

// Styles
import styles from './CursorGlow.module.scss';

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || !window.matchMedia('(pointer: fine)').matches) return;

    let frame = 0;

    const handleMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        glow.style.setProperty('--x', `${e.clientX}px`);
        glow.style.setProperty('--y', `${e.clientY}px`);
        glow.style.opacity = '1';
      });
    };
    const handleLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return <div ref={glowRef} className={styles.glow} aria-hidden="true" />;
};

export default CursorGlow;

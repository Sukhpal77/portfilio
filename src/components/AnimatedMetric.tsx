import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const completed = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || completed.current) { setDisplay(value); return; }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value.replace(/\d+(?:\.\d+)?/g, (number) => {
          const decimals = number.split('.')[1]?.length ?? 0;
          return (Number(number) * eased).toFixed(decimals);
        }));
        if (progress < 1) frame = requestAnimationFrame(tick);
        else { completed.current = true; setDisplay(value); }
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, reduced]);

  return <span ref={ref} aria-label={value}><span aria-hidden="true">{display}</span></span>;
}

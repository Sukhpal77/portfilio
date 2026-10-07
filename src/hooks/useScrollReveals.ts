import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

export function useScrollReveals() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const candidates = [...document.querySelectorAll<HTMLElement>('main section > :first-child, main section [class~="rounded-2xl"], main section [class~="rounded-xl"]')];
    const candidateSet = new Set(candidates);
    // Animate the outer card only, keeping nested controls and sticky elements stable.
    const elements = candidates.filter((element) => {
      let parent = element.parentElement;
      while (parent) {
        if (candidateSet.has(parent)) return false;
        parent = parent.parentElement;
      }
      return element.getBoundingClientRect().top > window.innerHeight;
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.replace('reveal-pending', 'reveal-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    elements.forEach((element) => { element.classList.add('reveal-pending'); observer.observe(element); });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove('reveal-pending', 'reveal-visible'));
    };
  }, [reduced]);
}

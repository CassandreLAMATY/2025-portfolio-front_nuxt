import { gsap } from 'gsap';

export function alertShowAnimation(alert: HTMLElement): void {
    gsap.timeline().to(alert, { x: '0', duration: 0.6, ease: 'elastic.out(0.64, 1)', opacity: 1, display: 'flex' });
}

export function alertHideAnimation(alert: HTMLElement): void {
    gsap.timeline().to(alert, { xPercent: 100, x: 12, duration: 0.2, ease: 'ease-in', opacity: 0, display: 'none' });
}
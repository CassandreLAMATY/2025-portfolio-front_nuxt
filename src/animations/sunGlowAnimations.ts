import { gsap } from "gsap";

export function sunGlowAnimation() {
    const sunSphere: HTMLElement | null = document.querySelector(".sun-sphere");
    const sunGlow: HTMLElement | null = document.querySelector(".sun-glow");

    if (!sunSphere || !sunGlow) return;

    gsap.to(sunGlow, {
        rotation: 360,
        duration: 32,
        repeat: -1,
        ease: "linear",
    });

    sunSphere.addEventListener("mouseenter", () => {
        gsap.to(sunGlow, { scale: 1.142857142857143 });
    });

    sunSphere.addEventListener("mouseleave", () => {
        gsap.to(sunGlow, { scale: 1 });
    });

    let resizeTimeout: number | undefined;

    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = window.setTimeout(() => {
            gsap.set(sunGlow, { clearProps: "rotation, scale" });
            gsap.to(sunGlow, {
                rotation: 360,
                duration: 32,
                repeat: -1,
                ease: "linear",
            });
        }, 150);
    }

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
}

import { gsap } from "gsap";

/**
 * The animation is in two parts:
 * 1. The letter goes up and is being colored (the outline is colored too)
 * 2. The letter goes down without removing the color
 * @param {NodeListOf<HTMLElement>} letters array of letters
 * @param {HTMLElement} item the letter to animate
 */
export function animatePortfolioLetters(
    letters: NodeListOf<HTMLElement>,
    item: HTMLElement
) {
    gsap.timeline()
        .to(item, { y: -20, duration: 0.2, ease: "ease-in" })
        .to(item, { y: 0, duration: 1.2, ease: "elastic.out" });

    const index: number = Array.from(letters).indexOf(item);

    if ((index % 3) - 2 === 0)
        gsap.timeline().to(item, {
            color: "#bbdb9b",
            webkitTextStroke: "0.5px #bbdb9b",
            duration: 0.2,
        });
    if ((index % 3) - 1 === 0)
        gsap.timeline().to(item, {
            color: "#f4e4ba",
            webkitTextStroke: "0.5px #f4e4ba",
            duration: 0.2,
        });
    if (index % 3 === 0)
        gsap.timeline().to(item, {
            color: "#ffe3e0",
            webkitTextStroke: "0.5px #ffe3e0",
            duration: 0.2,
        });
}

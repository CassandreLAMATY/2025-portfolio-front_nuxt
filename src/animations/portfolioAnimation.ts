import { gsap } from "gsap";

import { animatePortfolioLetters } from "~/animations/animatePortfolioLetters";

export function portfolioAnimation(): void {
    const title: HTMLElement | null = document.querySelector(".welcome-title");
    if (!title) return;

    const letters: NodeListOf<HTMLElement> = title.querySelectorAll(
        ".welcome-title--letter"
    );
    let isAnimating: boolean = false;
    let colorRemovalTimeline: gsap.core.Timeline | null = null;

    letters.forEach((letter) => {
        letter.addEventListener("mouseenter", () => {
            if (isAnimating) return;
            isAnimating = true;

            const index: number = Array.from(letters).indexOf(letter);
            const before: HTMLElement[] = Array.from(letters)
                .slice(0, index)
                .reverse();
            const after: HTMLElement[] = Array.from(letters).slice(index + 1);

            animatePortfolioLetters(letters, letters[index]);

            setTimeout(() => {
                before.forEach((letter, i) => {
                    setTimeout(() => {
                        animatePortfolioLetters(letters, letter);
                    }, 100 * i);
                });
                after.forEach((letter, i) => {
                    setTimeout(() => {
                        animatePortfolioLetters(letters, letter);
                    }, 100 * i);
                });
            }, 100);

            setTimeout(() => {
                isAnimating = false;
            }, 1000);

            if (colorRemovalTimeline) {
                colorRemovalTimeline.kill();
            }

            colorRemovalTimeline = gsap.timeline();
            colorRemovalTimeline
                .add(() => {
                    if (isAnimating) return;
                })
                .to(
                    letters,
                    {
                        color: "transparent",
                        webkitTextStroke: "0.5px #f9f9f9",
                        stagger: 1,
                        duration: 0.5,
                        onStart: () => {
                            if (isAnimating) colorRemovalTimeline?.kill();
                        },
                    },
                    "+=10"
                );
        });
    });
}

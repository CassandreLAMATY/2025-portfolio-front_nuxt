export function portfolioLetters(): void {
    const title: HTMLElement | null = document.querySelector(".welcome-title");
    if (!title) return;

    const letters: string[] = title.textContent!.split("");
    title.innerHTML = letters
        .map(
            (letter) =>
                `<span class="welcome-title welcome-title--letter">${letter}</span>`
        )
        .join("");
}

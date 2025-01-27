function calculateMePadding(): number {
    if (window.innerWidth >= 768) {
        return 0;
    }

    return 32;
}

export function meHeightCalc(padding: number = calculateMePadding()): void {
    const meContainer: HTMLElement | null =
        document.querySelector(".me-container");
    const me: HTMLElement | null = document.querySelector(".me");

    if (!meContainer || !me) {
        return;
    }

    const contentHeight: number = me.clientHeight;
    const offset: number = parseFloat(
        window
            .getComputedStyle(me)
            .transform.match(/matrix\(([^)]+)\)/)?.[1]
            .split(", ")[5] || "0"
    );

    meContainer.style.height = `${contentHeight + offset + padding}px`;
}

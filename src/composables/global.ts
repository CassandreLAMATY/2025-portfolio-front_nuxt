import { computed, ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref<number | null>(null);

if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;

    window.addEventListener("resize", () => {
        windowWidth.value = window.innerWidth;
    });
}

export const isMobile = computed(
    () => windowWidth.value !== null && windowWidth.value <= 768
);
export const isTablet = computed(
    () => windowWidth.value !== null && windowWidth.value <= 1024
);
export const isLaptop = computed(
    () => windowWidth.value !== null && windowWidth.value <= 1280
);
export const isDesktop = computed(
    () => windowWidth.value !== null && windowWidth.value <= 1536
);
export const isWideScreen = computed(
    () => windowWidth.value !== null && windowWidth.value <= 2560
);

import { ref } from "vue";

export const isActive = ref(false);

export function toggleMenu() {
    isActive.value = !isActive.value;
}

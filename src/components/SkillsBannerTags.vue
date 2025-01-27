<script setup lang="ts">
defineProps({
    isAriaHidden: Boolean
});
</script>

<template>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Brainstorm</span>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Design</span>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Development</span>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Optimization</span>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Deployment</span>
    <span class="skills-banner--item" :aria-hidden="isAriaHidden">Maintenance</span>
</template>

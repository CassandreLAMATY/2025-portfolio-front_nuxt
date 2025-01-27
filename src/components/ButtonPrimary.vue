<script setup lang="ts">
defineProps<{
    title: string;
    icon: string[];
    classes: string;
    type: "button" | "reset" | "submit";
}>();
</script>

<template>
    <button :class="`btn btn-primary ${classes}`" :type="type">
        <div class="btn-shadow"></div>
        <h3 class="btn-content">
            <font-awesome-icon :icon="[...icon]" class="btn-icon" /><span
                class="btn-title"
                >{{ title }}</span
            >
        </h3>
    </button>
</template>

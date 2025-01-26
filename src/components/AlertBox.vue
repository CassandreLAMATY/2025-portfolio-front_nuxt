<script setup lang="ts">
defineProps<{
    title: string;
    content: string | null;
    icon: string[];
    type: "info" | "success" | "warning" | "danger";
    index: number;
}>();

import { inject } from "vue";
const closeAlert = inject<Function>("closeAlert");
</script>

<template>
    <div :class="'alert-box ' + type">
        <font-awesome-icon :icon="icon" class="alert-icon" />
        <div class="alert-content">
            <h2 class="alert-title">{{ title }}</h2>
            <span v-if="content" class="alert-content">{{ content }}</span>
        </div>
        <button aria-label="close" type="button" v-on:click="closeAlert(index)">
            <font-awesome-icon :icon="['far', 'xmark']" class="alert-close" />
        </button>
    </div>
</template>

<style>
@import url("~/assets/stylesheets/css/alert.css");
</style>

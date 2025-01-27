<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "#app";

import { isActive, toggleMenu } from "~/composables/navbar";

const route = useRoute();
const activeRoute = ref(route.path);

watch(route, () => {
    activeRoute.value = route.path;
});
</script>

<template>
    <nav :class="`nav-container ${isActive ? 'active' : ''}`">
        <div class="nav-content--container">
            <NuxtLink
                v-if="activeRoute !== '/'"
                class="nav-short--link"
                to="/portfolio"
            >
                <button class="nav-short">
                    <span>{{ "home" }}</span>
                    <font-awesome-icon :icon="['fas', 'turn-left']" />
                </button>
            </NuxtLink>

            <menu class="nav-content">
                <NuxtLink class="nav-content--link" to="/artworks">
                    <font-awesome-icon :icon="['fas', 'paintbrush']" />
                    <span>Art.</span>
                </NuxtLink>
                <NuxtLink class="nav-content--link" to="/development">
                    <font-awesome-icon :icon="['fas', 'code']" />
                    <span>Dev.</span>
                </NuxtLink>
            </menu>
        </div>

        <div class="nav-toggle--container">
            <button
                @click="toggleMenu()"
                type="button"
                aria-label="Toggle navigation bar"
                class="nav-toggle"
            >
                <font-awesome-icon
                    class="nav-toggle--compass"
                    :icon="['far', 'compass']"
                />
                <font-awesome-icon
                    class="nav-toggle--open"
                    :icon="['fas', 'caret-down']"
                />
            </button>
        </div>
    </nav>
</template>

<style>
@import "@/assets/stylesheets/css/navbar.css";
</style>

<script setup lang="ts">
import { nextTick, onMounted } from "vue";
import { type Tag } from "@/types/Tag";

const props = defineProps<{
    title: string;
    tags: Tag[];
    index: number;
}>();

const apiUrl = useRuntimeConfig().public.STRAPI_URL;

onMounted(async () => {
    const section = document.querySelector(".skills") as HTMLElement | null;
    const box = document.querySelector(
        `#box${props.index}`
    ) as HTMLElement | null;
    const boxTags = document.querySelectorAll(
        `#box${props.index} > .skill-box--tag`
    ) as NodeListOf<HTMLElement> | null;

    if (section && box && boxTags) {
        await nextTick(() => {
            spawnTags(box, boxTags);
        });
    }
});
</script>

<template>
    <div class="skill-box--container">
        <div class="skill-box--content">
            <h3 class="skill-box--title">{{ title }}</h3>
            <div class="skill-box" :id="'box' + index">
                <div
                    v-for="t of tags"
                    :key="t.text"
                    :class="`skill-box--tag ${t.color} ${
                        !t.text ? 'no-text' : ''
                    }`"
                >
                    <img
                        class="tag-icon"
                        v-if="t.icon && t.icon.url"
                        :src="apiUrl + t.icon.url"
                        :alt="t.icon.alternativeText ?? 'logo'"
                    />
                    <span v-if="t.text" class="tag-text">{{ t.text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

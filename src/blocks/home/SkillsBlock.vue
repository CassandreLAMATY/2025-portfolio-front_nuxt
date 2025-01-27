<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

getSkillTags();

const _section = ref<HTMLElement | null>(null);
const _boxes = ref<NodeListOf<HTMLElement> | null>(null);
const _tags = ref<NodeListOf<HTMLElement> | null>(null);

watch(
    () => tags.value,
    async () => {
        await nextTick();

        _section.value = document.querySelector(
            ".skills"
        ) as HTMLElement | null;

        if (_section.value) {
            _boxes.value = _section.value.querySelectorAll(".skill-box");
            _tags.value = _section.value.querySelectorAll(".skill-box--tag");

            initMatter(_section.value, _boxes.value);
            watchResize(_section.value, _boxes.value, _tags.value);
        }
    }
);
</script>

<template>
    <section v-if="tags && tags.length > 0" class="skills">
        <div class="skills-container">
            <div class="skills-title--container">
                <h2 class="skills-title">
                    Skills !&nbsp;<span class="skills-title--span"
                        >(<span>punch</span> the tags !)</span
                    >
                </h2>
                <ButtonPrimary
                    v-if="_section && _boxes && _tags"
                    v-on:click="resetSkillsSection(_section, _boxes, _tags)"
                    title="Reset Tags"
                    :icon="['fas', 'rotate-right']"
                    classes="btn_tertiary"
                    type="button"
                />
            </div>

            <div class="skills-banner">
                <div class="skills-banner--container">
                    <SkillsBannerTags :isAriaHidden="false" />
                    <SkillsBannerTags :isAriaHidden="true" />
                    <SkillsBannerTags v-if="!isTablet" :isAriaHidden="true" />
                    <SkillsBannerTags v-if="!isTablet" :isAriaHidden="true" />
                </div>
            </div>
            <div class="skills-boxes--container">
                <SkillBox
                    v-for="(c, index) of tags"
                    :key="c.category"
                    :title="c.category"
                    :tags="c.tags"
                    :index="index"
                />
            </div>
        </div>
    </section>
</template>

<style>
@import "@/assets/stylesheets/css/skills.css";
</style>

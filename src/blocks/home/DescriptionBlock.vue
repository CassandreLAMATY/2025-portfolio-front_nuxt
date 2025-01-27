<script setup lang="ts">
import CV from "@/assets/documents/CV_LAMATY-Cassandre_FULLSTACKDEV.pdf";
</script>

<template>
    <section class="desc">
        <LogoSVG class="desc-logo" />
        <div class="desc-grid">
            <div class="desc-content">
                <p class="desc-text">
                    I’m a 21-year-old Full-Stack developer with a passion for
                    everything creativity-related.<br />
                    I’ve always liked drawing, taking pictures, writing
                    stories... So now my goal is to keep everything as much as I
                    can in my everyday life and never stop creating things !
                </p>

                <div class="desc-btn--container">
                    <div class="desc-btn_left">
                        <a
                            class="btn-link"
                            href="https://www.linkedin.com/in/cassandre-lamaty/"
                            target="_blank"
                        >
                            <ButtonPrimary
                                title="LinkedIn"
                                :icon="['fab', 'fa-linkedin']"
                                classes="btn_primary btn_dutchWhite"
                                type="button"
                            />
                        </a>
                        <a
                            class="btn-link"
                            href="https://www.behance.net/lamatycassandre"
                            target="_blank"
                        >
                            <ButtonPrimary
                                title="Behance"
                                :icon="['fab', 'fa-square-behance']"
                                classes="btn_primary btn_mistyRose"
                                type="button"
                            />
                        </a>
                    </div>
                    <a class="btn-link desc-cv" :href="CV" target="_blank">
                        <ButtonPrimary
                            title="C.V"
                            :icon="['far', 'folder-user']"
                            classes="btn_secondary"
                            type="button"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import "@/assets/stylesheets/css/description.css";
</style>

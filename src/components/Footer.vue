<script setup lang="ts">
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const version = config.public.NUXT_APP_VERSION || "0.0";
const lastUpdate = config.public.NUXT_APP_LAST_UPDATE || "2003.06.04 - 00:00am";
</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-about--container">
                <div class="footer-about">
                    <span class="about">
                        Designed in
                        <a href="https://www.figma.com/" target="_blank"
                            >Figma</a
                        >
                        and coded in
                        <a href="https://code.visualstudio.com/" target="_blank"
                            >Visual Studio Code</a
                        >.<br />Built with
                        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                        and
                        <a href="https://expressjs.com/" target="_blank"
                            >Express.js</a
                        >.
                    </span>
                    <div class="footer-media--container">
                        <a
                            href="https://www.behance.net/lamatycassandre"
                            target="_blank"
                            class="footer-media"
                        >
                            <button type="button" class="footer-media--btn">
                                <font-awesome-icon
                                    class="footer-media--icon"
                                    :icon="['fab', 'square-behance']"
                                />
                                Behance
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/lamatycassandre/"
                            target="_blank"
                            class="footer-media"
                        >
                            <button type="button" class="footer-media--btn">
                                <font-awesome-icon
                                    class="footer-media--icon"
                                    :icon="['fab', 'linkedin']"
                                />
                                Linkedin
                            </button>
                        </a>
                    </div>
                </div>
                <div class="footer-nav">
                    <ul>
                        <NuxtLink to="/portfolio" class="footer-nav--link">
                            <li>Portfolio</li>
                        </NuxtLink>
                    </ul>
                </div>
            </div>
            <div class="footer-credits--container">
                <div class="footer-credits--content">
                    <span class="footer-credits"
                        >Made with ❤️ by Cassandre Lamaty</span
                    >
                    <hr class="footer-credits--hr" />
                    <span class="footer-credits--version">
                        <span class="version">v{{ version }}</span> -
                        <span class="date">{{ lastUpdate }}</span>
                    </span>
                </div>
                <span class="footer-rights"
                    >&copy; 2024 - Cassandre Lamaty. All Rights Reserved.</span
                >
            </div>
        </div>
    </footer>
</template>

<style>
@import url("~/assets/stylesheets/css/footer.css");
</style>

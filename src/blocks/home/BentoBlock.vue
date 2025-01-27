<script setup lang="ts">
import { onMounted } from "vue";

import { portfolioAnimation } from "~/animations/portfolioAnimation";

onMounted(() => {
    portfolioLetters();

    portfolioAnimation();
});
</script>

<template>
    <section class="bento-container">
        <div>
            <div class="welcome">
                <h3 class="welcome-overline">Welcome to my</h3>
                <div class="welcome-title--container">
                    <h2 class="welcome-title">Portfolio</h2>
                    <font-awesome-icon
                        :icon="['fas', 'sparkle']"
                        id="spark01"
                    />
                    <font-awesome-icon
                        :icon="['fas', 'sparkle']"
                        id="spark02"
                    />
                    <font-awesome-icon
                        :icon="['fas', 'sparkle']"
                        id="spark03"
                    />
                </div>
                <div class="welcome-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="bento">
                <div class="bento-circle"></div>
                <h2 class="bento-heading">
                    What would you like to see first ?
                </h2>
                <div class="bento-grid">
                    <routerLink to="/artworks" id="artworks">
                        <div class="bento-card">
                            <div class="bento-card--bg"></div>

                            <div class="bento-title--container">
                                <h2>Artworks</h2>
                                <div class="bento-subtitles--container">
                                    <h3>Illustration</h3>
                                    <h3>Charadesign</h3>
                                    <h3>Pixel art</h3>
                                </div>
                            </div>
                        </div>
                    </routerLink>
                    <div class="bento-card disabled" id="audiovisual">
                        <div class="bento-title--container">
                            <div class="bento-subtitles--container">
                                <h3>Video</h3>
                                <h3>Photography</h3>
                            </div>
                            <h2>Audiovisual</h2>
                        </div>
                    </div>
                    <div class="bento-card disabled" id="design">
                        <div class="bento-card--bg"></div>
                        <div class="bento-title--container">
                            <h2>Graphic<br />Design</h2>
                            <div class="bento-subtitles--container">
                                <h3>UI / UX</h3>
                            </div>
                        </div>
                    </div>
                    <routerLink to="/development" id="dev">
                        <div class="bento-card">
                            <div class="bento-card--bg">
                                <p>
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO Moo MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO Moo MoO MoO MoO MoO MoO MoO MoO
                                    Moo Moo MoO MoO MoO Moo OOO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO Moo MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO Moo MOo MOo MOo MOo MOo MOo MOo
                                    MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo
                                    MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo
                                    MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo MOo
                                    MOo Moo MOo MOo MOo MOo MOo MOo MOo MOo Moo
                                    MoO MoO MoO Moo MOo MOo MOo MOo MOo MOo Moo
                                    MOo MOo MOo MOo MOo MOo MOo MOo Moo OOO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO MoO
                                    MoO MoO MoO Mo
                                </p>
                            </div>
                            <div class="bento-title--container">
                                <h2>Development</h2>
                            </div>
                        </div>
                    </routerLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import "@/assets/stylesheets/css/bento.css";
</style>

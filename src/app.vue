<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import { Alert } from "~/entities/Alert";
import { useAlerts } from "~/composables/useAlerts";
const { alerts, watchAlerts, addAlert, closeAlert } = useAlerts();

provide("closeAlert", closeAlert);

onMounted(async () => {
    watchAlerts();

    addAlert(
        new Alert(
            "THIS WEBSITE IS A WIP",
            "info",
            "Some features will be added soon. Stay tuned!"
        )
    );
});
</script>

<template>
    <NavBar />

    <NuxtPage />

    <div v-if="alerts.length > 0" class="alert-container">
        <AlertBox
            v-for="(a, index) in alerts"
            :key="index"
            :title="a.title"
            :content="a.content"
            :icon="a.icon"
            :type="a.type"
            :index="index"
        />
    </div>

    <Footer />
</template>

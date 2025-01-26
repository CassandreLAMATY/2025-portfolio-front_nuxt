import { defineNuxtPlugin } from "#app";
import { useAlerts } from "~/composables/useAlerts";

export default defineNuxtPlugin((nuxtApp) => {
    const { addAlert, closeAlert } = useAlerts();

    nuxtApp.provide("addAlert", addAlert);
    nuxtApp.provide("closeAlert", closeAlert);
});

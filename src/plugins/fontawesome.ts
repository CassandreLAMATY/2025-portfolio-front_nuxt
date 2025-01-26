import { defineNuxtPlugin } from "#app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";

library.add(fab, far, fas);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});

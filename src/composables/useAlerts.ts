import { ref, reactive, watch, nextTick, type Ref } from "vue";
import { Alert } from "~/entities/Alert";
import {
    alertShowAnimation,
    alertHideAnimation,
} from "~/animations/alertAnimations";

export const alerts: Alert[] = reactive([]);
export const isActiveAlerts: Ref<boolean> = ref(false);

export function useAlerts() {
    const addAlert = (alert: Alert) => {
        alerts.push(alert);
    };

    const closeAlert = (index: number) => {
        const alertElements = document.querySelectorAll(
            ".alert-box"
        ) as NodeListOf<HTMLElement>;
        const alertElement = alertElements[index];
        if (!alertElement) return;

        alertHideAnimation(alertElement);

        setTimeout(() => {
            if (index > -1) {
                alerts[index].isActive = false;
                if (alerts.filter((alert) => alert.isActive).length === 0) {
                    isActiveAlerts.value = false;
                }
            }
        }, 200);
    };

    const watchAlerts = () => {
        watch(
            () => [...alerts],
            (newAlerts, oldAlerts) => {
                if (newAlerts.length > oldAlerts.length) {
                    isActiveAlerts.value = true;

                    const alertInstance = newAlerts[newAlerts.length - 1];

                    if (alertInstance) {
                        nextTick(() => {
                            const alertElements = document.querySelectorAll(
                                ".alert-box"
                            ) as NodeListOf<HTMLElement>;
                            const alertElement =
                                alertElements[alerts.length - 1];

                            if (!alertElement) return;

                            alertShowAnimation(alertElement);

                            let timeoutId: ReturnType<typeof setTimeout>;
                            const startTimeout = () => {
                                timeoutId = setTimeout(() => {
                                    alertHideAnimation(alertElement);

                                    setTimeout(() => {
                                        const index =
                                            alerts.indexOf(alertInstance);
                                        if (index > -1) {
                                            alerts[index].isActive = false;
                                            if (
                                                alerts.filter(
                                                    (alert) => alert.isActive
                                                ).length === 0
                                            ) {
                                                isActiveAlerts.value = false;
                                            }
                                        }
                                    }, 200);
                                }, alertInstance.timeout);
                            };

                            const clearTimeoutOnHover = () => {
                                if (timeoutId) clearTimeout(timeoutId);
                            };

                            alertElement.addEventListener(
                                "mouseenter",
                                clearTimeoutOnHover
                            );
                            alertElement.addEventListener(
                                "mouseleave",
                                startTimeout
                            );

                            startTimeout();
                        });
                    }
                }
            }
        );
    };

    return { alerts, isActiveAlerts, addAlert, closeAlert, watchAlerts };
}

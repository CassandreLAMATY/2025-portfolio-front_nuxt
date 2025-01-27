export const useAsyncApi = () => {
    const config = useRuntimeConfig();

    const get = <T>(url: string, params: Record<string, any> = {}) => {
        const queryParams = new URLSearchParams(params).toString();
        return useAsyncData<T>(() =>
            $fetch(`${url}${queryParams ? `?${queryParams}` : ""}`, {
                baseURL: config.public.STRAPI_API_URL,
                headers: {
                    Authorization: `Bearer ${config.public.STRAPI_API_TOKEN}`,
                },
            })
        );
    };

    const post = <T>(url: string, data: any = {}) => {
        return useAsyncData<T>(() =>
            $fetch(url, {
                method: "POST",
                baseURL: config.public.STRAPI_API_URL,
                headers: {
                    Authorization: `Bearer ${config.public.STRAPI_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: data,
            })
        );
    };

    const patch = <T>(url: string, data: any = {}) => {
        return useAsyncData<T>(() =>
            $fetch(url, {
                method: "PATCH",
                baseURL: config.public.STRAPI_API_URL,
                headers: {
                    Authorization: `Bearer ${config.public.STRAPI_API_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: data,
            })
        );
    };

    const remove = <T>(url: string) => {
        return useAsyncData<T>(() =>
            $fetch(url, {
                method: "DELETE",
                baseURL: config.public.STRAPI_API_URL,
                headers: {
                    Authorization: `Bearer ${config.public.STRAPI_API_TOKEN}`,
                },
            })
        );
    };

    return { get, post, patch, delete: remove };
};

export type StrapiImage = {
    url?: string;
    alternativeText?: string;
    caption?: string;
    formats?: {
        thumbnail?: {
            url?: string;
        };
        small?: {
            url?: string;
        };
        medium?: {
            url?: string;
        };
    };
};

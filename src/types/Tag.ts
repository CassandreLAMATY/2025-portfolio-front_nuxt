export type Tag = {
    category: string;
    icon?: tagIcon;
    text: string;
    color?: string;
};

export type tagIcon = {
    url: string;
    alternativeText?: string;
};

export type TagsByCategory = {
    category: string;
    tags: Tag[];
};

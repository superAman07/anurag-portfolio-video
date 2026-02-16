export interface Project {
    id: string;
    title: string;
    category: "explainer" | "promo" | "demo" | "tutorial" | string;
    thumbnail: string;
    heroVideo?: string;
    description?: string;
    tags?: string[];
    year?: number;
    link?: string;
}

export interface NavItem {
    label: string;
    href: string;
    active?: boolean;
}

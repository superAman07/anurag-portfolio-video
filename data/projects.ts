import { Project } from '../types';

const generateProjects = (): Project[] => {
    const categories = ["SaaS Explainer", "Promo Video", "App Tutorial", "Brand Story", "Product Demo"];

    return Array.from({ length: 15 }).map((_, i) => ({
        id: `proj-${i}`,
        title: [
            "Fintech Dashboard Overview",
            "HealthCare App Intro",
            "E-commerce Growth Strategy",
            "Cybersecurity Awareness",
            "AI Platform Demo",
            "Logistics Management Tool",
            "EdTech Learning Path",
            "Social Media Campaign",
            "Blockchain Wallet Intro",
            "HR Management System",
            "Real Estate Virtual Tour",
            "Fitness Tracker Promo",
            "Cloud Storage Solutions",
            "Remote Team Collaboration",
            "Sustainable Energy Initiative"
        ][i] || `Project ${i + 1}`,
        category: categories[i % categories.length],
        thumbnail: `https://picsum.photos/seed/${i + 45}/800/600`, // Using specific seeds for consistency
        description: "This project highlights our ability to simplify complex topics into engaging visual narratives. We focused on clear messaging, smooth transitions, and on-brand illustrations to drive user conversion.",
        tags: ["Animation", "Motion Graphics", "2D", "UI/UX"],
        year: 2023 + (i % 2),
        link: "#"
    }));
};

export const projects: Project[] = generateProjects();

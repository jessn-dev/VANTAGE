import { Project } from "@/lib/data";

export default function VideoSchema({ projects }: { projects: Project[] }) {
    // Map our projects to Google's "VideoObject" Schema
    const schemaData = projects.map((project) => ({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: project.title,
        description: `A ${project.category} film by VANTAGE Studios.`,
        thumbnailUrl: [project.thumbnail],
        uploadDate: new Date().toISOString(), // In a real app, use the actual project date
        contentUrl: project.hlsUrl,
        embedUrl: project.hlsUrl,
        interactionStatistic: {
            "@type": "InteractionCounter",
            interactionType: { "@type": "WatchAction" },
            userInteractionCount: 500 // You can hook this up to real analytics later
        }
    }));

    // Render it as a script tag
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
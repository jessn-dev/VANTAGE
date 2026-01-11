// 1. We define the Interface here so other components can import it
export interface Project {
    id: string;
    title: string;
    category: string;
    hlsUrl: string;
    thumbnail: string;
    aspectRatio: '16:9' | '9:16';
}

// 2. The Hero Video (MP4 is fine here for a simple background loop)
export const HERO_VIDEO = "https://assets.mixkit.co/videos/preview/mixkit-wedding-video-of-a-couple-in-the-forest-41154-large.mp4";

// 3. The Projects Array (Mixed 16:9 and 9:16)
export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "The Highland Union",
        category: "Wedding",
        // Standard Mux Test Stream (16:9)
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Placeholder image from Unsplash
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        aspectRatio: "16:9",
    },
    {
        id: "2",
        title: "Urban Fashion Editorial",
        category: "Vertical Reel",
        // Reusing the stream for testing (CSS will crop it to vertical)
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Vertical placeholder image
        thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    }
];

// 4. The Rates Data
export const RATES = [
    {
        name: "Essential",
        price: "$1,500",
        description: "Perfect for short-form storytelling and social highlights.",
        features: ["4 Hours Coverage", "60-Second Highlight Reel", "Digital Delivery", "1 Round of Revisions"],
        recommended: false,
    },
    {
        name: "Signature",
        price: "$3,200",
        description: "Our most popular package for full cinematic wedding coverage.",
        features: ["8 Hours Coverage", "5-Minute Cinematic Film", "Social Media Teaser", "Drone Footage Included"],
        recommended: true,
    },
    {
        name: "The Archive",
        price: "$5,500",
        description: "The complete legacy package for high-production value.",
        features: ["Full Day Coverage", "15-Minute Documentary Film", "Raw Footage Drive", "2nd Cinematographer"],
        recommended: false,
    },
];
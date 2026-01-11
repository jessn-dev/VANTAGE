// 1. Interface Definition
export interface Project {
    id: string;
    title: string;
    category: string;
    hlsUrl: string;
    thumbnail: string;
    aspectRatio: '16:9' | '9:16';
}

// 2. Hero Background Video
export const HERO_VIDEO = "/hero.mp4";

// ✅ NEW: Mobile Fallback Image (Dark, Cinematic Coastline)
export const HERO_IMAGE = "/hero-mobile.jpg";

// 3. The 12-Item Symmetrical Grid
export const PROJECTS: Project[] = [
    // --- ROW 1 (Wide + Wide) ---
    {
        id: "1",
        title: "The Highland Union",
        category: "Wedding",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // ✅ FIXED: New, reliable link (Wedding couple walking away)
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop",
        aspectRatio: "16:9",
    },
    {
        id: "2",
        title: "Neon Nights: Automotive",
        category: "Commercial",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Neon Car
        thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
        aspectRatio: "16:9",
    },

    // --- ROW 2 (Tall + Tall + Tall + Tall) ---
    {
        id: "3",
        title: "Urban Motion",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Fashion Model Street
        thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "4",
        title: "Vogue BTS",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Backstage Fashion
        thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "5",
        title: "Noir Architecture",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Dark Building
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "6",
        title: "Espresso Abstract",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Coffee Pour
        thumbnail: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },

    // --- ROW 3 (Wide + Wide) ---
    {
        id: "7",
        title: "The Chef's Table",
        category: "Commercial",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Chef Plating
        thumbnail: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2000&auto=format&fit=crop",
        aspectRatio: "16:9",
    },
    {
        id: "8",
        title: "Arctic Expedition",
        category: "Commercial",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Snowy Landscape
        thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop",
        aspectRatio: "16:9",
    },

    // --- ROW 4 (Tall + Tall + Tall + Tall) ---
    {
        id: "9",
        title: "Tokyo Drift",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: City Street Night
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "10",
        title: "Summer Solstice",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Beach Sunset Vertical
        thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "11",
        title: "Studio Session",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Music Studio
        thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    },
    {
        id: "12",
        title: "Editorial Portrait",
        category: "Vertical / Social",
        hlsUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        // Reliable: Woman in Shadow
        thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
        aspectRatio: "9:16",
    }
];

// 4. Investment Rates
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
        recommended: false,
    },
    {
        name: "The Archive",
        price: "$5,500",
        description: "The complete legacy package for high-production value.",
        features: ["Full Day Coverage", "15-Minute Documentary Film", "Raw Footage Drive", "2nd Cinematographer"],
        recommended: false,
    },
];
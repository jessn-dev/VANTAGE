import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    style: ['normal', 'italic']
});

// ✅ SENIOR DEV SEO CONFIG
export const metadata: Metadata = {
    metadataBase: new URL('https://vantage-portfolio.vercel.app'), // Replace with actual domain later
    title: {
        default: "VANTAGE | Cinematic Wedding & Commercial Videography",
        template: "%s | VANTAGE"
    },
    description: "Premium cinematography for weddings, brands, and digital storytelling. Based in Aurora, IL, serving clients worldwide.",
    keywords: ["Wedding Videographer", "Cinematographer", "Aurora IL", "Vertical Video Production", "High-end Wedding Films"],
    openGraph: {
        title: "VANTAGE | The Cinematic Perspective",
        description: "Capturing the unseen through high-end cinematography.",
        url: 'https://vantage-portfolio.vercel.app',
        siteName: 'VANTAGE Studios',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
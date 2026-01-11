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

export const metadata: Metadata = {
    title: "VANTAGE | Cinematic Portfolio",
    description: "Capturing the unseen through high-end cinematography.",
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
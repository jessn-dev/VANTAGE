"use client";
import Link from 'next/link';
// import { motion } from 'framer-motion'; // Keep if you are using animations

export default function Navbar() {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:top-6 md:bottom-auto">
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 px-6 py-3 rounded-full flex justify-between items-center shadow-2xl">

                {/* Logo links back to Home */}
                <Link href="/" className="font-serif text-xl tracking-tighter text-amber-200">
                    VANTAGE
                </Link>

                <div className="flex gap-6 text-sm font-medium text-zinc-400">
                    <Link href="/#work" className="hover:text-zinc-200 transition-colors">Work</Link>

                    {/* ✅ NEW: Link to the About Page */}
                    <Link href="/about" className="hover:text-zinc-200 transition-colors">About</Link>

                    <Link href="/#rates" className="hover:text-zinc-200 transition-colors">Rates</Link>
                    <Link href="#contact" className="hover:text-zinc-200 transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:top-6 md:bottom-auto">
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 px-6 py-3 rounded-full flex justify-between items-center shadow-2xl">
                <Link href="/" className="font-serif text-xl tracking-tighter text-vantage-champagne">VANTAGE</Link>
                <div className="flex gap-6 text-sm font-medium text-zinc-400">
                    <Link href="#work" className="hover:text-vantage-silver transition-colors">Work</Link>
                    <Link href="#rates" className="hover:text-vantage-silver transition-colors">Rates</Link>
                    <Link href="#contact" className="hover:text-vantage-silver transition-colors">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
"use client";
import { motion } from 'framer-motion';
import { HERO_VIDEO } from '@/lib/data';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none grayscale-[30%]"
            >
                <source src={HERO_VIDEO} type="video/mp4" />
            </video>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/40 via-zinc-950/20 to-zinc-950" />

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-vantage-champagne uppercase tracking-[0.3em] text-xs mb-4 block"
                >
                    Cinematography & Stills
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-serif text-zinc-100 mb-6"
                >
                    Capturing the <br /> <span className="italic">Unseen</span>
                </motion.h1>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-vantage-silver text-zinc-950 px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all"
                >
                    View Showreel
                </motion.button>
            </div>
        </section>
    );
}
"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion'; // ✅ Import useInView
import { HERO_VIDEO, HERO_IMAGE } from '@/lib/data';

export default function Hero() {
    const containerRef = useRef(null); // Ref for the whole section
    const videoRef = useRef<HTMLVideoElement>(null);

    // ✅ Monitors if the Hero section is currently visible on screen
    const isInView = useInView(containerRef, { amount: 0.1 });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isInView) {
            // If we scroll back up, force play
            video.play().catch((e) => console.log("Auto-resume blocked:", e));
        } else {
            // If we scroll down, pause to save performance
            video.pause();
        }
    }, [isInView]);

    return (
        <section
            ref={containerRef} // ✅ Attach ref here so we know when this section is visible
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950"
        >

            {/* --- MEDIA LAYER --- */}
            <div className="absolute inset-0 z-0">

                {/* 1. MOBILE IMAGE */}
                <div className="block md:hidden w-full h-full relative">
                    <Image
                        src={HERO_IMAGE}
                        alt="Cinematic Background"
                        fill
                        priority
                        className="object-cover grayscale-[90%] opacity-80"
                    />
                </div>

                {/* 2. DESKTOP VIDEO */}
                <video
                    ref={videoRef}
                    key={HERO_VIDEO}
                    className="hidden md:block w-auto min-w-full min-h-full max-w-none object-cover grayscale-[90%] opacity-70"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={HERO_VIDEO} type="video/mp4" />
                </video>
            </div>

            {/* --- OVERLAY LAYER 1: Gradient Darkener --- */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/50 via-zinc-950/30 to-zinc-950" />

            {/* --- OVERLAY LAYER 2: FILM GRAIN --- */}
            <div
                className="absolute inset-0 z-10 pointer-events-none opacity-25 mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* --- CONTENT LAYER --- */}
            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-vantage-champagne text-xs md:text-sm uppercase tracking-[0.5em] mb-6 drop-shadow-lg">
                        Cinematography
                    </h2>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white tracking-tighter mix-blend-overlay opacity-90 drop-shadow-2xl">
                        VANTAGE
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-8"
                >
                    <p className="text-zinc-300 text-xs uppercase tracking-widest">
                        Capturing the Unspoken
                    </p>
                </motion.div>
            </div>

            {/* --- SCROLL HINT --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>

        </section>
    );
}
"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data';
// FIX: Use Named Import with curly braces
import { HlsPlayer } from './HlsPlayer';

export default function ProjectCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        // Play immediately on hover
        videoRef.current?.play().catch(() => {
            // Catch "User didn't interact with document" errors if necessary
        });
    };

    const handleMouseLeave = () => {
        // Pause and reset to start when mouse leaves
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative group overflow-hidden bg-zinc-900 rounded-xl cursor-pointer ${
                project.aspectRatio === '16:9' ? 'col-span-2' : 'col-span-1'
            }`}
        >
            {/* Container maintains aspect ratio to prevent layout shifts */}
            <div className={`w-full h-full ${
                project.aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16]'
            }`}>

                {/* The Streaming Component */}
                <HlsPlayer
                    ref={videoRef}
                    src={project.hlsUrl} // Ensure your data.ts has this field now!
                    poster={project.thumbnail}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 will-change-transform"
                />

            </div>

            {/* Info Overlay (Fades in on hover) */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10 pointer-events-none">
        <span className="text-vantage-champagne text-[10px] uppercase tracking-widest mb-2 font-medium">
          {project.category}
        </span>
                <h3 className="text-white font-serif text-2xl tracking-wide">
                    {project.title}
                </h3>
            </div>

            {/* Play Icon Hint (Optional - nice UX touch) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none mix-blend-difference">
                {/* Simple CSS Play Button or Icon */}
                <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
            </div>

        </motion.div>
    );
}
"use client";
import { useRef, useState } from 'react';
import Image from 'next/image'; // ✅ New Import
import { motion } from 'framer-motion';
import { Project } from '@/lib/data';
import { HlsPlayer } from './HlsPlayer';

export default function ProjectCard({ project }: { project: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovering, setIsHovering] = useState(false); // ✅ Track State

    const handleMouseEnter = () => {
        setIsHovering(true);
        videoRef.current?.play().catch(() => {});
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video
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
            {/* Container maintains aspect ratio */}
            <div className={`relative w-full h-full ${
                project.aspectRatio === '16:9' ? 'aspect-video' : 'aspect-[9/16]'
            }`}>

                {/* LAYER 1: The Video Player (Always there, but underneath) */}
                <HlsPlayer
                    ref={videoRef}
                    src={project.hlsUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* LAYER 2: The Manual Poster Image (Sits on top) */}
                {/* We fade this out (opacity-0) when hovering, revealing the video */}
                <div className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
                    isHovering ? 'opacity-0' : 'opacity-100'
                }`}>
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

            </div>

            {/* Info Overlay (Sits on top of everything) */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
        <span className="text-vantage-champagne text-[10px] uppercase tracking-widest mb-2 font-medium">
          {project.category}
        </span>
                <h3 className="text-white font-serif text-2xl tracking-wide">
                    {project.title}
                </h3>
            </div>

            {/* Play Icon Hint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none mix-blend-difference">
                <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                </div>
            </div>

        </motion.div>
    );
}
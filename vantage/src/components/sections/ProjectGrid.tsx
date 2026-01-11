"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { PROJECTS } from '@/lib/data';

// Define our filter categories
const FILTERS = [
    { id: 'all', label: 'All' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'vertical', label: 'Vertical / Social' }, // Updated label to match your data
];

export default function ProjectGrid() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter Logic: Matches the category string from data.ts
    const filteredProjects = PROJECTS.filter((project) => {
        if (activeFilter === 'all') return true;

        // Normalize strings to lowercase for easier matching
        const category = project.category.toLowerCase();
        const filter = activeFilter.toLowerCase();

        // Flexible matching (e.g. "Vertical Reel" matches "vertical")
        return category.includes(filter);
    });

    return (
        <section id="work" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">

                {/* Header Text */}
                <div>
                    <h2 className="text-vantage-silver text-xs uppercase tracking-[0.4em] mb-4">Selected Works</h2>
                    <p className="font-serif text-4xl md:text-5xl text-white">Visual Stories.</p>
                </div>

                {/* ✅ WORKING FILTER BUTTONS */}
                <div className="flex gap-6 text-xs uppercase tracking-widest text-zinc-500">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`pb-1 transition-all duration-300 relative ${
                                activeFilter === filter.id
                                    ? 'text-vantage-champagne' // Active Color
                                    : 'hover:text-vantage-silver' // Inactive Hover
                            }`}
                        >
                            {filter.label}

                            {/* Animated Underline for the active tab */}
                            {activeFilter === filter.id && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-vantage-champagne"
                                />
                            )}
                        </button>
                    ))}
                </div>

            </div>

            {/* Grid with Animation Support */}
            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty State (Just in case) */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-zinc-600 font-serif italic">
                    No projects found in this category yet.
                </div>
            )}
        </section>
    );
}
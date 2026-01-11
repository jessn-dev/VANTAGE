import ProjectCard from '../ui/ProjectCard';
import { PROJECTS } from '@/lib/data';

export default function ProjectGrid() {
    return (
        <section id="work" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-vantage-silver text-xs uppercase tracking-[0.4em] mb-4">Selected Works</h2>
                    <p className="font-serif text-4xl md:text-5xl text-white">Visual Stories.</p>
                </div>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-zinc-500">
                    <button className="text-vantage-champagne border-b border-vantage-champagne pb-1">All</button>
                    <button className="hover:text-vantage-silver transition-colors pb-1">Weddings</button>
                    <button className="hover:text-vantage-silver transition-colors pb-1">Commercial</button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
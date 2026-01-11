import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ProjectGrid from '@/components/sections/ProjectGrid';
import Investment from '@/components/sections/Investment';
import Contact from '@/components/sections/Contact';

export default function Home() {
    return (
        <main className="bg-zinc-950 min-h-screen">
            <Navbar />
            <Hero />
            <ProjectGrid />
            <Investment />
            <Contact />

            <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-center">
                <div className="font-serif italic text-2xl text-vantage-silver mb-4 tracking-tighter">VANTAGE</div>
                <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
                    Established 2026 • Based in Aurora, IL
                </p>
            </footer>
        </main>
    );
}
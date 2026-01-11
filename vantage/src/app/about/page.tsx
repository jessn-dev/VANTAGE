import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";

export default function AboutPage() {
    return (
        <main className="bg-zinc-950 min-h-screen selection:bg-vantage-champagne selection:text-zinc-950">
            <Navbar />

            <section className="pt-32 pb-16 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Portrait */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="https://images.unsplash.com/photo-1499417267106-45cebb7187c9?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=800&h=1200&fit=crop"
                            alt="Portrait of the Artist"
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right: The Brand Copy */}
                    <div className="space-y-8 mt-8 lg:mt-0">
                        <div>
                            {/* BRAND COLOR: Champagne for the kicker */}
                            <span className="text-vantage-champagne text-xs uppercase tracking-[0.4em] block mb-4">
                The Perspective
              </span>
                            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.9]">
                                Visualizing <br/>
                                {/* BRAND COLOR: Champagne for the emphasis word */}
                                <span className="italic text-vantage-champagne/80">The Unspoken.</span>
                            </h1>
                        </div>

                        {/* BRAND COLOR: Silver for the Lead Paragraph (High Readability) */}
                        <p className="text-xl md:text-2xl text-vantage-silver font-serif leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                        {/* BRAND COLOR: Silver (with slight opacity) for body text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-vantage-silver/80 text-sm leading-7 text-justify">
                            <p>
                                {/* BRAND COLOR: Champagne Drop Cap */}
                                <span className="text-4xl float-left mr-2 mt-[-6px] font-serif text-vantage-champagne">D</span>
                                uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>
                            <p>
                                Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                        </div>

                        {/* BRAND COLOR: Signature */}
                        <div className="pt-8 border-t border-zinc-800">
                            <p className="font-serif italic text-2xl text-vantage-champagne">J.B.N.</p>
                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Lead Cinematographer</p>
                        </div>

                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}
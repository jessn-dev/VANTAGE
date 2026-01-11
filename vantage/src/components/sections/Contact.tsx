"use client";
import { motion } from 'framer-motion';
import { Mail, Instagram, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left Side: Brand Message */}
                <div>
                    <h2 className="text-vantage-champagne text-xs uppercase tracking-[0.4em] mb-4">Get in Touch</h2>
                    <p className="font-serif text-5xl md:text-6xl text-white mb-8 leading-tight">
                        Let's create something <span className="italic text-zinc-500">timeless</span>.
                    </p>
                    <p className="text-zinc-400 max-w-md mb-12 leading-relaxed">
                        Whether it's a destination wedding or a brand launch, I’m here to tell your story with a unique perspective. Currently booking for late 2026.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:hello@vantagestudios.com" className="flex items-center gap-4 text-vantage-silver hover:text-vantage-champagne transition-colors group">
                            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors">
                                <Mail size={18} />
                            </div>
                            hello@vantagestudios.com
                        </a>
                        <div className="flex items-center gap-4 text-vantage-silver">
                            <div className="p-3 rounded-full bg-zinc-900">
                                <Instagram size={18} />
                            </div>
                            @vantage_studios
                        </div>
                    </div>
                </div>

                {/* Right Side: Lean Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/30 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-sm"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-vantage-champagne transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-vantage-champagne transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Inquiry Type</label>
                            <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-vantage-champagne appearance-none text-zinc-400">
                                <option>Wedding Film</option>
                                <option>Commercial/Brand</option>
                                <option>Vertical/Social Content</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                            <textarea rows={4} placeholder="Tell me about your vision..." className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-vantage-champagne transition-colors resize-none"></textarea>
                        </div>

                        <button className="w-full py-4 bg-white text-zinc-950 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-vantage-champagne transition-all transform active:scale-[0.98]">
                            Send Inquiry
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
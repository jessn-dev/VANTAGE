"use client";
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { RATES } from '@/lib/data';

export default function Investment() {
    return (
        <section id="rates" className="py-24 px-4 bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-vantage-champagne text-xs uppercase tracking-[0.4em] mb-4">Investment</h2>
                    <p className="font-serif text-4xl md:text-5xl text-white">Choose Your Story.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {RATES.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-8 rounded-2xl border ${
                                tier.recommended
                                    ? 'bg-zinc-900 border-vantage-champagne shadow-[0_0_30px_rgba(253,230,138,0.1)]'
                                    : 'bg-zinc-900/50 border-zinc-800'
                            }`}
                        >
                            {tier.recommended && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vantage-champagne text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
                            )}

                            <h3 className="text-vantage-silver text-xl font-serif mb-2">{tier.name}</h3>
                            <div className="text-3xl font-light text-white mb-4">{tier.price}</div>
                            <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{tier.description}</p>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <Check className="w-4 h-4 text-vantage-champagne" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                                tier.recommended
                                    ? 'bg-vantage-champagne text-zinc-950 hover:bg-white'
                                    : 'border border-zinc-700 text-white hover:bg-zinc-800'
                            }`}>
                                Inquire Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
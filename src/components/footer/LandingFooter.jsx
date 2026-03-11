'use client';

import Link from 'next/link';
import { Twitter, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

const LandingFooter = () => {
    return (
        <footer className="bg-[#020617] text-white py-24 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-pink-500/5 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                    
                    {/* Brand Section */}
                    <div className="col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="p-2 bg-pink-600 rounded-xl">
                                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">Finans.</span>
                        </Link>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-medium">
                            Join the elite 1% who manage their finances with absolute precision and AI-driven insights.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-pink-600 rounded-2xl transition-all border border-white/10 group">
                                    <Icon size={20} className="text-slate-400 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-pink-500">Product</h4>
                        <ul className="space-y-4">
                            {["Personal Tracker", "AI Insights", "Secure Link", "API Access"].map(item => (
                                <li key={item}><Link href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-pink-500">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Global Reach", "Security First", "Brand Kit"].map(item => (
                                <li key={item}><Link href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-pink-500">Legal</h4>
                        <ul className="space-y-4">
                            {["Privacy", "Terms", "Compliance", "Ethics"].map(item => (
                                <li key={item}><Link href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-pink-500">Status</h4>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-xs font-black tracking-widest text-slate-400">OPERATIONAL</span>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-pink-500 hover:text-white transition-colors">
                            Support Center <ArrowRight size={14} />
                        </button>
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        © 2025 FINANS OS. CRAFTED FOR THE BOLD.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">Security</a>
                        <a href="#" className="text-xs font-bold text-slate-500 hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingFooter;

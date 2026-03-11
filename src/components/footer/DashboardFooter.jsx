'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-[#020617] border-t border-pink-100 dark:border-slate-800 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    
                    {/* Brand Section */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <Link href="/dashboard" className="flex items-center gap-2 group w-fit">
                            <div className="p-2 bg-pink-600 rounded-xl transition-transform group-hover:rotate-12">
                                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                            </div>
                            <span className="text-xl font-black bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                                Finans
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-medium">
                            The world's most advanced AI-powered financial operating system. 
                            Manage your wealth with precision and absolute security.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-xl transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Platform</h4>
                        <ul className="space-y-2">
                            {["Dashboard", "Transactions", "Budget", "Support"].map(link => (
                                <li key={link}>
                                    <Link href={`/${link.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-pink-600 transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Legal</h4>
                        <ul className="space-y-2">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-sm font-bold text-slate-500 hover:text-pink-600 transition-colors flex items-center gap-1">
                                        {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Newsletter</h4>
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="Updates..." 
                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3 text-xs font-bold outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                            />
                            <button className="absolute right-1 top-1 bottom-1 px-3 bg-pink-600 text-white rounded-lg hover:bg-pink-500 transition-colors">
                                <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        © 2025 FINANS OS. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black text-slate-300">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        SYSTEMS OPERATIONAL
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

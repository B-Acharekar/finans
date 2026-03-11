"use client";

import React from 'react';
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import { MessageSquare, LifeBuoy, BookOpen, Search, ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";

export default function SupportPage() {
  const faqs = [
    { q: "How do I link a new bank account?", a: "Navigate to Dashboard and click 'Add Account'. Select your bank and follow the secure multi-step verification process." },
    { q: "Is my financial data secure?", a: "We use 256-bit AES encryption and world-class AI fraud detection to ensure your data is always protected." },
    { q: "Can I export my transaction history?", a: "Yes, go to the Transactions page and click the 'Export' button in the top right corner to download your data in CSV or PDF." },
    { q: "What are AI Insights?", a: "Our AI analyzes your spending patterns to provide personalized advice on saving and budgeting." }
  ];

  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-12 pb-20">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto py-12">
            <h1 className="text-5xl font-black text-gray-800 dark:text-white tracking-tight">How can we help?</h1>
            <p className="text-slate-500 text-lg">Search our knowledge base or contact our premium support team.</p>
            <div className="relative mt-8 group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-600 transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Describe your issue..." 
                    className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 rounded-[2rem] shadow-xl shadow-pink-600/5 outline-none focus:ring-2 focus:ring-pink-600 transition-all text-sm font-bold"
                />
            </div>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Live Chat", desc: "Average response: 2 mins", icon: MessageSquare, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20" },
                { title: "Knowledge Base", desc: "Self-help guides and docs", icon: BookOpen, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20" },
                { title: "Priority Support", desc: "For Platinum members", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" }
            ].map((channel, i) => (
                <button key={i} className="card-premium group hover:border-pink-500/50 transition-all text-left">
                    <div className={`p-4 w-fit rounded-2xl ${channel.bg} ${channel.color} mb-6 transition-transform group-hover:scale-110`}>
                        <channel.icon size={24} />
                    </div>
                    <h3 className="text-xl font-black mb-2">{channel.title}</h3>
                    <p className="text-sm text-slate-500 font-medium">{channel.desc}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-black text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        START NOW <ArrowRight size={14} />
                    </div>
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FAQ Section */}
            <div className="lg:col-span-2 space-y-8">
                <h2 className="text-2xl font-black flex items-center gap-3">
                    <LifeBuoy className="text-pink-600" /> Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="card-premium group cursor-pointer">
                            <h4 className="font-bold flex justify-between items-center group-hover:text-pink-600 transition-colors">
                                {faq.q}
                                <ChevronRight size={18} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                            </h4>
                            <p className="mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Contact Card */}
            <div className="space-y-8">
                <div className="card-premium bg-gradient-to-br from-indigo-600 to-indigo-900 text-white border-none relative overflow-hidden">
                    <h3 className="text-xl font-black mb-6">Contact Us Directly</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Email</p>
                                <p className="font-bold">support@finans.os</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-xl">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Phone</p>
                                <p className="font-bold">+1 (888) FIN-ANS</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 p-4 bg-white/10 rounded-2xl border border-white/10">
                        <p className="text-xs leading-relaxed text-indigo-100 italic">
                            "Our support team is available 24/7 for premium members. We're here to ensure your financial journey is flawless."
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { ChevronRight } from "lucide-react";

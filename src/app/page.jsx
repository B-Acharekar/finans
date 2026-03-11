"use client";

import React from 'react';
import Link from 'next/link';
import LandingHeader from "@/components/header/LandingHeader";
import Footer from "@/components/footer/LandingFooter";
import { 
  ArrowRight, Shield, Zap, Heart, Star, CheckCircle2, 
  Globe, Clock, TrendingUp, AlertCircle, FileText 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500/30">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-pink-400 text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-1000">
              <Star size={16} fill="currentColor" />
              <span>The Next Generation of Wealth Management</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Your Money <br />
              <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
                Accelerated.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Finans is the all-in-one financial operating system that helps you track goals, optimize spending, and grow your wealth with AI-driven insights.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link
                href="/signup"
                className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-pink-600/20"
              >
                Join Now <ArrowRight size={20} />
              </Link>
              <Link
                href="#features"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black text-lg flex items-center justify-center transition-all"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* Hero Image Mockup Area */}
          <div className="mt-20 relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700">
            <div className="absolute inset-0 bg-pink-600/10 blur-[100px] -z-10" />
            <div className="glass rounded-[2rem] border border-white/10 p-2 shadow-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
              <div className="w-full h-full bg-slate-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-4 w-full p-8 opacity-40">
                  <div className="h-40 bg-white/10 rounded-2xl" />
                  <div className="h-40 bg-white/10 rounded-2xl" />
                  <div className="h-40 bg-white/10 rounded-2xl" />
                  <div className="h-64 col-span-2 bg-gradient-to-br from-pink-500/20 to-transparent rounded-2xl" />
                  <div className="h-64 bg-white/5 rounded-2xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-4xl font-black text-white/20 uppercase tracking-[1rem]">Live Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4 shadow-pink-600/10 shadow-2xl p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center text-pink-500 mb-6 mx-auto md:mx-0">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold">Bank-Grade Security</h3>
              <p className="text-slate-400">Everything is encrypted with AES-256 GCM. Your data is yours alone.</p>
            </div>
            <div className="space-y-4 shadow-indigo-600/10 shadow-2xl p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-500 mb-6 mx-auto md:mx-0">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold">Global Compatibility</h3>
              <p className="text-slate-400">Sync with over 15,000+ banks across India and worldwide seamlessly.</p>
            </div>
            <div className="space-y-4 shadow-pink-600/10 shadow-2xl p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center text-pink-500 mb-6 mx-auto md:mx-0">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Real-time Syncing</h3>
              <p className="text-slate-400">Watch your balances update the second a transaction happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-pink-500 font-bold tracking-widest uppercase">Features</h2>
            <p className="text-4xl md:text-5xl font-black">Everything you need to master your money.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Smart Budgeting", desc: "Set limits that actually work with AI warnings.", icon: Zap },
              { title: "Investment Hub", desc: "Track all your stocks and MFs in one dashboard.", icon: TrendingUp },
              { title: "Fraud Detection", desc: "Instant alerts for suspicious activity on any account.", icon: AlertCircle },
              { title: "Tax Optimization", desc: "Automatically categorize expenses for easy filing.", icon: FileText }
            ].map((f, i) => {
               const Icon = f.icon === TrendingUp ? Globe : (f.icon === AlertCircle ? Shield : (f.icon === FileText ? CheckCircle2 : f.icon));
               return (
                <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-pink-500/50 transition-all hover:-translate-y-2">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-pink-500 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="bg-gradient-to-br from-pink-600 to-indigo-700 rounded-[3rem] p-12 overflow-hidden relative shadow-2xl">
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">Start your journey today.</h2>
              <p className="text-indigo-100 max-w-xl mx-auto text-lg">
                Join 500,000+ users who have already taken control of their financial future.
              </p>
              <Link
                href="/signup"
                className="inline-block px-10 py-5 bg-white text-pink-600 rounded-2xl font-black text-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Create Free Account
              </Link>
            </div>
            {/* Decors */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

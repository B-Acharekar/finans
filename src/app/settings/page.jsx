"use client";

import React, { useState } from 'react';
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import { Settings, Shield, Bell, Moon, Sun, Globe, User, Palette, Lock, SlidersHorizontal } from "lucide-react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);

  const sections = [
    { title: "General", icon: SlidersHorizontal, items: [
      { label: "Language", value: "English (US)", icon: Globe },
      { label: "Theme", value: darkMode ? "Dark Mode" : "Light Mode", icon: darkMode ? Moon : Sun, toggle: true },
      { label: "Currency", value: "INR (₹)", icon: Globe }
    ]},
    { title: "Security", icon: Shield, items: [
      { label: "Two-Factor Auth", value: "Enabled", icon: Lock },
      { label: "Login History", value: "Last login: Mumbai", icon: Clock }
    ]},
    { title: "Notifications", icon: Bell, items: [
      { label: "Transaction Alerts", value: "Push & Email", icon: Bell },
      { label: "Weekly Report", value: "Enabled", icon: FileText }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-4xl p-4 md:p-6 lg:p-8 space-y-8 pb-20">
        <div>
          <h1 className="text-3xl font-black text-gray-800 dark:text-white">Settings</h1>
          <p className="text-slate-500">Configure your financial experience</p>
        </div>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 px-2">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/20 text-pink-600 rounded-lg">
                  <section.icon size={18} />
                </div>
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">{section.title}</h2>
              </div>

              <div className="card-premium divide-y divide-slate-100 dark:divide-slate-800">
                {section.items.map((item, i) => {
                  const Icon = item.icon || User;
                  return (
                    <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-pink-500 transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 dark:text-white leading-tight">{item.label}</p>
                          <p className="text-xs text-slate-500">{item.value}</p>
                        </div>
                      </div>

                      {item.toggle ? (
                        <button 
                          onClick={() => setDarkMode(!darkMode)}
                          className={`w-12 h-6 rounded-full p-1 transition-all duration-300 ${darkMode ? "bg-pink-600" : "bg-slate-300 flex-row-reverse"}`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </button>
                      ) : (
                        <button className="text-xs font-black text-pink-600 hover:underline uppercase tracking-widest">Change</button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 flex justify-center">
            <button className="px-8 py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-2xl font-black transition-all border border-red-500/10">
                Delete Account
            </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Mock Clock & FileText for icons
function Clock(props) { return <SlidersHorizontal {...props} /> }
function FileText(props) { return <Globe {...props} /> }

"use client";

import React from 'react';
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import { User, Shield, CreditCard, Bell, ChevronRight, Camera, MapPin, Mail, Phone } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-5xl p-4 md:p-6 lg:p-8 space-y-8 pb-20">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-40 w-full bg-gradient-to-r from-pink-600 to-indigo-600 rounded-[2.5rem] shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
          </div>
          
          <div className="px-8 -mt-20 flex flex-col md:flex-row items-end gap-6 relative z-10">
            <div className="relative group">
              <div className="w-32 h-32 rounded-[2.5rem] bg-white p-1 shadow-2xl">
                <div className="w-full h-full rounded-[2.2rem] bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white text-4xl font-black">
                  JD
                </div>
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-pink-600 text-white rounded-xl shadow-lg hover:scale-110 transition-transform">
                <Camera size={18} />
              </button>
            </div>
            
            <div className="pb-4 space-y-1 text-center md:text-left flex-1">
              <h1 className="text-3xl font-black text-gray-800 dark:text-white">John Doe</h1>
              <p className="text-pink-600 font-bold flex items-center justify-center md:justify-start gap-2 text-sm uppercase tracking-widest">
                <Shield size={14} /> Premium Platinum Member
              </p>
            </div>

            <div className="pb-4 flex gap-3">
              <button className="px-6 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-white rounded-xl font-bold shadow-sm border border-pink-100 dark:border-slate-800">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Detailed Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="card-premium">
              <h3 className="text-lg font-black mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                  <p className="font-bold flex items-center gap-2"><Mail size={16} className="text-pink-500" /> john.doe@example.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</p>
                  <p className="font-bold flex items-center gap-2"><Phone size={16} className="text-pink-500" /> +91 98765 43210</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="font-bold flex items-center gap-2"><MapPin size={16} className="text-pink-500" /> Mumbai, India</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date of Birth</p>
                  <p className="font-bold">12th August, 1995</p>
                </div>
              </div>
            </div>

            <div className="card-premium">
              <h3 className="text-lg font-black mb-6">Linked Accounts</h3>
              <div className="space-y-4">
                {[
                  { bank: "Axis Bank", acc: "•••• 4242", type: "Savings", status: "Primary" },
                  { bank: "HDFC Bank", acc: "•••• 8899", type: "Current", status: "Active" }
                ].map((acc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-pink-600">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <p className="font-bold">{acc.bank}</p>
                        <p className="text-xs text-slate-500">{acc.acc} • {acc.type}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 rounded-lg text-xs font-bold">
                      {acc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats / Navigation */}
          <div className="space-y-8">
            <div className="card-premium bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-none shadow-indigo-600/20 shadow-2xl">
              <h3 className="text-lg font-black mb-4">Security Health</h3>
              <div className="flex items-center justify-center p-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="58" className="stroke-white/10 fill-none" strokeWidth="12" />
                    <circle cx="64" cy="64" r="58" className="stroke-white fill-none" strokeWidth="12" strokeDasharray="364" strokeDashoffset="36" strokeLinecap="round" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-3xl font-black">90%</span>
                    <span className="text-[10px] font-bold uppercase">Strong</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-indigo-100 text-center">Your account security is exceptional. Keep it up!</p>
            </div>

            <div className="card-premium space-y-2">
              {[
                { label: "Upgrade Plan", icon: Shield },
                { label: "Notification Settings", icon: Bell },
                { label: "Payment Methods", icon: CreditCard },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-3">
                    <item.icon size={18} className="text-pink-500" />
                    <span className="font-bold text-sm tracking-tight">{item.label}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

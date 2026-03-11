"use client";

import React from 'react';
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import PremiumChart from "@/components/dashboard/PremiumChart";
import { Target, PieChart, TrendingUp, ArrowUpRight, Wallet, Sparkles } from "lucide-react";

export default function BudgetPage() {
  const budgets = [
    { category: "Housing", spent: 32000, limit: 40000, color: "bg-pink-600" },
    { category: "Food & Drinks", spent: 12000, limit: 15000, color: "bg-indigo-600" },
    { category: "Entertainment", spent: 8500, limit: 5000, color: "bg-red-500" },
    { category: "Transport", spent: 4200, limit: 6000, color: "bg-emerald-500" }
  ];

  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-8 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black text-gray-800 dark:text-white">Budget Planner</h1>
            <p className="text-slate-500">Master your spending with AI-driven limits</p>
          </div>
          <button className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black flex items-center gap-2 shadow-xl shadow-pink-600/20">
            <Target size={20} /> Set New Goal
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card-premium">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black flex items-center gap-2">
                  <PieChart size={20} className="text-pink-500" /> Spending Overview
                </h3>
                <select className="bg-transparent font-bold text-sm text-slate-500 outline-none">
                  <option>Current Month</option>
                  <option>Last Month</option>
                </select>
              </div>
              <div className="h-[300px]">
                <PremiumChart />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { label: "Average Daily", val: "₹1,240", icon: TrendingUp, color: "text-emerald-500" },
                    { label: "Proj. Savings", val: "₹14,500", icon: Wallet, color: "text-indigo-500" }
                ].map((stat, i) => (
                    <div key={i} className="card-premium flex items-center gap-6">
                        <div className={`p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                            <h4 className="text-2xl font-black">{stat.val}</h4>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Budget Progress */}
          <div className="space-y-8">
            <div className="card-premium">
              <h3 className="text-lg font-black mb-6">Category Limits</h3>
              <div className="space-y-8">
                {budgets.map((b, i) => {
                  const percent = Math.min(100, (b.spent / b.limit) * 100);
                  const isOver = percent >= 100;
                  return (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="font-bold text-sm">{b.category}</p>
                          <p className="text-xs text-slate-500">₹{b.spent.toLocaleString()} of ₹{b.limit.toLocaleString()}</p>
                        </div>
                        <span className={`text-xs font-black ${isOver ? "text-red-500" : "text-slate-400"}`}>
                          {percent.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${isOver ? "bg-red-500" : b.color}`} 
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI Insight Card */}
            <div className="card-premium bg-gradient-to-br from-indigo-600 to-indigo-900 border-none text-white relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                    <Sparkles size={20} className="text-pink-400 animate-pulse" />
                    <h4 className="text-sm font-black uppercase tracking-widest">AI Financial Coach</h4>
                </div>
                <p className="text-sm leading-relaxed">
                  "You've reduced your Entertainment spending by <span className="text-pink-400 font-bold">12%</span> this month. Great job! You can now increase your SIP by <span className="text-pink-400 font-bold">₹2,000</span>."
                </p>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-pink-400 hover:text-white transition-colors">
                  Full Analysis <ArrowUpRight size={14} />
                </button>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

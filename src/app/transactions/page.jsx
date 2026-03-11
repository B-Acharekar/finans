"use client";

import React, { useState } from 'react';
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import TransactionList from "@/components/transactions/TransactionList";
import { Filter, Download, Plus, Search } from "lucide-react";

export default function TransactionsPage() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-800 dark:text-white">Transaction History</h1>
            <p className="text-gray-500">Track and manage your spending habits</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-pink-100 dark:border-slate-800 rounded-xl font-bold text-gray-600 dark:text-gray-300 hover:shadow-md transition-all">
              <Download size={18} /> Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-xl font-bold shadow-lg shadow-pink-200 hover:scale-105 transition-all">
              <Plus size={18} /> Add Transaction
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card-premium flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["All", "Income", "Expenses", "Subscriptions", "Transfers"].map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  filter === opt
                    ? "bg-pink-600 text-white shadow-md"
                    : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-pink-50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search history..."
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-pink-100 dark:border-slate-800 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>
        </div>

        {/* Transactions List Grouped by Date */}
        <div className="space-y-8">
          <section>
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Today</h2>
            <TransactionList />
          </section>

          <section>
            <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Yesterday</h2>
            <TransactionList />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";
import DashboardMetrics from "@/components/accounMetrics/AccountMetrics";
import LinkBtn from "@/components/accountLinkBtn/AccountLinkBtn";
import PremiumChart from "@/components/dashboard/PremiumChart";
import TransactionList from "@/components/transactions/TransactionList";
import { TrendingUp, Users, Activity, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    setIsClient(true);
    const storedAccountNumber = localStorage.getItem('accountNumber');
    if (storedAccountNumber) {
      setAccountNumber(storedAccountNumber);
    }
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300">
      <DashboardHeader />
      
      <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
        {/* Account Selection / Quick Stats */}
        <section className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {accountNumber ? (
            <DashboardMetrics accountNumber={accountNumber} />
          ) : (
            <div className="glass-pink p-8 rounded-3xl text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">No Account Linked</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Link your bank account to see your real-time financial insights.</p>
              <LinkBtn />
            </div>
          )}
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Visuals (Left/Top) */}
          <div className="md:col-span-8 space-y-6">
            {/* Revenue & Growth Chart */}
            <div className="card-premium">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">Revenue & Expenses</h3>
                  <p className="text-sm text-gray-500">Monthly overview of your cash flow</p>
                </div>
                <div className="flex items-center gap-2 bg-pink-50 dark:bg-pink-900/30 px-3 py-1 rounded-full">
                  <TrendingUp className="text-pink-600" size={16} />
                  <span className="text-xs font-bold text-pink-600">+12.5%</span>
                </div>
              </div>
              <PremiumChart />
            </div>

            {/* Recent Transactions List */}
            <div className="card-premium">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Recent Transactions</h3>
                <button className="text-sm font-semibold text-pink-600 hover:underline flex items-center gap-1">
                  View All <ArrowUpRight size={14} />
                </button>
              </div>
              <TransactionList />
            </div>
          </div>

          {/* Side Panels (Right) */}
          <div className="md:col-span-4 space-y-6">
            {/* Quick Metrics Card */}
            <div className="card-premium h-full">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Insights</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Active Contacts</p>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">124</h4>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-2xl">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Saving Rate</p>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">32%</h4>
                  </div>
                </div>

                {/* Progress Bar Mockup */}
                <div className="mt-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monthly Budget</span>
                    <span className="text-sm font-bold text-pink-600">75%</span>
                  </div>
                  <div className="w-full h-2 bg-pink-100 dark:bg-pink-900/20 rounded-full overflow-hidden">
                    <div className="h-full bg-pink-600 rounded-full w-3/4 shadow-[0_0_8px_rgba(219,39,119,0.5)]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">You're ₹5,200 away from your limit.</p>
                </div>
              </div>
            </div>

            {/* Featured Promo Card */}
            <div className="bg-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Upgrade to Pro</h4>
                <p className="text-indigo-100 text-sm mb-4">Get AI-powered investment insights and zero commission trades.</p>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                  Learn More
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

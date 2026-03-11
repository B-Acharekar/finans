"use client";

import BankForm from "@/components/form/BankForm";
import DashboardHeader from "@/components/header/DashboardHeader";
import Footer from "@/components/footer/DashboardFooter";

export default function LinkAccountPage() {
  return (
    <div className="min-h-screen bg-[#fdf2f8] dark:bg-[#020617] transition-colors duration-300 flex flex-col">
      <DashboardHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-xl card-premium !p-10 relative overflow-hidden">
          <div className="relative z-10 text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Secure Link
            </h1>
            <p className="mt-2 text-slate-500 font-medium">
              Connect your bank to unlock AI financial insights.
            </p>
          </div>
          
          <BankForm />
          
          {/* Support Link */}
          <p className="mt-8 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
            Having trouble? <a href="#" className="text-pink-600 hover:underline">Contact Support</a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}


"use client";

import { useRouter } from "next/navigation";
import { Plus, ShieldCheck, CreditCard } from "lucide-react";

export default function LinkBtn() {
    const router = useRouter();

    const handleSubmit = () => {
        router.push(`/account-link`);
    }

    return (
        <div className="relative group overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-2 border-dashed border-pink-200 dark:border-pink-900/30 rounded-[2rem] p-10 text-center transition-all hover:border-pink-500/50 hover:bg-pink-50/10">
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-3xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <Plus size={40} strokeWidth={3} />
                </div>
                
                <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">No accounts linked</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                    Connect your bank account to start tracking your wealth with AI-powered insights.
                </p>
                
                <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-pink-600/20 active:scale-95 transition-all"
                >
                    Link Account Now
                </button>

                <div className="mt-8 flex items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-pink-500" /> AES-256 Encrypted
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard size={14} className="text-pink-500" /> 15,000+ Banks
                    </div>
                </div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
        </div>
    );
}


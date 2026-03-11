"use client";

import { signup } from "@/lib/auth";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, Chrome, Github, CheckCircle2 } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    try {
      await signup(email, password, name);
      router.push("/login?message=Account created! Please verify your email.");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#020617]">
      {/* Left: Visual Side (Same as Login for consistency) */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-indigo-600 to-pink-700 items-center justify-center p-12 order-last">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80')] bg-cover opacity-20 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-lg space-y-8">
            <h2 className="text-6xl font-black text-white tracking-tighter leading-none">
                Build your <br/>
                <span className="text-pink-300">Financial</span> Legacy.
            </h2>
            
            <div className="space-y-4">
                {[
                    "Zero commission trading",
                    "AI-powered spending insights",
                    "World-class security encryption",
                    "Global multi-currency support"
                ].map(text => (
                    <div key={text} className="flex items-center gap-3 text-pink-100 font-bold">
                        <CheckCircle2 size={20} className="text-pink-400" />
                        {text}
                    </div>
                ))}
            </div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/20 rounded-full blur-[100px]" />
      </div>

      {/* Right: Form Side */}
      <div className="flex items-center justify-center p-8 bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Create Account</h2>
            <p className="text-slate-400 font-medium">Join 500,000+ users mastering their money.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all">
                <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all">
                <Github size={18} /> Github
            </button>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full bg-slate-900 border border-white/5 rounded-2xl px-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Confirm</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="w-full bg-slate-900 border border-white/5 rounded-2xl px-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all"
                    />
                </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-pink-600/20 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"} <ArrowRight size={20} />
            </button>
          </form>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-bold text-center">
                {error}
            </div>
          )}

          <p className="text-center text-slate-400 font-medium">
            Already have an account? 
            <Link href="/login" className="text-pink-500 font-black ml-2 hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}


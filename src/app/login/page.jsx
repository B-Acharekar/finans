"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import Link from "next/link";
import { Mail, Lock, ArrowRight, Github, Chrome, Sparkles } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#020617]">
      {/* Left: Visual Side */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-pink-600 to-indigo-700 items-center justify-center p-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&q=80')] bg-cover opacity-20 mix-blend-overlay" />
        
        <div className="relative z-10 max-w-lg space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-white rounded-2xl shadow-xl">
                    <div className="w-6 h-6 border-4 border-pink-600 rounded-sm rotate-45" />
                </div>
                <span className="text-3xl font-black text-white">Finans.</span>
            </div>
            
            <h1 className="text-6xl font-black text-white tracking-tighter leading-none">
                Experience the <br/>
                <span className="text-pink-300">Future</span> of Finance.
            </h1>
            
            <p className="text-xl text-pink-100 font-medium leading-relaxed">
                Join thousands of individuals managing their wealth with AI-driven insights and absolute security.
            </p>
            
            <div className="flex items-center gap-4 pt-10">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-pink-500 bg-pink-400" />
                    ))}
                </div>
                <p className="text-sm font-bold text-pink-200 uppercase tracking-widest">
                    +500K Users Trusted
                </p>
            </div>
        </div>

        {/* Decorative Blurs */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/30 rounded-full blur-[100px]" />
      </div>

      {/* Right: Form Side */}
      <div className="flex items-center justify-center p-8 bg-slate-950">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Welcome Back</h2>
            <p className="text-slate-400 font-medium">Please enter your details to sign in.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all">
                <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-sm hover:bg-white/10 transition-all">
                <Github size={18} /> Github
            </button>
          </div>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Or with email</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <Link href="#" className="text-xs font-bold text-pink-500 hover:text-pink-400">Forgot password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-pink-500 transition-colors" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-900 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white focus:ring-2 focus:ring-pink-500/50 outline-none transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-pink-600/20 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Sign In"} <ArrowRight size={20} />
            </button>
          </form>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-bold text-center animate-shake">
                {error}
            </div>
          )}

          <p className="text-center text-slate-400 font-medium">
            Don't have an account? 
            <Link href="/signup" className="text-pink-500 font-black ml-2 hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}


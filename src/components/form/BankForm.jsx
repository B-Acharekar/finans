"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Landmark, ArrowRight, ShieldCheck, Mail, KeyRound, CheckCircle2, ChevronLeft } from "lucide-react";

export default function BankForm() {
  const [isClient, setIsClient] = useState(false);
  const [step, setStep] = useState(1);
  const [bankId, setBankId] = useState("");
  const [accountType, setAccountType] = useState("savings");
  const [accountNumber, setLocalAccountNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [error, setError] = useState("");

  const NEXT_PUBLIC_API_URL = "http://127.0.0.1:5000";
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleSendOtp = async () => {
    setError("");
    if (!email) {
      setError("Please enter your email to receive OTP.");
      return;
    }

    try {
      setSendingOtp(true);
      const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/accounts/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setOtpSent(true);
        setStep(3);
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("Error sending OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/accounts/link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bank_id: bankId,
          account_type: accountType,
          account_number: accountNumber,
          email: email,
          otp: otp,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('accountNumber', accountNumber);
        router.push(`/dashboard`);
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to link account');
    }
  };

  const banks = [
    { _id: "axis", name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg" },
    { _id: "kotak", name: "Kotak Mahindra", logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg" },
    { _id: "bob", name: "Bank of Baroda", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/BankOfBarodaLogo.svg" },
    { _id: "hdfc", name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/HDFC_Bank_Logo.svg" },
    { _id: "icici", name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent",
      borderColor: state.isFocused ? "#db2777" : "rgba(236, 72, 153, 0.2)",
      boxShadow: "none",
      borderRadius: "1rem",
      padding: "0.5rem",
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1e293b",
      borderRadius: "1rem",
      overflow: "hidden",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "rgba(219, 39, 119, 0.1)" : "transparent",
      color: "white",
      padding: "0.75rem",
      cursor: "pointer",
    }),
    singleValue: (base) => ({ ...base, color: "white" }),
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Progress Stepper */}
      <div className="flex items-center justify-center gap-4 mb-12">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step >= s ? "bg-pink-600 text-white shadow-lg shadow-pink-600/20" : "bg-slate-800 text-slate-500"
            }`}>
              {step > s ? <CheckCircle2 size={20} /> : s}
            </div>
            {s < 3 && <div className={`w-12 h-1 bg-slate-800 rounded-full ${step > s ? "bg-pink-600" : ""}`} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
          <div className="text-center">
            <Landmark className="mx-auto text-pink-500 mb-4" size={48} />
            <h3 className="text-xl font-bold">Select Your Bank</h3>
            <p className="text-slate-400 text-sm">Choose from our supported partners</p>
          </div>
          <Select
            options={banks.map(b => ({ value: b._id, label: b.name, logo: b.logo }))}
            styles={customStyles}
            onChange={(opt) => { setBankId(opt.value); setStep(2); }}
            formatOptionLabel={({ label, logo }) => (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center">
                  <img src={logo} alt={label} className="max-h-full" />
                </div>
                <span>{label}</span>
              </div>
            )}
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
          <button onClick={() => setStep(1)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <ChevronLeft size={16} /> Back
          </button>
          <div className="text-center">
            <ShieldCheck className="mx-auto text-pink-500 mb-4" size={48} />
            <h3 className="text-xl font-bold">Account Details</h3>
            <p className="text-slate-400 text-sm">We need this to securely identify your account</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Account Type</label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {["savings", "current"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setAccountType(t)}
                    className={`py-3 rounded-2xl font-bold capitalize transition-all ${
                      accountType === t ? "bg-pink-600 border-pink-500" : "bg-slate-900 border-slate-800 text-slate-500"
                    } border`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Account Number</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setLocalAccountNumber(e.target.value)}
                placeholder="Enter 12-16 digit number"
                className="w-full mt-2 bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative mt-2">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                />
              </div>
            </div>

            <button
              onClick={handleSendOtp}
              disabled={sendingOtp || !accountNumber || !email}
              className="w-full py-4 bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all mt-4"
            >
              {sendingOtp ? "Syncing..." : "Verify Identity"} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 text-center">
          <div className="w-20 h-20 bg-pink-600/20 rounded-3xl flex items-center justify-center text-pink-500 mx-auto mb-6">
            <KeyRound size={40} />
          </div>
          <h3 className="text-2xl font-black">Final Verification</h3>
          <p className="text-slate-400">We've sent a 6-digit code to <br/><span className="text-white font-bold">{email}</span></p>
          
          <div className="max-w-[280px] mx-auto space-y-6">
            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="0 0 0 0 0 0"
              className="w-full bg-slate-900 border-2 border-slate-800 focus:border-pink-500 rounded-2xl px-4 py-4 text-3xl font-black text-center tracking-[0.5rem] outline-none transition-all"
            />
            
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-pink-600/20 active:scale-95 transition-all"
            >
              Complete Link
            </button>
            <button onClick={() => setStep(2)} className="text-sm font-bold text-slate-500 hover:text-pink-500 transition-colors">
              I didn't receive a code
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-bold text-center">
          {error}
        </div>
      )}
    </div>
  );
}


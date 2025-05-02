"use client";


import React, { useEffect, useState } from 'react';  // Make sure useEffect is imported
import { useRouter } from "next/navigation";


import Select from "react-select";

export default function BankForm() {
  const [isClient, setIsClient] = useState(false);
  const [bankId, setBankId] = useState(""); // Set initial bankId to empty
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
    setIsClient(true); // Set to true once the component mounts on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering anything until after the client is mounted
  }

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
      } else {
        setError(data.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("Error sending OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    // setAccountNumber(setLocalAccountNumber); 
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/accounts/link`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
        console.log(data);
        console.log(accountNumber);
        localStorage.setItem('accountNumber', accountNumber);
        router.push(`/dashboard`);
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to link account');
    }
  };

  // Handle bank selection change
  const handleBankChange = (e) => {
    setBankId(e.target.value); // Update bankId state with the selected bank
  };

  const banks = [
    {
      _id: "axis",
      name: "Axis Bank",
      bank_code: "AXIS001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg",
    },
    {
      _id: "kotak",
      name: "Kotak Mahindra Bank",
      bank_code: "KOTAK001",
      logo_url: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg",
    },
    {
      _id: "bob",
      name: "Bank of Baroda",
      bank_code: "BOB001",
      logo_url: "https://upload.wikimedia.org/wikipedia/en/f/f2/BankOfBarodaLogo.svg",
    },
    {
      _id: "pnb",
      name: "Punjab National Bank",
      bank_code: "PNB001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Punjab_National_Bank_new_logo.svg",
    },
    {
      _id: "yesbank",
      name: "YES Bank",
      bank_code: "YES001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Yes_Bank_SVG_Logo.svg",
    },
    {
      _id: "indusind",
      name: "IndusInd Bank",
      bank_code: "INDUS001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/40/IndusInd_Bank_SVG_Logo.svg",
    },
    {
      _id: "canara",
      name: "Canara Bank",
      bank_code: "CANARA001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Canara_Bank_Logo.svg",
    },
  ];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#1f2937", // bg-gray-800
      borderColor: state.isFocused ? "#ec4899" : "#d1d5db", // pink-500 or gray-300
      boxShadow: state.isFocused ? "0 0 0 2px rgba(236, 72, 153, 0.3)" : "none",
      borderRadius: "0.5rem", // rounded-lg
      color: "#d1d5db", 
      fontSize: "0.875rem", // text-sm
      padding: "0.25rem 0.5rem", // px-2 py-1
    }),
    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "#d1d5db",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#fce7f3" : "#ffffff", // pink-100 hover
      color: "#111827",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem"
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#ffffff",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }),
  };
  const bankOptions = banks.map((bank) => ({
    value: bank._id,
    label: bank.name,
    logo: bank.logo_url
  }));
  const formatOptionLabel = ({ label, logo }) => (
    <div className="flex items-center gap-2">
      <img src={logo} alt={label} className="h-5 w-5 rounded-sm" />
      <span>{label}</span>
    </div>
  );



  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 dark:bg-black-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl dark:bg-gray-800 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">Link Bank Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Bank Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Select Bank</label>
            <Select
              options={bankOptions}
              onChange={(selectedOption) => setBankId(selectedOption.value)}
              styles={customStyles}
              formatOptionLabel={formatOptionLabel}
              className="text-white bg-gray-800 border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
            />

          </div>

          {/* Account Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Account Type</label>
            <select
              className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              onChange={(e) => setAccountType(e.target.value)}
              value={accountType}
              required
            >
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </div>

          {/* Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Account Number</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setLocalAccountNumber(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
            />
          </div>

          {/* OTP */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
            />
          </div>

          {/* Send OTP Button */}
          <div className="mt-2 flex items-center gap-4">
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={sendingOtp}
              className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
            >
              {sendingOtp ? "Sending OTP..." : "Send OTP"}
            </button>
            {otpSent && <span className="text-green-500 text-sm">OTP sent!</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!otpSent}
            className={`w-full px-4 py-3 text-sm font-semibold text-white rounded-lg transition-all ${otpSent ? "bg-pink-600 hover:bg-pink-500" : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Link Account
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

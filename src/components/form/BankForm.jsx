"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for programmatic navigation

export default function BankForm() {
  const [bankId, setBankId] = useState("");
  const [accountType, setAccountType] = useState("savings"); // Default account type
  const [accountNumber, setAccountNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const NEXT_PUBLIC_API_URL = "http://127.0.0.1:5000";
  const [banks, setBanks] = useState([
    {
      _id: "axis",
      name: "Axis Bank",
      bank_code: "AXIS001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg"
    },
    {
      _id: "kotak",
      name: "Kotak Mahindra Bank",
      bank_code: "KOTAK001",
      logo_url: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg"
    },
    {
      _id: "bob",
      name: "Bank of Baroda",
      bank_code: "BOB001",
      logo_url: "https://upload.wikimedia.org/wikipedia/en/f/f2/BankOfBarodaLogo.svg"
    },
    {
      _id: "pnb",
      name: "Punjab National Bank",
      bank_code: "PNB001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Punjab_National_Bank_logo.svg"
    },
    {
      _id: "yesbank",
      name: "YES Bank",
      bank_code: "YES001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Yes_Bank_SVG_Logo.svg"
    },
    {
      _id: "indusind",
      name: "IndusInd Bank",
      bank_code: "INDUS001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/40/IndusInd_Bank_SVG_Logo.svg"
    },
    {
      _id: "canara",
      name: "Canara Bank",
      bank_code: "CANARA001",
      logo_url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Canara_Bank_Logo.svg"
    }
  ]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

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
        router.push(`/account`);
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to link account');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 dark:bg-black-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl dark:bg-gray-800 p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">Link Bank Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Bank Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Select Bank</label>
            <select
              className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              onChange={(e) => setBankId(e.target.value)}
              value={bankId}
              required
            >
              <option value="">Select Bank</option>
              {banks.map((bank) => (
                <option key={bank._id} value={bank._id}>
                  <img src={bank.logo_url} alt={bank.name} className="inline-block h-6 mr-2" />
                  {bank.name}
                </option>
              ))}
            </select>
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
              onChange={(e) => setAccountNumber(e.target.value)}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            Link Account
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
}

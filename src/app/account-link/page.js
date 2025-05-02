// app/account/page.js
'use client';

import BankForm from "@/components/form/BankForm";

export default function LinkAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100 dark:bg-black-700 py-4 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl dark:bg-gray-800 p-8">
        <h1 className="text-3xl font-semibold text-center text-pink-600">Link Your Bank Account</h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">
          Please select your bank and fill in your account details to link your account.
        </p>
        <BankForm /> {/* This is where the form is rendered */}
      </div>
    </div>
  );
}

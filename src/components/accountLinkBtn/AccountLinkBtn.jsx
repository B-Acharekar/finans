"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for programmatic navigation


export default function LinkBtn() {
    const router = useRouter(); // This was missing

    const handleSubmit = () => {
        router.push(`/account-link`);
    }
    return (
<div id="account" className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:grid-cols-4">
  <div className="col-span-full flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-6 text-center">
    <p className="mb-4 text-lg font-medium text-gray-700">
      No account linked yet
    </p>
    <p className="mb-6 text-sm text-gray-500">
      Link your bank account to get started with Finans.
    </p>
    <button
      onClick={handleSubmit}
      className="rounded-lg bg-pink-600 px-4 py-2 text-white hover:bg-pink-700 transition-colors"
    >
      Link Account
    </button>
  </div>
</div>

    );
}

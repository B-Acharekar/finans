// app/account/page.js
'use client';

export default function AccountLinked() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-pink-500 mb-4">Account Linked Successfully!</h1>
      <p className="text-lg">Your account has been linked. You can now view transactions and details.</p>
      
      <a
        href="/dashboard"
        className="mt-6 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-lg"
      >
        Go to Dashboard
      </a>
    </div>
  );
}

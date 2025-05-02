import React, { useEffect, useState } from "react";

const AccountDetailsTable = ({ accountNumber }) => {
    const [accountData, setAccountData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const NEXT_PUBLIC_API_URL = "http://127.0.0.1:5000";

    useEffect(() => {
        if (!accountNumber) return;

        fetch(`${NEXT_PUBLIC_API_URL}/api/accounts/${accountNumber}`)
            .then((res) => {
                if (!res.ok) throw new Error("Account not found");
                return res.json();
            })
            .then((data) => {
                setAccountData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [accountNumber]);

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

    const matchedBank = accountData && banks.find(bank => bank._id === accountData.bank_id);

    function formatAccount(accountNumber) {
        if (!accountNumber || accountNumber.length < 4) return "xxx-xxx-xxxx";
        const last4 = accountNumber.slice(-4);
        return `xxx-xxx-${last4}`;
    }


    const formatBalance = (amount) => {
        return Number(amount).toLocaleString("en-IN", { style: "currency", currency: "INR" });
    };

    if (loading) return <p className="text-gray-600">Loading account details...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!accountData) return <p className="text-gray-500">No account data found.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bank Account Card */}
            <div className="col-span-1 md:col-span-2">
                <div className="overflow-x-auto shadow-xl rounded-2xl mb-4">
                    <div className=" backdrop-blur-xl border border-pink-800 shadow-2xl rounded-2xl overflow-hidden mb-6">
                        <div className="bg-pink-700 text-white text-center text-sm md:text-base font-semibold tracking-widest px-6 py-3 border-b border-pink-800">
                            Account Details
                        </div>
                        <div className="flex flex-col text-white divide-y divide-pink-800">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-3 hover:bg-grey-800/30 transition duration-200">
                                <div className="text-white/90 font-semibold">Account No.</div>
                                <div className="text-white font-mono mt-1 md:mt-0">
                                    {formatAccount(accountData.masked_account_number)}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-3 hover:bg-grey-800/30 transition duration-200">
                                <div className="text-white/90 font-semibold">Bank</div>
                                <div className="flex items-center gap-3 mt-1 md:mt-0">
                                    {matchedBank?.logo_url && (
                                        <img
                                            src={matchedBank.logo_url}
                                            alt={matchedBank.name}
                                            className="h-8 w-8 rounded-full border border-white shadow-md"
                                        />
                                    )}
                                    <span className="text-white font-medium">{matchedBank?.name}</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-3 hover:bg-grey-800/30 transition duration-200">
                                <div className="text-white/90 font-semibold">Balance</div>
                                <div
                                    className={`font-bold mt-1 md:mt-0 ${accountData.balance < 0 ? 'text-red-400' : 'text-green-400'}`}
                                >
                                    {formatBalance(accountData.balance)}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 py-3 hover:bg-grey-800/30 transition duration-200">
                                <div className="text-white/90 font-semibold">Linked At</div>
                                <div className="text-pink-300 font-mono mt-1 md:mt-0">
                                    {new Date(accountData.linked_at).toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Summary */}
            <div className="col-span-1 h-full">
                <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-6 dark:border-blue-800 dark:bg-white/[0.03] flex-grow">
                    <div className="mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-white text-gray-700 dark:bg-indigo-600 dark:text-white shadow-md">
                        <svg
                            className="fill-current"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7ZM4 7V8H20V7H4ZM4 10V17H20V10H4ZM6 12H8V14H6V12ZM10 12H12V14H10V12Z"
                                fill=""
                            />
                        </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-white">HDFC Debit Card</h4>
                    <div className="mt-4">
                        <p className="text-xl font-bold text-white">Balance: ₹XX,XXX</p>
                        <p className="text-sm text-white/90">Card Number: 4321 **** 1234</p>
                    </div>
                    <div className="mt-4 flex items-end justify-between">
                        <div>
                            <p className="text-sm text-white/90">Debit Cards Linked</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500">
                                +1
                            </span>
                            <span className="text-xs text-white/90">Since last month</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );



};

export default AccountDetailsTable;

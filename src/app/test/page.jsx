'use client';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const TransactionDashboard = () => {
  const [userId, setUserId] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [socket, setSocket] = useState(null);
  const url = 'http://127.0.0.1:5000';

  useEffect(() => {
    if (!userId) return;

    const socketConnection = io(url);
    socketConnection.emit('join', { user_id: userId });

    socketConnection.on('new_transaction', (data) => {
      console.log('New transaction:', data);
      setTransactions((prev) => [data, ...prev]);
    });

    setSocket(socketConnection);

    return () => {
      socketConnection.off('new_transaction');
      socketConnection.disconnect();
    };
  }, [userId]);

  const handleUserIdChange = (e) => setUserId(e.target.value);

  const handleUserIdSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert('Please enter a user ID');
    } else {
      await fetchTransactions(userId);
    }
  };

  const fetchTransactions = async (uid) => {
    try {
      const response = await fetch(`${url}/transaction/user/${uid}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finans - Transactions</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6">
        {/* User ID Input */}
        <form
          onSubmit={handleUserIdSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <input
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            className="w-full sm:w-96 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            placeholder="Enter User ID"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Transactions
          </button>
        </form>

        {/* Transactions */}
        {userId && (
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            {transactions.length > 0 ? (
              <ul className="space-y-4">
                {transactions.map((txn, index) => {
                  const isCredit = txn.type === 'credit';
                  return (
                    <li
                      key={index}
                      className="bg-white p-5 shadow rounded-xl flex justify-between items-center border hover:shadow-md transition"
                    >
                      <div className="flex items-center gap-3">
                        {isCredit ? (
                          <ArrowDownCircle className="text-green-500" size={32} />
                        ) : (
                          <ArrowUpCircle className="text-red-500" size={32} />
                        )}
                        <div>
                          <h4 className="text-lg font-medium capitalize">
                            {txn.type}
                          </h4>
                          <p className="text-gray-500 text-sm">{txn.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-lg font-bold ${
                            isCredit ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          ₹{txn.amount}
                        </p>
                        <p className="text-sm text-gray-400">
                          {new Date(txn.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No transactions found for this user.</p>
            )}
          </section>
        )}
      </main>
    </div>
  );
};

export default TransactionDashboard;

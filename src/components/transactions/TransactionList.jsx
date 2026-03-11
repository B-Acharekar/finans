"use client";

import React from 'react';
import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Coffee, Home, Zap } from 'lucide-react';

const mockTransactions = [
  { id: 1, name: 'Apple Store', category: 'Gadgets', amount: -1299.00, date: '2024-03-10', icon: ShoppingBag, color: 'bg-slate-100 text-slate-600' },
  { id: 2, name: 'Starbucks', category: 'Food & Drink', amount: -12.50, date: '2024-03-09', icon: Coffee, color: 'bg-emerald-100 text-emerald-600' },
  { id: 3, name: 'Rent Payment', category: 'Housing', amount: -2400.00, date: '2024-03-01', icon: Home, color: 'bg-blue-100 text-blue-600' },
  { id: 4, name: 'Freelance Payout', category: 'Salary', amount: 4500.00, date: '2024-02-28', icon: Zap, color: 'bg-pink-100 text-pink-600' },
];

const TransactionList = () => {
  return (
    <div className="space-y-4">
      {mockTransactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-pink-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${tx.color}`}>
              <tx.icon size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{tx.name}</h4>
              <p className="text-xs text-gray-500">{tx.category} • {tx.date}</p>
            </div>
          </div>
          <div className="text-right">
            <span className={`font-bold ${tx.amount < 0 ? 'text-gray-800' : 'text-pink-600'}`}>
              {tx.amount < 0 ? '-' : '+'}₹{Math.abs(tx.amount).toLocaleString()}
            </span>
            <div className="flex items-center justify-end mt-1">
              {tx.amount < 0 ? (
                <ArrowDownLeft size={12} className="text-gray-400" />
              ) : (
                <ArrowUpRight size={12} className="text-pink-500" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;

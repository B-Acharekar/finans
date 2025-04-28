'use client';

import { useState, useEffect } from 'react';

const AccountsPage = () => {
  const [accounts, setAccounts] = useState([]);
  const [filteredAccounts, setFilteredAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const bankData = [
    { id: 1, name: 'State Bank of India' },
    { id: 2, name: 'HDFC Bank' },
    { id: 3, name: 'ICICI Bank' },
    { id: 4, name: 'Axis Bank' },
    { id: 5, name: 'Punjab National Bank' },
    { id: 6, name: 'Bank of Baroda' },
    { id: 7, name: 'Kotak Mahindra Bank' },
    { id: 8, name: 'Yes Bank' }
  ];

  // Fetch data from MockAPI
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://680f5ec667c5abddd19504dd.mockapi.io/api/accounts');
      const data = await response.json();
      setAccounts(data);  // Store all data in 'accounts'
      setFilteredAccounts(data);  // Initially show all accounts
      setLoading(false);
    };
    fetchData();
  }, []);

  // Handle changes in the search input and filter accounts
  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);

    const filtered = accounts.filter(account =>
      account.name.toLowerCase().includes(value) ||  // Filter by name
      account.type.toLowerCase().includes(value)     // Filter by account type
    );

    setFilteredAccounts(filtered);  // Set the filtered accounts
  };

  // Handle bank filter
  const handleBankFilterChange = (e) => {
    const selectedBankId = e.target.value;
    setSelectedBank(selectedBankId);

    const filtered = accounts.filter(account => 
      account.bankId.toString().includes(selectedBankId) && 
      (account.name.toLowerCase().includes(filter.toLowerCase()) || 
       account.type.toLowerCase().includes(filter.toLowerCase()))
    );
    setFilteredAccounts(filtered);
  };

  // Get bank name by bankId
  const getBankName = (bankId) => {
    const bank = bankData.find(b => b.id === bankId);
    return bank ? bank.name : 'Unknown Bank';
  };

  // Loading state while fetching data
  if (loading) return <p>Loading...</p>;

  // If no filter is set and no bank is selected, show the form with the message
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold text-center mb-5">Accounts</h1>

      <div className="flex justify-between mb-4">
        {/* Search Bar */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search by name or account type"
            value={filter}
            onChange={handleFilterChange}  // Apply the filter on input change
            className="p-2 w-full border rounded-md"
          />
        </div>

        {/* Dropdown for Bank Filter */}
        <div className="w-1/4">
          <select 
            onChange={handleBankFilterChange} 
            value={selectedBank} 
            className="p-2 w-full border rounded-md"
          >
            <option value="">Select Bank</option>
            {bankData.map(bank => (
              <option key={bank.id} value={bank.id}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Display filtered accounts or a no data message */}
      {filteredAccounts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map(account => (
            <div key={account.id} className="p-4 border rounded-md shadow-md flex flex-col items-center">
              <img 
                src={account.avatar} 
                alt={account.name} 
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center">{account.name}</h3>
              <p className="text-lg">Balance: ₹{account.balance}</p>
              <p className="text-md">Type: {account.type}</p>
              <p className="text-sm text-gray-500">Bank: {getBankName(account.bankId)}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No accounts found matching your search.</p>
      )}
    </div>
  );
};

export default AccountsPage;

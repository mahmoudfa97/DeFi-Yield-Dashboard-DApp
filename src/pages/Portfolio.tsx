// src/pages/Portfolio.tsx
import React, { useState, useEffect } from 'react';
import { connectWallet, fetchPortfolioData } from '../api/walletApi';

const Portfolio = () => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>('');
  const [portfolio, setPortfolio] = useState<any[]>([]);

  const handleConnectWallet = async () => {
    const address = await connectWallet();
    setWalletAddress(address);
  };

  useEffect(() => {
    if (walletAddress) {
      const getPortfolioData = async () => {
        const data = await fetchPortfolioData(walletAddress);
        setPortfolio(data);
      };
      getPortfolioData();
    }
  }, [walletAddress]);

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {!walletAddress ? (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <h2 className="text-xl font-bold">Your Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolio.map((data) => (
              <div className="p-4 bg-white shadow-md rounded-md" key={data.id}>
                <h3 className="font-semibold">{data.name}</h3>
                <p>APY: {data.apy}%</p>
                <p>Staked: {data.staked}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

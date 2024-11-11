// src/api/walletApi.ts
import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    return address;
  } else {
    alert("Please install MetaMask!");
  }
};

export const fetchPortfolioData = async (walletAddress: string) => {
  // Fetch user portfolio data from the API or contract
  const response = await fetch(`https://api.defi.com/portfolio/${walletAddress}`);
  const data = await response.json();
  return data;
};

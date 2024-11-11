import { ethers } from 'ethers';

// Replace with your Infura URL or any other provider
const provider = new ethers.JsonRpcProvider('https://mainnet.infura.io/v3/78b745f1cdc24a7994daf4b49e7c93fe');

// The contract address and ABI
const contractAddress = '0x10586b9b7Ff0F842913a57539f8167CE143C3011';
const abi = [
  "function getYieldRate() view returns (uint256)",
  "function totalSupply() view returns (uint256)"
];

// Initialize contract
const contract = new ethers.Contract(contractAddress, abi, provider);

// Fetch yield rate
export const fetchYieldRate = async (): Promise<string | undefined> => {
  try {
    const yieldRate = await contract.getYieldRate();
    return ethers.formatUnits(yieldRate, 18);  
  } catch (error) {
    console.error('Error fetching yield rate:', error);
  }
};

// Fetch total supply
export const fetchTotalSupply = async (): Promise<string | undefined> => {
  try {
    const totalSupply = await contract.totalSupply();
    return ethers.formatUnits(totalSupply, 18); 
  } catch (error) {
    console.error('Error fetching total supply:', error);
  }
};

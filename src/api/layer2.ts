// src/api/layer2.ts
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://polygon-mainnet.infura.io/v3/78b745f1cdc24a7994daf4b49e7c93fe');

export const fetchLayer2Data = async () => {
  const blockNumber = await provider.getBlockNumber();
  return blockNumber;
};

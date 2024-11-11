// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { fetchYieldData } from '../api/defiApi'; // Mocked API integration

const Home = () => {
  const [yieldData, setYieldData] = useState<any[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState('Aave');
  
  useEffect(() => {
    const getYieldData = async () => {
      const data = await fetchYieldData(selectedPlatform);
      setYieldData(data);
    };
    getYieldData();
  }, [selectedPlatform]);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-2xl font-bold text-gray-800">Yield Farming Dashboard</h1>
      <div className="my-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          <option value="Aave">Aave</option>
          <option value="Compound">Compound</option>
          <option value="Uniswap">Uniswap</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {yieldData.map((data) => (
          <div className="p-4 bg-white shadow-md rounded-md" key={data.id}>
            <h3 className="font-semibold">{data.name}</h3>
            <p className="text-sm text-gray-500">APY: {data.apy}%</p>
            <p className="text-sm text-gray-500">Risk: {data.risk}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { fetchYieldRate, fetchTotalSupply } from '../services/defiService';

const DefiDashboard: React.FC = () => {
  const [yieldRate, setYieldRate] = useState<string | undefined>(undefined);
  const [totalSupply, setTotalSupply] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const fetchedYieldRate = await fetchYieldRate();
      const fetchedTotalSupply = await fetchTotalSupply();
      setYieldRate(fetchedYieldRate);
      setTotalSupply(fetchedTotalSupply);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>DeFi Yield Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Yield Rate</th>
            <th>Total Supply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{yieldRate ? `${yieldRate}%` : 'N/A'}</td>
            <td>{totalSupply ? totalSupply : 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DefiDashboard;

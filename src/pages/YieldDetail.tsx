// src/pages/YieldDetail.tsx
import React, { useEffect, useState } from 'react';
import { fetchYieldDetail } from '../api/defiApi';

const YieldDetail = ({ match }: any) => {
  const [yieldDetail, setYieldDetail] = useState<any>(null);
  
  useEffect(() => {
    const fetchDetails = async () => {
      // Fetch the details from the API
      const data = await fetchYieldDetail(match.params.id);
      setYieldDetail(data);
    };
    fetchDetails();
  }, [match.params.id]);

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      {yieldDetail ? (
        <div>
          <h2 className="text-3xl font-bold">{yieldDetail.name}</h2>
          <p>APY: {yieldDetail.apy}%</p>
          <p>Fees: {yieldDetail.fees}</p>
          <p>Risks: {yieldDetail.risks}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default YieldDetail;

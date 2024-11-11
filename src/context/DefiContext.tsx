// src/context/DefiContext.tsx
import React, { createContext, useContext, useState } from 'react';

const DefiContext = createContext<any>(null);

export const DefiProvider = ({ children }: any) => {
  const [yieldData, setYieldData] = useState<any[]>([]);
  
  return (
    <DefiContext.Provider value={{ yieldData, setYieldData }}>
      {children}
    </DefiContext.Provider>
  );
};

export const useDefiContext = () => useContext(DefiContext);

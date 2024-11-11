 // src/api/defiApi.ts
export const fetchYieldData = async (platform: string) => {
    // Example URL, replace with actual API
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.${platform}.com/v1/yield`);
    const data = await response.json();
    return data;
  };
  
  export const fetchYieldDetail = async (id: string) => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.defi.com/yield/${id}`);
    const data = await response.json();
    return data;
  };
  
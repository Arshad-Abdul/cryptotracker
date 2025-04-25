import axiosInstance from "./helpers/axiosinstance";

export async function fetchCoinData(page = 1, currency = 'usd') {
  const perPage = 10; // Number of coins per page
  try {
    const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);
        return response.data;
        
  } catch (error) {
    console.error("Error fetching coin data:", error);
    return null; // Rethrow the error to handle it in the calling function
  }
}
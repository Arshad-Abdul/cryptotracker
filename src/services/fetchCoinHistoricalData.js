import axiosInstance from "./helpers/axiosinstance";

export async function fetchCoinHistoricalData(coinid, interval, days = 7, currency='usd') {
    try {
        const response = await axiosInstance.get(
            `/coins/${coinid}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`

        );
        return response.data;
    } catch (error) {
        console.error("Error fetching coin historical data:", error);
        throw error;
    }

    


}
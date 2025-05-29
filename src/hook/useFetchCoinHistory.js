import { useQuery } from '@tanstack/react-query';
import currencystore from '../zstate/store';
import { useState } from 'react';
import { fetchCoinHistoricalData } from '../services/fetchCoinHistoricalData';




function useFetchCoinHistory(coinid) {
    

    const {currency} = currencystore();

    const [days, setDays] = useState(7);

    const [interval, setCoinInterval] = useState('daily');

    const { data:historicData, isLoading, isError} = useQuery({
        queryKey: ['coinhistoricaldata', coinid,interval, currency, days],
        queryFn:() => fetchCoinHistoricalData(coinid,interval, days, currency), 
        
        cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 5,
        
    }
    );
    return [historicData, isError, isLoading, currency, days, setDays, setCoinInterval];
}

export default useFetchCoinHistory;
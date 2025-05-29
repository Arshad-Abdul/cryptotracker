import { useQuery } from "@tanstack/react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import currencyStore from "../zstate/store";

function useFetchCoin(coinid){
     
      const {currency} = currencyStore();
      const { data:coin, isLoading, isError, error } = useQuery({
          queryKey: ['coin', coinid],
          queryFn: () => fetchCoinDetails(coinid),
          cacheTime: 1000 * 60 * 2,
          // retry:2,
          // retryDelay: 1000,
          staleTime: 1000 * 60 * 5,
        });

        return { coin, isLoading, isError, error, currency };
}
export default useFetchCoin;
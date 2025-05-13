import  { useState } from 'react'
import { fetchCoinData } from "../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import store from "../zstate/store";
import { useNavigate } from 'react-router-dom';
// import { CurrencyContext } from "../context/CurrencyContext";

function CoinTable() {
  const {currency} = store()

  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coins', page, currency],
    queryFn: () => fetchCoinData(page, currency),
    cacheTime: 1000 * 60 * 2,
    // retry:2,
    // retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
  });


  function handleCoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  if (isLoading) {
    return <div className="text-2xl text-black">Loading...</div>;
  }

  return (
    
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
        <div className="basis-[35%]">
          Coin
        </div>
        <div className="basis-[25%]">
          Price
        </div>
        <div className="basis-[20%]">
          24h Change
        </div>
        <div className="basis-[20%]">
          Market Cap
        </div>
      </div>
      <div className="flex flex-col w-full">

        {isLoading && <div className="text-2xl text-black">Loading...</div>}
          {data && data.map((coin)=>{
            return(
               <div  onClick={()=>handleCoinRedirect(coin.id)}  key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-3 basis-[35%]">
                      <div className="w-[5rem] h-[5rem]">
                        <img src={coin.image} alt=""  className="w-full h-full" loading="lazy"/>
                        
                      </div>

                      <div className="flex flex-col">
                        
                        <div className="text-3xl text-black">{coin.name}</div>
                        <div className="text-xl text-black">{coin.symbol}</div>
                      </div>

                    </div>
                    <div className="basis-[25%] text-l text-black">
                      {coin.high_24h}
                    </div>
                    <div className="basis-[20%] text-l text-black">
                      {coin.price_change_24h}
                    </div>
                    <div className="basis-[20%] text-l text-black">
                      {coin.market_cap}
                    </div>

               </div>
               
            )
          })}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button 
        disabled={page === 1}
        onClick={()=>setPage(page - 1)} 
        className="btn btn-primary btn-wide text-white text-2xl">Previous</button>
        <button 
        onClick={()=>setPage(page + 1)} 
        className="btn btn-primary btn-wide text-white text-2xl">Next</button>
      </div>
    </div>
  )
}

export default CoinTable;

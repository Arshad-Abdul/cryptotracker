
import { useEffect } from "react";
import parse from "html-react-parser";
import CoinInfoContainer from "../components/CoinInfo/CoinInfoContainer";
import useFetchCoin from "../hook/useFetchCoin";
import { useParams } from "react-router-dom";




function CoinDetailsPage() {
  
    const {coinid} = useParams();
    const { coin, isLoading, isError, error, currency } = useFetchCoin(coinid);
 

    useEffect(() => {
      document.title = "Coin Details";
      console.log(coin); 
    }
    , [coin]);


    if (isError) {
      return <div>Error: {error.message}</div>;
    }
    if (isLoading) {
      return <div className="text-2xl text-black">Downloadin Coin Data...</div>;
    }
    if (!coin) {
      return <div className="text-2xl text-black">No data found</div>;
    }
  
  

  return (
    <div className="flex flex-col md:flex-row">

      <div
        className="md:w-1/3 w-full flex flex-col items-center
        mt-6 md:mt-0 border-r-2 border-gray-500"
      
      
      >
        <img 
        src={coin?.image?.large} 
        alt={coin?.name} 
        className="h-52 mb-5"/>

        <h1
        className="text-4xl font-bold text-black mb-5"
        >{coin?.name}</h1>

        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.description?.en?.split(".")[0])}.


        </p>

        <div className="w-full flex flex-col md:flex-row md:justify-around">

          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-black mr-2">
              Rank
            </h2>
            <span className="ml-3 text-xl"
            >
              {coin?.market_cap_rank}
            </span>

          </div>
          <div className="flex items-center mb-4 md:mb-0">

          <h2 className="text-2xl font-bold text-yellow-400 mr-2">
              Current Price
            </h2>
            <span className="ml-3 text-xl"
            >
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>

      </div>

      <div className="w-full">
        <CoinInfoContainer coinid={coinid}/>

      </div>



    </div>
    
  );
}

export default CoinDetailsPage;

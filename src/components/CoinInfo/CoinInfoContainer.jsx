
import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from "../../hook/useFetchCoinHistory";
import Alert from "../Alert/Alert";

function CoinInfoContainer({coinid}){
    
    const{historicData, isError, isLoading, currency, days, setDays, setCoinInterval} =  useFetchCoinHistory(coinid)

    if(isLoading){
        return <div>Page is Loading</div>
    }
    if(isError){
        return <Alert message="Error Fetching Data" type="error" />
        
    }

    return (
       <>
         <CoinInfo 
         historicData={historicData} 
         setDays={setDays} 
         setCoinInterval={setCoinInterval} 
         days={days}
         currency={currency}/>
       </>
    );
}
export default CoinInfoContainer;
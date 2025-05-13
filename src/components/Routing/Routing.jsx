import { Routes, Route } from "react-router-dom";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import Home from "../../pages/Home";
import MainLayout from "../../pages/Layout";

function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/details/:coinid" element={<CoinDetailsPage/>} />
            </Route>            
        </Routes>

    )
}
export default Routing;
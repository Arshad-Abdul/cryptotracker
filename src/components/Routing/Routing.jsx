import { Routes, Route } from "react-router-dom";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense} from "react";
 import { Facebook} from "react-content-loader"
import CustomErrorBoundary from "../ErrorBoundary/CustomErrorBoundary";
//  import PageLoader from "../../PageLoader/PageLoader";

const Home = lazy(() => import("../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage"));

function Routing(){
    return(
        <CustomErrorBoundary>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={
                    <Suspense fallback={Facebook}>
                    <Home/>
                    </Suspense>
                    
                    } />
                <Route path="/details/:coinid" element={
                    <Suspense fallback={Facebook}>
                        <CoinDetailsPage/>
                    </Suspense>
                    
                    } />
            </Route>            
        </Routes>
        </CustomErrorBoundary>

    )
}
export default Routing;
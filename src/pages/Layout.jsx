import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout(){
return(
    <>
    <Navbar/>  
    {/* Share ui */}
    <Outlet/>
    {/* Actual page which will ne rendered along with the navbar */}
    </>
)
}
export default MainLayout;
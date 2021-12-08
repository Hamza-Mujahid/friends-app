import { Routes as AppRoutes, Route, } from "react-router-dom";
// import Signup from "../pages/Signup";
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Setting from "../pages/Setting";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const Routes = () => {
return(
    <AppRoutes>
        <Route path="./" element={<SignUp />} />
        <Route path="./login" element={<Login />} />
        <Route path="./home" element={<Home />} />
        <Route path="./home/settings" element={<Settings />} />
    </AppRoutes>

)
}

export default Routes;
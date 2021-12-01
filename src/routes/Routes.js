import { Routes as AppRouter, Route, } from "react-router-dom";
import Home from '../Pages/home/Home';
import Login from "../Pages/login/Login";
import SignUp from "../Pages/SignUp/SignUp";



const Routes = () => {
    return (
        <AppRouter>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
        </AppRouter>
    );
};

export default Routes;
import { Routes as MyRouter, Route } from "react-router-dom";
import SignUp from "../pages/signup page/SignUp";
import Home from "../pages/home page/Home";
import Login from "../pages/login page/Login";

const TheRouter = () => {
    return(
    <MyRouter>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
    </MyRouter>)
};

export default TheRouter;


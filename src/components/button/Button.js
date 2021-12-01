import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Button = () => {
    const navigate = useNavigate();
    const Go_Home = () => {
        navigate("../home")
    }
    return (
        <div>
            <button onClick={Go_Home}>
                SignIn
            </button>
        </div>
    )
}
export default Button;

import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ButtonLogin = () => {
    let navigate = useNavigate();
    let Go_Login = () => {
        navigate("../")
    }
    return (
        <div>
            <button onClick={Go_Login}>
                LogOut
            </button>
        </div>
    )
}

export default ButtonLogin;

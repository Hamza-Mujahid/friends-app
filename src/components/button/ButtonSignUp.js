import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonSignUp = () => {
    let navigate = useNavigate();
    let Go_SignUP = () => {
        navigate("../SignUp")
    }
    return (
        <div>
            <button onClick={Go_SignUP}>
                SignUp
            </button>
        </div>
    )
}

export default ButtonSignUp

import React from 'react'
import { useNavigate } from 'react-router'

const LoginBtn = () => {
    let naveigate = useNavigate()
    const LoginPlz = () => {
        naveigate('./home')
    }
    return (
        <div>
            <button onClick={LoginPlz}>
                Login
            </button>
        </div>
    )
}

export default LoginBtn
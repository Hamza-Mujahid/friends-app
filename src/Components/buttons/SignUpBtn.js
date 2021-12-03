import React from 'react'
import { useNavigate } from 'react-router'

const SignUpBtn = () => {
    let naveigate = useNavigate()
    const SignUpPlz = () => {
        naveigate('./SignUp')
    }
    return (
        <div>
            <button onClick={SignUpPlz}>
                SignUp
            </button>
        </div>
    )
}

export default SignUpBtn
import React from 'react'
import { useNavigate } from 'react-router'

const LogoutBtn = () => {
    let naveigate = useNavigate()
    const LogoutPA = () => {
        naveigate('../')
    }
    return (
        <div>
            <button onClick={LogoutPA}>
                Logout
            </button>
        </div>
    )
}

export default LogoutBtn
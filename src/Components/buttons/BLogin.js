import React from 'react'
import { useNavigate } from 'react-router'

const LogBtn = () => {
    let naveigate = useNavigate()
    const LogPA = () => {
        naveigate('../')
    }
    return (
        <div>
            <button onClick={LogPA}>
                login
            </button>
        </div>
    )
}

export default LogBtn
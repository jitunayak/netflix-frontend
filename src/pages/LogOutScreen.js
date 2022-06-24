import { Auth } from 'aws-amplify'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogOutScreen() {
    const navigate = useNavigate();
    useEffect(() => {
        Auth.signOut();
        navigate("/login")
        return () => {
        }
    },)

    return (
        <div>LogOutScreen</div>
    )
}

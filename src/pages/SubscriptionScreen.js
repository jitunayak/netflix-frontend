import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../elements/Button'

export default function SubscriptionScreen() {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            window.open('https://buy.stripe.com/test_5kA5lrgh2fPx9JSdQQ')
        }, 200)
    }, [])

    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='text-white text-2xl pt-10' >Redirect to Subscription page</div>
            <div className='text-zinc-200'>Currently Payment won't redirect you to main application</div>
            <Button primary={true} onClick={() => navigate('/home')} >Go Back Home </Button>
        </div>
    )
}

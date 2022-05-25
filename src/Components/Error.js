import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000);
    }, [navigate]);

    return (
        <div>
            <h1> 404 ERROR! PAGE NOT FOUND</h1>
        </div>
    )
}

export default Error
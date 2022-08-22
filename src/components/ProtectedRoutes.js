import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const ProtectedRoutes = ( {element}) => {

    const user = useSelector()

    if(!user){
        return <Navigate to='/' />
    }
    else{
        return element
    }
}

export default ProtectedRoutes
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../../Util/ElementRelated/LoadingSpinner'

function ProtectedRouter({ loggedComponent, }) {

    let [isLoading, setIsLoading] = useState(true);
    let userAuth = useSelector((state) => state.userAuth)
    let navigate = useNavigate();

    useEffect(() => {
        if ((!userAuth.isLoading && !userAuth.isLogged)) {
            navigate("/login")
        } else if (userAuth?.isLogged && !userAuth.isLoading) {
            setIsLoading(false)
        } 
    }, [userAuth.isLoading])




    return (
        <>
            {isLoading ? <LoadingSpinner isShow={true}></LoadingSpinner> : loggedComponent}
        </>

    )
}

export default ProtectedRouter
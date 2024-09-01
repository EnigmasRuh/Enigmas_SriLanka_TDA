import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/Authprovider';

export default function ProtectedRoute({children}) {

    const {user} = useAuth();
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if(user === null){
            navigate('/login', {replace: true});
        }
    }, [user, navigate]);

  return children;
}

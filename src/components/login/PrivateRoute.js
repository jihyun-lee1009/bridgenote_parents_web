// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, component: Component }) => {

    return (
        authenticated ? Component : <Navigate to="/parent/login" {...alert("로그인이 필요합니다.")}></Navigate>
    )
}

export default PrivateRoute;
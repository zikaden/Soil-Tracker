import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children, redirectTo }) {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <p>Is loading...</p>;
    } else if (!isLoggedIn) {
        return <Navigate to={redirectTo} />;
    } else {
        return children ? children : <Outlet />;
    }
}
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (!username || !password) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />
}

export default ProtectedRoute;

import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const navigate = useNavigate();
    if (!username || !password) {
        navigate('/login');
    }

    return <Outlet />
}

export default ProtectedRoute;

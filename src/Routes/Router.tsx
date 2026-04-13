import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginProvider from "../contexts/LoginProvider";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";

const routes = [
    {
        path: '/login',
        element: (
            <LoginProvider>
                <LoginForm />
            </LoginProvider>
        )
    },
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <Navigate to="dashboard" replace />
            },
            {
                path: 'dashboard',
                element: <Dashboard />
            }
        ]
    }

]

export const router = createBrowserRouter(routes);
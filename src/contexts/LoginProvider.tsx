import React, { useEffect, useState } from "react"
import { LoginContext, type FormDataType } from "./LoginContext";
import { useNavigate } from "react-router-dom";

const LoginProvider = ({ children }: { children: React.ReactNode }) => {

    const [formData, setFormData] = useState<FormDataType>({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const handleLogin = async (data: FormDataType) => {
            try {
                setError("");
                localStorage.setItem('username', 'emilys');
                localStorage.setItem('password', 'pass');
                setFormData(data);
                navigate('/dashbord');
            } catch (err) {
                setError(JSON.stringify(err));
                return err;
            }
        }
        const { username, password } = formData;

        if (username && password) {
            handleLogin({ username, password });
        }
    }, [formData, navigate])


    return (
        <LoginContext.Provider value={{ formData, setFormData, error }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

import React, { useState } from "react"
import { LoginContext, type FormDataType } from "./LoginContext";
import { useNavigate } from "react-router-dom";

const LoginProvider = ({ children }: { children: React.ReactNode }) => {

    const [formData, setFormData] = useState<FormDataType>({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (data: FormDataType) => {
        const { username, password } = data;

        if (username === "emilys" && password === "pass") {
            setError("");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            navigate("/dashboard");
            return;
        }

        setError("Invalid username or password");
    };


    return (
        <LoginContext.Provider value={{ formData, setFormData, error, handleLogin }}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

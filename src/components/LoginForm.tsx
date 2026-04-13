import type { ChangeEvent, FormEvent } from "react";
import { useLoginContext } from "../contexts/LoginContext";

const LoginForm = () => {
    const { formData, setFormData, error, handleLogin } = useLoginContext();

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(formData);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={onChangeInput}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onChangeInput}
                />

                <button type="submit">Login</button>

                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default LoginForm;


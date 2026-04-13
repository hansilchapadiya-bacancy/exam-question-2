import { createContext, useContext } from 'react'


export type FormDataType = {
    username: string,
    password: string
}

type LoginContextType = {
    formData: FormDataType,
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>
    error: string
    handleLogin: (data: FormDataType) => void
}


export const LoginContext = createContext<LoginContextType | null>(null);

export const useLoginContext = () => {
    const context = useContext(LoginContext);

    if (!context) throw new Error("useLoginContext must be used within LoginProvider");
    return context;

}

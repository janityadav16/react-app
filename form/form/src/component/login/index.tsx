import React from "react"

interface LoginProps {
    setIsAuth: (value: boolean) => void;
}

export default function Login({ setIsAuth }: LoginProps) {
    const [password, setPassword] = React.useState<string>("")

    return (
        <>
            <input name="password" type="password" placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} />
            <button onClick={() => {
                if (password == "root") {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }

            }}>Login</button>
        </>
    )

}
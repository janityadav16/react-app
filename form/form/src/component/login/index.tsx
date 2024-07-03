import React from "react"

interface LoginProps {
    setIsAuth: (value: boolean) => void;
}

export default function Login({ setIsAuth }: LoginProps) {
    const [password, setPassword] = React.useState<string>("")

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-900">
            <input name="password" type="password" placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} className="border-4 placeholder-black m-6 p-2 border border-3  border-black border-solid items-center justify-center rounded hover:bg-cyan-800 text-white" />
            <button onClick={() => {
                if (password == "root") {
                    setIsAuth(true)
                } else {
                    setIsAuth(false)
                }

            }} className="border-black border-2 rounded bg-black p-2 m-4 text-white hover:bg-cyan-900">Login</button>
        </div>
    )

}
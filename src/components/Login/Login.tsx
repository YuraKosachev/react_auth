import { FormEvent, useState } from "react"

export default function Login() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };
    return (<div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <input type="text" name="login" value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={pass} onChange={e => setPass(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
};
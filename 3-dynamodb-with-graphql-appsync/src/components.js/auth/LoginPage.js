export function LoginPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = async() => {
        try {
            console.log(email)
            console.log(password)

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <>
        <h1>Login</h1>
        <form>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleLogin}>Login</button>
                            <Link to='/register'>
                                <button>Register</button>
                            </Link>
                            <Link to='/' >
                                <button>Cancel</button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>  
        </>
    )
}
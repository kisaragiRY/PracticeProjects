import { Link } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { Auth } from 'aws-amplify'

export function RegisterPage(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleRegister = async() => {
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
            <h1>Register</h1>
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
                                <button onClick={handleRegister}>Register</button>
                                <Link to='/login'>
                                    <button>Login</button>
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
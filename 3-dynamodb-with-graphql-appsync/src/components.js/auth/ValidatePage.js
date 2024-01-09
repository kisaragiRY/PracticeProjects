import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ValidatePage() {
    const [email, setEmail] = useState()
    const [authenticationCode, setAuthenticationCode] = useState()

    const handleAuthentication = async() => {
        try {
            console.log(email)
            console.log(authenticationCode)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <h1>
            Authetication
        </h1>
        <form>
            <tbody>
                <tr>
                    <td>
                        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Your Email" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" onChange={e => setAuthenticationCode(e.target.value)} placeholder="Your Authetification Code" />
                    </td>
                </tr>
                <tr>
                    <button onClick={handleAuthentication}>Validate</button>
                    <Link to="/">
                        <button>Cancle</button>
                    </Link>
                </tr>
            </tbody>
        </form>
        </>
    )
}
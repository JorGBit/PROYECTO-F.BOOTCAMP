/** @format */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { loginUserService } from '../services';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
   
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const authToken = await loginUserService({ email, password });
            login(authToken);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <section className="login-page">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>
                <button className="login-button">Login</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    );
};

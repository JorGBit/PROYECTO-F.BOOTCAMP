/** @format */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUserService } from '../services';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [UserName, setUsername] = useState('');
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        if (pass1 !== pass2) {
            setError('Passwords do not match');
            return;
        }
        try {
            await registerUserService({
                email,
                password: pass1,
                UserName,
                Name,
                LastName,
            });
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="register-page">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleForm} className="register-form">
                <fieldset className="register-fieldset">
                    <label htmlFor="text" className="register-label">
                        UserName
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                        className="register-input"
                    />
                </fieldset>
                <fieldset className="register-fieldset">
                    <label htmlFor="text" className="register-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="register-input"
                    />
                </fieldset>

                <fieldset className="register-fieldset">
                    <label htmlFor="text" className="register-label">
                        Lastname
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="name"
                        onChange={(e) => setLastName(e.target.value)}
                        className="register-input"
                    />
                </fieldset>
                <fieldset className="register-fieldset">
                    <label htmlFor="email" className="register-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />
                </fieldset>
                <fieldset className="register-fieldset">
                    <label htmlFor="pass1" className="register-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="pass1"
                        name="pass1"
                        required
                        onChange={(e) => setPass1(e.target.value)}
                        className="register-input"
                    />
                </fieldset>
                <fieldset className="register-fieldset">
                    <label htmlFor="pass2" className="register-label">
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        id="pass2"
                        name="pass2"
                        required
                        onChange={(e) => setPass2(e.target.value)}
                        className="register-input"
                    />
                </fieldset>

                <button className="register-button">Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    );
};

/** @format */

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Auth = () => {
    // const { token } = useContext(AuthContext);
    const { user, logout } = useContext(AuthContext);
    return user ? (
        <p>
            Logged in as <Link to={`/users`}>{user.email}</Link>{' '}
            <button onClick={() => logout()}>LogOut</button>
        </p>
    ) : (
        <ul>
            <li className="li_user">
                <Link to="/register">Register</Link>
            </li>
            <li className="li_user">
                <Link to="/login">Login</Link>
            </li>
        </ul>
    );
};

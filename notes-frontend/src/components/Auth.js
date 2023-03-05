/** @format */

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Auth = () => {
    // const { token } = useContext(AuthContext);
    const { user, logout } = useContext(AuthContext);
    return user ? (
        <p className="user_logueado">
            Logged in as <Link to={`/users`}>{user.email}</Link>{' '}
            <button className="btn_logueo" onClick={() => logout()}>
                LogOut
            </button>
        </p>
    ) : (
        <div className="section-wrapper">
            <section>
                <span className="li_user">
                    <Link to="/register">Register</Link>
                </span>
            </section>
            <section>
                <span className="li_user">
                    <Link to="/login">Login</Link>
                </span>
            </section>
        </div>
    );
};

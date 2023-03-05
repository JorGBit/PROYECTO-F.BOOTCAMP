/** @format */

import { Link } from 'react-router-dom';
import { Auth } from './Auth';

export const Header = () => {
    return (
        <header className="header">
            <h3 className="cat_note">
                <Link to="/">CAT NOTES</Link>
            </h3>
            <nav>
                <Auth />
            </nav>
        </header>
    );
};

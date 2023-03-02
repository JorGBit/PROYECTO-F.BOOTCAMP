/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  // const { token } = useContext(AuthContext);
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <p>
      Logged in as <Link to={`/users`}>{user.email}</Link>{" "}
      <button onClick={() => logout()}>LogOut</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};

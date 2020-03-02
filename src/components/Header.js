import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/target1.PNG";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "../components/LoginLink";

export default function Header() {
  const { user } = React.useContext(UserContext);
  return (
    <header className="header">
      <img src={logo1} alt="Target Higher Ed" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/compare">compare</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}

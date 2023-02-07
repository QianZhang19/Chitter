import { useState } from "react";
// import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    navigate("/postPeep", {
      replace: false,
      state: {
        email: user.email,
      },
    });
  };

  return (
    <>
      <h3>Log in to your account</h3>
      <form onSubmit={login}>
        <div>
          <input
            type="email"
            id="sign-in-email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            id="sign-in-password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Your password"
          />
        </div>
        <br />
        <input type="submit" value="Log in" />
      </form>
      <p>
        <Link to="/SignUp"> sign up</Link>
      </p>
    </>
  );
};

export default Login;

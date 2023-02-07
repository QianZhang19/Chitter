import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
        <>
            <h3>Join Chitter</h3>
            <form onSubmit={SignUp}>
                <div>
                    <input
                        type="text"
                        id="sign-up-firstName"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        placeholder="first name"
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        id="sign-up-lastNmae"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        placeholder="last name"
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        id="sign-up-email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="email"
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        id="sign-up-password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                </div>
                <br />
                <div>
                    <input
                        type="text"
                        id="sign-in-confirmPassword"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirmPassword"
                    />
                </div>
                <br />
                <div>
                    <input type="submit" value="Sign up" />
                </div>
                <br />
            </form>
            <p >
                Have an account already?
                <Link to="/">Log in</Link>
            </p>
        </>
    );
};

export default SignUp;

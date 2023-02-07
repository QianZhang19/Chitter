import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Peeps from './peeps'
const Home = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const setLoginUser = () => {
        navigate('/');
    }
    return (
        <>
            <Peeps name={state.email} />
            <button onClick={() => { setLoginUser() }}>Log out</button>
        </>
    )
};

export default Home;
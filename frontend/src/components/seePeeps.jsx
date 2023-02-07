import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Seepeeps = ({ data }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const setLoginUser = () => {
    navigate('/');
  }
  return (
    <div>
      <div>
        <h3>See all peeps:</h3>
      </div>
      <div>
        {state?.listData?.map((val, index) => (
          <div key={index}>

            <div className="newsShow">
              <div className="name">{val.name} :</div>
              <div>{val.message}</div>
              <span>{val.date}</span>
            </div>
            <br />
            <button onClick={() => { setLoginUser() }}>Log out</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seepeeps;

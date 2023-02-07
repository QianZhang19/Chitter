import React from "react";
import PostPeep from "./postPeeps";
import Seepeeps from "./seePeeps";
import { useState } from "react";
const Peeps = ({ name }) => {
    const [data, setData] = useState([]);
    return (
        <div>
            <div>
                <PostPeep setData={setData} data={data} name={name} />
            </div>
            <br />
        </div>
    );
};

export default Peeps;

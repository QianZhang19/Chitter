// import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

const PostPeep = ({ setData, data, name }) => {
    const currentDate = new Date();
    let navigate = useNavigate();
    const [peep, setPeep] = useState({
        name: '',
        message: ``,
        dateMade: `${currentDate.getDate()}`
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setPeep({
            ...peep,
            [name]: value
        });
    }

    const postPeepSubmit = (e) => {
        e.preventDefault();
        const newData = [...data];
        const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
        newData.push(
            {
                name,
                message: peep.message,
                date: now,
            }
        )
        setData(newData)
        console.log('data', data)
        console.log('data', currentDate)
        navigate("/seePeep", {
            replace: false,
            state: {
                listData: newData,
            },
        });

    }

    return (
        <div>
            <h3>Post a peep here!</h3>
            <form onSubmit={postPeepSubmit}>
                <input type="peep" id="create-peep" name="message" defaultValue={peep.message} onChange={handleChange} placeholder="write your peep here ..." />
                <button type="submit" onClick={() => { }}>
                    Peep
                </button>
            </form>
        </div>
    );
}


export default PostPeep;
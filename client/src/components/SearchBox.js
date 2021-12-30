import React, { useState } from "react"
import {Link, useNavigate } from 'react-router-dom';


export default function SearchBox() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/search/name/${name}`);
    };
    return (
        <form className="search" onSubmit={submitHandler}>
            <div className="">
                <input
                    type="text"
                    name="q"
                    id="q"
                    placeholder="Search.."
                    onChange={(e) => setName(e.target.value)}
                ></input>
                
                <button className="w3-white" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
}
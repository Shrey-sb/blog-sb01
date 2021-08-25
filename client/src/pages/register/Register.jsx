import "./register.css"
import {
    Link,
} from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import React from 'react'
import { axiosInstance } from "../../config";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(true);
        }

    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerform" onSubmit={handlesubmit} >
                <label>Username</label>
                <input className="registerinput" type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="registerinput" type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="registerinput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <button className="registerloginButton">
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>Login</Link>
            </button>
            {error && <span style={{ color: "yellow", marginTop: "10px" }}>Something went wrong!</span>}
        </div>
    );
}

export default Register;

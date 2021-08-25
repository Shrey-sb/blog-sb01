import "./login.css"
import {
    BrowserRouter as Link,
} from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { axiosInstance } from "../../config";
const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginform" onSubmit={handleSubmit}>
                <label>Useername</label>
                <input ref={userRef} className="logininput" type="text" placeholder="Enter your username..." />
                <label>Password</label>
                <input ref={passwordRef} className="logininput" type="password" placeholder="Enter your password..." />
                <button type="submit" disabled={isFetching} className="loginButton">Login</button>
            </form>
            <button className="loginregisterButton">
                <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>Register</Link>
            </button>
        </div>
    );
}

export default Login;

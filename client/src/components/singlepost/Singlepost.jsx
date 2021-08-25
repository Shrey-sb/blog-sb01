import "./singlepost.css"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";
const Singlepost = () => {
    const PF = "https://blog-sb01.herokuapp.com/images/";
    const { user } = useContext(Context);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updatemode, setupdatemode] = useState(false);

    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setpost] = useState({});
    useEffect(() => {
        const getpost = async () => {
            const res = await axios.get("/posts/" + path);
            setpost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getpost()
    }, [path]);

    const handleclick = async () => {
        try {
            await axios.delete("/posts/" + path, { data: { username: user.username }, });
            window.location.replace("/");
        } catch (err) {

        }

    }
    const handleupdate = async () => {
        try {
            await axios.put("/posts/" + path, {  username: user.username,title,desc, });
            setupdatemode(false);
            } catch (err) {

        }
    }
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                {post.photo &&
                    <img src={PF + post.photo}
                        alt=""
                        className="singlepostimg" />
                }
                {updatemode ? <input type="text" className="singlePostTitleInput"autofocus="true" value={title} onChange={ (e)=>setTitle(e.target.value) }/> : (
                    <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (<div className="singlepostedit">
                            <i className="singleposticon1 far fa-edit"  onClick={() => setupdatemode(true)}></i>
                            <i className="singleposticon2 far fa-trash-alt" onClick={handleclick}></i>
                        </div>)
                        }


                    </h1>
                )}

                <div className="singlepostinfo">
                    <span className="singlepostauthor">Author :
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlepostauthor">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updatemode ? (<textarea className="singlepostdescinput" value={desc} onChange={ (e)=>setDesc(e.target.value) }/>):(<p className="singlepostdes">
                    {desc}
                </p>) }
                {updatemode && <button className="singlepostbutton"onClick={handleupdate}>Update</button>}
                
            </div>
        </div>
    );
}

export default Singlepost;

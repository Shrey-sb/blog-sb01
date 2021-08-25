import React from 'react';
import "./topbar.css";
import {
    Link
  } from "react-router-dom";
  import { useContext } from "react";
import { Context } from "../../context/Context";
const PF= "http://localhost:5000/images/";
const Topbar = () => {
    
  const { user, dispatch } = useContext(Context);
  const handlelogout =()=>{
      dispatch({type: "LOGOUT"}); 
  }
    return (
        <div className="top">
            <div className="topleft">
                
              
                 <a href="https://wa.me/8585981938"><i class="topicon fab fa-whatsapp"></i></a>
                 <a href="https://www.instagram.com/xy.shrey/"> <i className="topicon fab fa-instagram-square"></i></a>
                </div>
            <div className="topcentre">
            <ul className="toplist">
                <li className="toplistitem"><Link to="/" style={{textDecoration:"none", color: "inherit"}}>HOME</Link></li>
                <li className="toplistitem"><Link to="/" style={{textDecoration:"none", color: "inherit"}}>ABOUT</Link></li>
               {/* <li className="toplistitem"><Link to="/" style={{textDecoration:"none", color: "inherit"}}>CONTACT</Link></li> */}
                <li className="toplistitem"><Link to="/write" style={{textDecoration:"none", color: "inherit"}}>WRITE</Link></li>
                <li className="toplistitem">
                    {user ?  <Link to="/"  onClick={handlelogout} style={{textDecoration:"none", color: "inherit"}}>LOGOUT</Link> : null}
                   
                    </li>
                </ul>

            </div>
            <div className="topright">
                

                {user ? (<Link to="/settings"><img className="topimage" alt ="" src ={ PF+user.profilePic} /></Link>
                
                ) : (
                    <>
                    <Link className="toplistitem"  to="/login" style={{textDecoration:"none", color: "inherit"}}>LOGIN</Link> 
                    <Link className="toplistitem" to="/register" style={{textDecoration:"none", color: "inherit"}}>REGISTER</Link>
                    </>
                )
                
                }
               
                <i className="topsearchicon fas fa-search"></i>
            </div>
        </div>
    );
}

export default Topbar;

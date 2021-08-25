import "./write.css";
import {useState} from "react";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
const Write = () => {
    const [title,setTitle]= useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          desc,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axiosInstance.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axiosInstance.post("/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };
    
    return (
        <div className="write">
            {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="" />
      )}
            
           <form className="writeform" onSubmit={handleSubmit}>
               <div className="writeformgroup">
                   <label htmlFor="fileinput">
                   <i className="writeicon fas fa-plus"></i>
                   </label>
                   <input
                    type="file" 
                    id="fileinput" 
                    style={{display:"none"}}
                    onChange={(e) => setFile(e.target.files[0])}
                     />
                   <input 
                   type="text" 
                   placeholder="Title"
                    className="writeinput" 
                    autoFocus={true}
                    onChange={e=>setTitle(e.target.value)}
                     />

               </div>
                <div className="writeformgroup">
                    <textarea
                     placeholder="Tell your Story..."  
                     type="text"
                      className="writeinput writetext" 
                      onChange={e=>setDesc(e.target.value)}
                       ></textarea>
                </div>
                <button  className="writeSubmit" type="submit">Publish</button>
           </form>
        </div>
    );
}

export default Write;

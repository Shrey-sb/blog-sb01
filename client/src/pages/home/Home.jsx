import "./home.css";
import Header from "../../components/header/header.jsx"
import Posts from "../../components/posts/Posts.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import axios from "axios"
import {useEffect , useState} from "react"
import {useLocation} from "react-router"
import { axiosInstance } from "../../config";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation()
    
    useEffect(() => {
        const fetchposts = async ()=>{
           const res = await axiosInstance.get("/posts"+ search);
           setPosts(res.data);
        }
       fetchposts();
    }, [search])
    return (
        <>
        <Header/>
        <div className="home">
           <Posts posts= {posts}/>
           <Sidebar/>

        </div>
        </>
    );
}

export default Home;

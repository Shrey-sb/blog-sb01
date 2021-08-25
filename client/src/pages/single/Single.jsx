import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Singlepost from "../../components/singlepost/Singlepost.jsx"
const Single = () => {
    return (
        <div className="single">
            <Singlepost/>
            <Sidebar/>
        </div>
    );
}

export default Single;

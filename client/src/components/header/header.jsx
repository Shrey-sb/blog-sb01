import "./header.css"

const Header = () => {
    return (
        <div className="header">
           <div className="headertitles">
               <span className="headertitlesm">React & Node</span>
               <span className="headertitlelg">Blog</span>
           </div>
           <img className="headerimg" src ="https://www.pixelstalk.net/wp-content/uploads/2016/08/1080p-Nature-Wallpaper.jpg" alt = ""/>
        </div>
    );
}

export default Header;

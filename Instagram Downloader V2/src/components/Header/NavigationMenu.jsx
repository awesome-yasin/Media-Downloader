import { NavLink } from "react-router-dom";

import ProfileIco from "../../Media/profile-icon.svg";

import PostIco from "../../Media/post-icon.svg";
import ReelIco from "../../Media/reel-icon.svg";
import StoryIco from "../../Media/story-icon.svg";
import IgtvIco from "../../Media/igtv-icon.svg";
import Music from "../../Media/music.png";
import feed from "../../Media/feed.svg";
const NavigationMenu = () => {
    return (
        <>
        <NavLink
        to="/igvio/feed"
        className="nav-buttons"
        activeClassName="active-navigation"
    >
        <img src={feed} className="nav-icons" alt="search Igtv" />
        <p className="nav-name">  Stalker viewer </p>
    </NavLink>
    <NavLink
        to="/igvio/feedDownload"
        className="nav-buttons"
        activeClassName="active-navigation"
    >
        <img src={feed} className="nav-icons" alt="search Igtv" />
        <p className="nav-name">  Stalker Downloader </p>
    </NavLink>
            <NavLink
                to="/igvio/profile"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img
                    src={ProfileIco}
                    className="nav-icons"
                    alt="search profile"
                />
                <p className="nav-name"> Profile viewer </p>
            </NavLink>

            <NavLink
        to="/igvio/profileHd"
        className="nav-buttons"
        activeClassName="active-navigation">
        <img src={feed} className="nav-icons" alt="search Igtv" />
        <p className="nav-name">  HD Profile Downloader </p>
    </NavLink>

            <NavLink
                to="/igvio/story"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={StoryIco} className="nav-icons" alt="search Story" />
                <p className="nav-name"> Story Downloader 1 </p>
            </NavLink>



            <NavLink
                to="/igvio/storydownload"
                className="nav-buttons"
                activeClassName="active-navigation"
            > 
                <img src={StoryIco} className="nav-icons" alt="search Story" />
                <p className="nav-name"> Story Downloader 2 </p>
            </NavLink>

            <NavLink
                to="/igvio/reel"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={ReelIco} className="nav-icons" alt="search Reel" />
                <p className="nav-name"> Reel viewer </p>
            </NavLink>

            <NavLink
                to="/igvio/reeldownload"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={ReelIco} className="nav-icons" alt="search Reel" />
                <p className="nav-name"> Reel Downloader </p>
            </NavLink>

            <NavLink
                to="/igvio/post"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={PostIco} className="nav-icons" alt="search Post" />
                <p className="nav-name"> Post viewer </p>
            </NavLink>

            <NavLink
                to="/igvio/postdownload"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={PostIco} className="nav-icons" alt="search Post" />
                <p className="nav-name"> Post Downloader </p>
            </NavLink>

            <NavLink
                to="/igvio/igtv"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={IgtvIco} className="nav-icons" alt="search Igtv" />
                <p className="nav-name"> Igtv Viewer </p>
            </NavLink>

            <NavLink
                to="/igvio/igtvdownload"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={IgtvIco} className="nav-icons" alt="search Igtv" />
                <p className="nav-name"> Igtv Downloader </p>
            </NavLink>

            <NavLink
                to="/igvio/music"
                className="nav-buttons"
                activeClassName="active-navigation"
            >
                <img src={Music} className="nav-icons" alt="search Igtv" />
                <p className="nav-name"> Music </p>
            </NavLink>         
        </>
    );
};

export default NavigationMenu;

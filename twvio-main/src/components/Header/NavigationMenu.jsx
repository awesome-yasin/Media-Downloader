import { NavLink } from "react-router-dom";


import feed from "../../Media/fb.png";
const NavigationMenu = () => {
    return (
        <>
        <NavLink
        to="/fbvio/download"
        className="nav-buttons"
        activeClassName="active-navigation"
    >
        <img src={feed} className="nav-icons" alt="search Igtv" />
        <p className="nav-name">  Twitter Video Downloader </p>
    </NavLink>
        </>
    );
};

export default NavigationMenu;

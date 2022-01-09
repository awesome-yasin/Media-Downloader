import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Profile from "./components/Profile";
import Story from "./components/Story";
import Reels from "./components/Reels";
import Post from "./components/Post";
import Igtv from "./components/Igtv";
import Feed from "./components/Feed";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";

import "./App.css";
import "./components/Styles/commonStyles.css";


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/igvio/" component={Feed} />
                <Route path="/igvio/profile" component={Profile} />
                <Route path="/igvio/story" component={Story} />
                <Route path="/igvio/reel" component={Reels} />
                <Route path="/igvio/post" component={Post} />
                <Route path="/igvio/igtv" component={Igtv} />
                <Route path="/igvio/feed" component={Feed} />
                <Route component={Error} />
                <Route />
            </Switch>
            <Footer />
        </>
    );
};

export default App;

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile";
import Story from "./components/Story";
import Reels from "./components/Reels";
import ReelsDown from "./components/ReelsDown";
import Post from "./components/Post";
import PostDown from "./components/PostDown";
import ProfileHd from "./components/ProfileHd";
import Igtv from "./components/Igtv";
import Feed from "./components/Feed";
import FeedDownload from "./components/feedDownload";
import Music from "./components/music";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";
import StoryDownload from "./components/StoryDownload"
import IgtvDown from "./components/IgtvDown";
import "./App.css";
import "./components/Styles/commonStyles.css";


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/igvio/#/" component={Feed} />
                <Route path="/igvio/profile" component={Profile} />
                <Route path="/igvio/story" component={Story} />
                <Route path="/igvio/storydownload" component={StoryDownload} />
                <Route path="/igvio/reel" component={Reels} />
                <Route path="/igvio/reeldownload" component={ReelsDown} />
                <Route path="/igvio/post" component={Post} />
                <Route path="/igvio/postdownload" component={PostDown} />
                <Route path="/igvio/profilehd" component={ProfileHd} />
                <Route path="/igvio/igtv" component={Igtv} />
                <Route path="/igvio/igtvdownload" component={IgtvDown} />
                <Route path="/igvio/feed" component={Feed} />
                <Route path="/igvio/feedDownload" component={FeedDownload} />
                <Route path="/igvio/music" component={Music} />
                <Route component={Error} />
                <Route />
            </Switch>
            <Footer />
        </>
    );
};

export default App;

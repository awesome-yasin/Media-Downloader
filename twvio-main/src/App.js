import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Feed from "./components/Feed";

import "./App.css";
import "./components/Styles/commonStyles.css";


const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/fbvio/#/" component={Feed} />
                <Route path="/fbvio/download" component={Feed} />
                
              
                <Route />
            </Switch>
           <Footer />
        </>
    );
};

export default App;

import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import People from "./Components/People";
import Home from "./Components/Home";
import GeneralInfo from "./Components/GeneralInfo";
import Cegep from "./Components/Cegep";
import Freshman from "./Components/Freshman";
import Whycs from "./Components/Whycs";
import Undergraduate from "./Components/Undergraduate";
import Graduate from "./Components/Graduate";
import ResearchArea from "./Components/ResearchArea";
import Login from "./Components/Login";
import News from "./Components/News";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <MyNavbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/people">
          <People />
        </Route>

        <Route path="/generalinfo">
          <GeneralInfo />
        </Route>

        <Route path="/cegep">
          <Cegep />
        </Route>

        <Route path="/freshman">
          <Freshman />
        </Route>

        <Route path="/whycs">
          <Whycs />
        </Route>

        <Route path="/undergraduate">
          <Undergraduate />
        </Route>

        <Route path="/graduate">
          <Graduate />
        </Route>

        <Route path="/areas">
          <ResearchArea />
        </Route>

        <Route path="/internal">
          <Login />
        </Route>

        <Route exact path="/news">
          <News/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

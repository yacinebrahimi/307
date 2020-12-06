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
      </Switch>
      <Switch>
        <Route path="/people">
          <People />
        </Route>
      </Switch>
      <Switch>
        <Route path="/generalinfo">
          <GeneralInfo/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/cegep">
          <Cegep/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/freshman">
          <Freshman/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/whycs">
          <Whycs/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/undergraduate">
          <Undergraduate/>
        </Route>
      </Switch>
      <Switch>
        <Route path="/graduate">
          <Graduate/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

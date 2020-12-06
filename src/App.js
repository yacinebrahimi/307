import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import People from "./Components/People";
import Home from "./Components/Home";
import GeneralInfo from "./Components/GeneralInfo";

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
    </Router>
  );
}

export default App;

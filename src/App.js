import "./App.css";
import MyNavbar from "./Components/MyNavbar";
import People from "./Components/People";

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
        <MyNavbar/>
        <Switch>
          <Route path="/people">
            <People/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

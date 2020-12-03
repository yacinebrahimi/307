import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from "react-router-dom";

function People() {
  return (
    <div>
        <Link to="/home">
            GO HOME
        </Link>
        Hello
    </div>
  );
}

export default People;

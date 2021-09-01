import { Badge } from "react-bootstrap";
import "./App.css";
import Dynamic from "./components/Dynamic/Dynamic";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <Badge>HOME</Badge>,
      main: () => <Home />,
    },
    {
      path: "/mortality",
      sidebar: () => <Badge>MORTALITY</Badge>,
      main: () => <Dynamic />,
    },
    {
      path: "/others",
      sidebar: () => <Badge>OTHERS!</Badge>,
      main: () => <h2>others</h2>,
    },
  ];

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="homeDiv">
          <div className="sideBarMenu">
            <ul className="sideBarUl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mortality">Mortality</Link>
              </li>
              <li>
                <Link to="/others">Others</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div className="mainContent">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

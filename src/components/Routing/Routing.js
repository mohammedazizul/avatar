import React from "react";
import { Badge } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import About from "../About/About";
import Dynamic from "../Dynamic/Dynamic";
import Home from "../Home/Home";
import MixedChart from "../MixedChart/MixedChart";
import TestCSV from "../TestCSV/TestCSV";

const Routing = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <Badge>HOME</Badge>,
      main: () => <Home />,
    },
    {
      path: "/home",
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
    {
      path: "/test-csv-data",
      sidebar: () => <Badge>Test csv Data</Badge>,
      main: () => <TestCSV />,
    },
    {
      path: "/mixed-chart",
      sidebar: () => <Badge>Mixed Chart</Badge>,
      main: () => <MixedChart />,
    },
    {
      path: "/about",
      sidebar: () => <Badge>About</Badge>,
      main: () => <About />,
    },
  ];
  return (
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
          <li>
            <Link to="/test-csv-data">Test csv Data</Link>
          </li>
          <li>
            <Link to="/mixed-chart">Mixed Chart</Link>
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
  );
};

export default Routing;

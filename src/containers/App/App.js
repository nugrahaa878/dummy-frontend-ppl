import { ConnectedRouter } from "connected-react-router";
import { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { history } from "../../store";
import { routes } from "./routes";

class App extends Component {
    render() {
        const pages = routes.map((route, index) => {
            return (
                <Route
                    component={route.component}
                    exact={route.exact}
                    path={route.path}
                    key={index}
                />
            );
        });

        return (
            <Fragment>
                <Switch>
                  {pages}
                  <Redirect to='/'/>
                </Switch>
            </Fragment>
        );
    }
}

export default App;

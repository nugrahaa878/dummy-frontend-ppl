import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import createRootReducer from './modules'
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.REDUX_DEVTOOLS_EXTENSION;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
);

export default store;

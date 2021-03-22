import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import dashboardReducer from '../containers/Dashboard/reducer';
import landingPageReducer from '../containers/LandingPage/reducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    dashboard: dashboardReducer,
    landingPage: landingPageReducer
});
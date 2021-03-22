import Dashboard from "../Dashboard/Dashboard";
import LandingPage from "../LandingPage/LandingPage";

export const routes = [
    {
        component: LandingPage,
        exact: true,
        path: '/'
    },
    {
        component: Dashboard,
        exact: true,
        path: '/dashboard'
    },
];
import { CHAT_ROUTE, DASHBOARD_ROUTE, LOGIN_ROUTE } from './utils/consts';

import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: DASHBOARD_ROUTE,
    Component: Dashboard,
  },
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];

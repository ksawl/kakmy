import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';

import { Context } from '../index';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  
  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={DASHBOARD_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

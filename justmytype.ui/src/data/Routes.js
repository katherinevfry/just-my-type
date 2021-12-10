import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Home from '../Views/Home';
import UserPage from '../Views/UserPage';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)}/>;
};

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/myfonts' user={user} component={() => <UserPage user={user} />}/>
      </Switch>
    </div>
  )
}

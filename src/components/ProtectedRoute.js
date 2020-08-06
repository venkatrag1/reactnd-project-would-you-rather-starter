import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
      fakeAuthCentralState.isAuthenticated === true ?
         <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
   )} />
);

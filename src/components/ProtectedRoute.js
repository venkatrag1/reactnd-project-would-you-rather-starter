/* Reference: https://medium.com/@leonardobrunolima/react-tips-how-to-protect-routes-for-unauthorized-access-with-react-router-v4-73c0d451e0a2
Make a Django style ProtectedRoute that interecepts all Routes and
redirects to /login if user is not authenticated passing in the location object in the location state.
*/
import React, { Fragment } from "react";
import { Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';


const ProtectedRoute = ({ component: Component, authedUser, ...rest }) => (
   <Route {...rest} render={(props) => (
      authedUser !== '' // is authenticated with valid authedUser
      ?  (
         <Fragment>
            <NavBar />
            <Component {...props} />
         </Fragment>
         )
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
      /* Redirect to Login. The new key from that we set in state of Redirect,
       is accessible via this.props.location.state.from in the Login component pointed to by the pathname '/login' */
   )} />
);

export default ProtectedRoute;

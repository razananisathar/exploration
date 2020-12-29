import React from 'react';
import { Route } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
// );

// export default ProtectedRoute;

import { useAuth } from './use-auth';

const ProtectedRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

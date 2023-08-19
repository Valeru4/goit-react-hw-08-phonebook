import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authentificatedSelector } from 'redux/authSlice/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authentificated = useSelector(authentificatedSelector);

  return authentificated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

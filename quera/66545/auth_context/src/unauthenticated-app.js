import React from 'react';

import Login from './components/login';
import Register from './components/register';

const UnauthenticatedApp = () => {
  const [loginPage, setLoginPage] = React.useState(true);

  const togglePage = () => setLoginPage(page => !page);

  return (
    <div className="section-wrapper">
      {loginPage ? (
        <Login changePage={togglePage} />
      ) : (
        <Register changePage={togglePage} />
      )}
    </div>
  );
};

export default UnauthenticatedApp;

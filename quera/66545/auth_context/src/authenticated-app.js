import React from 'react';

import {AuthContext} from './context/auth-context';

const AuthenticatedApp = () => {
  const {user, logout} = React.useContext(AuthContext);

  return (
    <div className="section-wrapper">
      <div className="account-form">
        <h2 data-testid="greeting">Hello {user.username}</h2>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AuthenticatedApp;

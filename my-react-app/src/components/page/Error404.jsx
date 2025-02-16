import React from 'react';
import { Link } from 'react-router-dom';

// Error404 component: Renders a custom 404 error page
function Error404() {
  return (
    <>
      <div className="error-content">
        <h1 className="title404">404</h1>
        <p className="text404">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
        <Link to="/" className="link404">
          Retourner sur la page d&apos;accueil
        </Link>
      </div>
    </>
  );
}

export default Error404;
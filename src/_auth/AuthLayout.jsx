import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthLayout = () => {
    const isAuthenticated = true;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          
        </>
      )}
    </>
  );
}

export default AuthLayout

import React from 'react';
import Login from './Components/Login';
import { Outlet } from 'react-router-dom';
const Authenticated = () => {
    const user = {loggedIn: false};
    return user && user.loggedIn;
}
function ProtectedRoutes() {
    const isAuth = Authenticated()
  return (
    isAuth ? <Outlet/> : <Login/>
  )
}

export default ProtectedRoutes
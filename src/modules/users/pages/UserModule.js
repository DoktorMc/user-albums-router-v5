import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import UserCRDPage from "./userCRDPage/UserCRDPage";
import UserDetailsPage from "./userDetailsPage/UserDetailsPage";
import UserPage from "./userPage/UserPage";

const UserModule = () => {
  return (
    <Switch>
      <Route path="/">
        <UserPage />
      </Route>
      <Route path="/id">
        <UserDetailsPage />
      </Route>
      <Route path="/add/" element={<UserCRDPage />} />
      <Route path="/:id/edit/" element={<UserCRDPage />} />
      <Route path="*" element={<NavLink to="/notfound" replace={true} />} />
    </Switch>
  );
};

export default UserModule;

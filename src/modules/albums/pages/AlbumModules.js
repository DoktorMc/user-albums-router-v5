import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import AlbumDetailsPage from "./albumDetailsPage/AlbumDetailsPage";
import AlbumPage from "./albumsPage/AlbumPage";


const AlbumsModule = () => {
  return (
    <Switch>
      <Route path="/" element={<AlbumPage />} />
      <Route path="/:id" element={<AlbumDetailsPage/>} />
      <Route path="*" element={<NavLink to="/notfound" replace={true} />} />
    </Switch>
  );
};

export default AlbumsModule;

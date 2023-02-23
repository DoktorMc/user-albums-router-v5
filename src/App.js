import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import HomePage from "./modules/home/HomePage";
import AlbumPage from "./modules/albums/pages/albumsPage/AlbumPage";
import NotFoundPage from "./modules/about/notFound/NotFoundPage";
import Navigation from "./modules/common/commonComponents/navigation/Navigation";
import "./App.css";
import UserPage from "./modules/users/pages/userPage/UserPage";
import UserDetailsPage from "./modules/users/pages/userDetailsPage/UserDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users/:id" component={UserDetailsPage} />
          <Route path="/users" component={UserPage} />

          <Route path="/albums" component={AlbumPage} />

          <Route path="/notfound">
            <NotFoundPage />
          </Route>
          <Route path="*">
            <NavLink to="/notfound" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
